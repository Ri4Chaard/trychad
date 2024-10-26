import React from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { timeout } from "@/lib/timeout";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormDescription } from "./form-description";
import { FormSelect } from "./form-select";
import { _platforms } from "@/constants/constants";

interface Props {
    className?: string;
}

export const OtherPlatformConnectionForm: React.FC<Props> = ({ className }) => {
    const { user, setUser, onChangeState } = useAuthStore();

    const form = useForm<{ platform: string }>({
        resolver: zodResolver(
            z.object({
                platform: z.string().min(1, "Сhoose a platform"),
            })
        ),
        defaultValues: {
            platform: "",
        },
    });

    const onSubmit = async (data: { platform: string }) => {
        try {
            await timeout(2000).then(() => {
                setUser({ ...user, ...data });
                onChangeState("success");
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={cn("", className)}>
            <FormDescription
                className="mb-8"
                title="Don’t use Shopify?"
                description="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform."
            />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormSelect
                        form={form}
                        label="Platform"
                        name="platform"
                        className="mb-8"
                        placeholder="Select platform"
                        selectItems={_platforms}
                    />
                    <Button
                        loading={form.formState.isSubmitting}
                        className="w-full mb-4"
                    >
                        Connect store
                    </Button>
                </form>
            </Form>
        </div>
    );
};

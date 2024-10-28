import React from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { timeout } from "@/lib/timeout";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormDescription } from "../form/form-description";
import { FormSelect } from "../form/form-select";
import { _supportTicketPlatforms } from "@/constants/constants";

interface Props {
    className?: string;
}

export const OtherEmailConnectionForm: React.FC<Props> = ({ className }) => {
    const { user, setUser, onChangeState } = useAuthStore();

    const form = useForm<{ supportEmail: string }>({
        resolver: zodResolver(
            z.object({
                supportEmail: z.string().min(1, "Сhoose a platform"),
            })
        ),
        defaultValues: {
            supportEmail: "",
        },
    });

    const onSubmit = async (data: { supportEmail: string }) => {
        try {
            await timeout(2000).then(() => {
                setUser({ ...user, ...data });
                onChangeState("done");
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={cn("", className)}>
            <FormDescription
                className="mb-8"
                title="Don’t use Gmail?"
                description="Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform."
            />

            <Form {...form}>
                <form
                    className={cn({
                        "pointer-events-none opacity-80":
                            form.formState.isSubmitting,
                    })}
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormSelect
                        formProps={form}
                        label="Platform"
                        name="supportEmail"
                        className="mb-8"
                        placeholder="Select platform"
                        selectItems={_supportTicketPlatforms}
                    />
                    <Button
                        loading={form.formState.isSubmitting}
                        className="w-full mb-4"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

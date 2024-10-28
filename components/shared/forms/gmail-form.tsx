"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { timeout } from "@/lib/timeout";
import { useAuthStore } from "@/store/auth-store";
import { FormDescription } from "../form/form-description";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { _featuresEmail } from "@/constants/constants";

interface Props {
    className?: string;
}

export const GmailForm: React.FC<Props> = ({ className }) => {
    const { user, setUser, onChangeState } = useAuthStore();

    const form = useForm<{ supportEmail: string }>({
        defaultValues: {
            supportEmail: "gmail@gmail.com",
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
                title="Connect to customer support email"
                description="Allows Chad to send automated responses on your behalf from your usual support mailbox"
            />

            <ul className="bg-[#F8F9FC] rounded-lg p-4 mb-8">
                {_featuresEmail.map((feature, index) => (
                    <li key={index} className="flex gap-2 mb-4 last:mb-0">
                        <Check
                            width={16}
                            height={16}
                            color="#65BD47"
                            className="mt-[2px]"
                        />
                        <div className="flex-1">
                            <h3 className="text-sm font-bold mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-xs">{feature.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Button
                        loading={form.formState.isSubmitting}
                        className={cn(
                            "w-full flex justify-start p-0 mb-4 border border-[#5383EC] bg-[#5383EC] rounded-[2px] h-[50px]",
                            {
                                "justify-center": form.formState.isSubmitting,
                            }
                        )}
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white">
                            <img src="/assets/icons/google.svg" alt="google" />
                        </div>
                        <p className="text-center flex-1">
                            Connect Gmail account
                        </p>
                    </Button>
                </form>
            </Form>
        </div>
    );
};

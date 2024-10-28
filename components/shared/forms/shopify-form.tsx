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
import { _features } from "@/constants/constants";

interface Props {
    className?: string;
}

export const ShopifyForm: React.FC<Props> = ({ className }) => {
    const { user, setUser, onChangeState } = useAuthStore();

    const form = useForm<{ platform: string }>({
        defaultValues: {
            platform: "shopify",
        },
    });

    const onSubmit = async (data: { platform: string }) => {
        try {
            await timeout(2000).then(() => {
                if (user.platform === "shopify") {
                    onChangeState("shopify_already_connected");
                } else {
                    setUser({ ...user, ...data });
                    onChangeState("shopify_connected");
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cn("", className)}>
            <FormDescription
                className="mb-8"
                title="Connect to Shopify Store"
                description="Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options."
            />

            <ul className="bg-[#F8F9FC] rounded-lg p-4 mb-8">
                {_features.map((feature, index) => (
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
                        className="w-full mb-4"
                    >
                        Connect store
                    </Button>
                </form>
            </Form>
        </div>
    );
};

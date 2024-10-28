"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import {
    formRegisterSchema,
    TFormRegisterValues,
} from "@/constants/auth-schemas";
import { Form } from "@/components/ui/form";
import { FormInput } from "../form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store/auth-store";
import { timeout } from "@/lib/timeout";
import { FormDescription } from "../form/form-description";

interface Props {
    className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
    const { user, setUser, onChangeState } = useAuthStore();

    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
        },
    });

    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await timeout(2000).then(() => {
                setUser(data);
                onChangeState("platform");
            });
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        if (user) {
            form.setValue("email", user.email);
            form.setValue("name", user.name);
            form.setValue("password", user.password);
        }
    }, [user]);

    return (
        <Form {...form}>
            <FormDescription
                className="mb-8"
                title="Welcome to Chad"
                description="Go live in 10 minutes! Our self-service widget
                            empowers your customers to manage orders and track
                            shipments 24/7 without driving you crazy."
            />
            <form
                className={cn(
                    "flex flex-col gap-6",
                    {
                        "pointer-events-none opacity-80":
                            form.formState.isSubmitting,
                    },
                    className
                )}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormInput
                    form={form}
                    label="Email"
                    name="email"
                    placeholder="megachad@trychad.com"
                />
                <FormInput
                    form={form}
                    label="Your name"
                    name="name"
                    placeholder="Mega Chad"
                />
                <FormInput
                    form={form}
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                />

                <Button
                    className="font-regular"
                    loading={form.formState.isSubmitting}
                >
                    Create account
                </Button>
            </form>
        </Form>
    );
};

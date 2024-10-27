"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "@/constants/auth-schemas";
import { Form } from "@/components/ui/form";
import { FormInput } from "../form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store/auth-store";
import { timeout } from "@/lib/timeout";
import { FormDescription } from "../form/form-description";
import { useRouter } from "next/navigation";

interface Props {
    className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
    const { user, setUser } = useAuthStore();
    const router = useRouter();

    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: TFormLoginValues) => {
        try {
            await timeout(2000).then(() => {
                if (
                    user &&
                    user.email === data.email &&
                    user.password === data.password
                ) {
                    router.push("/dashboard");
                } else {
                    form.setError("password", {
                        type: "manual",
                        message: "Email or password is incorrect",
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form {...form}>
            <FormDescription
                className="mb-8"
                title="Welcome back"
                description="Feeling ready to take on the day? Chad is too!"
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
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                />

                <Button
                    className="font-regular"
                    loading={form.formState.isSubmitting}
                >
                    Login
                </Button>
            </form>
        </Form>
    );
};

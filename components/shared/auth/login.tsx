"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FormLogo } from "../form/form-logo";
import { LoginForm } from "../forms/login-form";
import { useRouter } from "next/navigation";

interface Props {
    className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
    const router = useRouter();

    return (
        <div
            className={cn(
                "flex flex-1 items-center justify-center sm:min-h-screen sm:bg-bgImage lg:w-full",
                className
            )}
        >
            {/* outer container */}
            <div className="bg-white sm:rounded-lg sm:shadow-[0_5px_20px_#6C758B33] sm:px-10 sm:py-16">
                <div className="px-8 pt-4 text-[#20496C] sm:w-[460px] xl:p-0">
                    <FormLogo className="mb-4 xl:mb-6" />

                    <div>
                        <LoginForm className="mb-4" />

                        <div
                            className="flex justify-center text-xs"
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            <p>
                                Don’t have an account?{" "}
                                <button className="text-primary">
                                    Join the waitlist
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

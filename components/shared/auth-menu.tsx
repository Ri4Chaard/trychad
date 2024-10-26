import React from "react";
import { cn } from "@/lib/utils";
import { FormLogo } from "./form/form-logo";
import { FormProgressBar } from "./form/form-progress-bar";
import { FormDescription } from "./form/form-description";
import { RegisterForm } from "./form/register-form";
import { AuthSwitchBlock } from "./auth-switch-block";

interface Props {
    className?: string;
}

export const AuthMenu: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "flex flex-1 items-center justify-center sm:min-h-screen bg-bgImage lg:w-full",
                className
            )}
        >
            {/* outer container */}
            <div className="bg-white sm:rounded-lg sm:shadow-[0_5px_20px_#6C758B33] sm:px-10 sm:py-16">
                <div className="px-8 pt-4 text-[#20496C] sm:w-[460px] xl:p-0">
                    <FormLogo className="mb-4 xl:mb-6" />

                    <FormProgressBar className="mb-8" />

                    <FormDescription
                        className="mb-8"
                        title="Welcome to Chad"
                        description="Go live in 10 minutes! Our self-service widget
                            empowers your customers to manage orders and track
                            shipments 24/7 without driving you crazy."
                    />

                    <RegisterForm className="mb-4" />

                    <AuthSwitchBlock />
                </div>
            </div>
        </div>
    );
};

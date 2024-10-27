"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FormLogo } from "../form/form-logo";
import { FormProgressBar } from "../form/form-progress-bar";
import { useAuthStore } from "@/store/auth-store";
import { StepManager } from "./step-manager";

interface Props {
    className?: string;
}

export const AccountRegisterMenu: React.FC<Props> = ({ className }) => {
    const { registrationState } = useAuthStore();

    const showFormElements = ["register", "platform", "email"].includes(
        registrationState
    );

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
                    {showFormElements && (
                        <>
                            <FormLogo className="mb-4 xl:mb-6" />
                            <FormProgressBar className="mb-8" />
                        </>
                    )}
                    <StepManager />
                </div>
            </div>
        </div>
    );
};

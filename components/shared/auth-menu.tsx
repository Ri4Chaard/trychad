"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FormLogo } from "./form/form-logo";
import { FormProgressBar } from "./form/form-progress-bar";
import { FormDescription } from "./form/form-description";
import { RegisterForm } from "./form/register-form";
import { ShopifyForm } from "./form/shopify-form";
import { useAuthStore } from "@/store/auth-store";
import { Auth } from "./auth";
import { Platform } from "./platform";
import { ConnectionSuccessBlock } from "./connection-success-block";

interface Props {
    className?: string;
}

export const AuthMenu: React.FC<Props> = ({ className }) => {
    const { registrationState } = useAuthStore();

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
                    {[
                        "success",
                        "shopify_connected",
                        "shopify_already_connected",
                    ].includes(registrationState) ? (
                        <ConnectionSuccessBlock />
                    ) : (
                        <>
                            <FormLogo className="mb-4 xl:mb-6" />
                            <FormProgressBar className="mb-8" />
                            {registrationState === "register" && <Auth />}
                            {registrationState === "platform" && <Platform />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

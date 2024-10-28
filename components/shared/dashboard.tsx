"use client";

import React from "react";
import { redirect, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import toast from "react-hot-toast";
import { ToastSuccess } from "./toasts/toast-success";
import { FormLogo } from "./form/form-logo";
import { SuccessBlock } from "./success-block";
import { SuccessCircle } from "./success-circle";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Dashboard: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    const { user } = useAuthStore();

    React.useEffect(() => {
        if (!user.email) redirect("/");
    });

    return (
        <div
            className={cn(
                "flex flex-1 items-center justify-center sm:min-h-screen sm:bg-bgImage lg:w-full",
                className
            )}
        >
            {/* outer container */}
            <div className="bg-white sm:rounded-lg sm:shadow-[0_5px_20px_#6C758B33] sm:px-10 sm:py-16">
                <div className="px-8 pt-4 text-[#20496C]  sm:w-[460px] xl:p-0">
                    <FormLogo className="hidden sm:flex mb-4 xl:mb-6" />
                    <SuccessBlock
                        className="hidden sm:flex"
                        title={`Hello Luna Edge, My name is ${user.name}.`}
                        onClick={() => {
                            toast.custom((t) => (
                                <ToastSuccess
                                    t={t}
                                    title="Hello Luna Edge"
                                    message={`My name is ${user.name}`}
                                />
                            ));
                            if (user.platform === "shopify") {
                                toast.custom((t) => (
                                    <ToastSuccess
                                        t={t}
                                        title="Shopify account connected"
                                        message="Smiling Raccoon"
                                    />
                                ));
                            }
                            if (user.supportEmail?.includes("@gmail.com")) {
                                toast.custom((t) => (
                                    <ToastSuccess
                                        t={t}
                                        title="Customer support email connected"
                                        message={user.supportEmail}
                                    />
                                ));
                            }
                        }}
                        btnText="Ok"
                        bottomText={
                            <div className="flex justify-center text-xs mt-3">
                                <p>
                                    Not {user.email}?{" "}
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                        }}
                                        className="text-primary"
                                    >
                                        Logout
                                    </button>
                                </p>
                            </div>
                        }
                    >
                        {user.platform === "shopify" ? (
                            <img src="/assets/icons/racoon.svg" alt="shopify" />
                        ) : (
                            <SuccessCircle />
                        )}
                    </SuccessBlock>

                    <SuccessBlock
                        className="sm:hidden"
                        title="Use your desktop to access Chad"
                        description="Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
                        btnText="Ok"
                        bottomText={
                            <div className="flex justify-center text-xs mt-3">
                                <p>
                                    Not {user.email}?{" "}
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                        }}
                                        className="text-primary"
                                    >
                                        Logout
                                    </button>
                                </p>
                            </div>
                        }
                    >
                        {user.platform === "shopify" ? (
                            <img src="/assets/icons/racoon.svg" alt="shopify" />
                        ) : (
                            <SuccessCircle />
                        )}
                    </SuccessBlock>
                </div>
            </div>
        </div>
    );
};

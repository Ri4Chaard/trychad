"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/auth-store";

interface Props {
    className?: string;
}

export const ShopifyAlreadyConnected: React.FC<Props> = ({ className }) => {
    const { onChangeState } = useAuthStore();
    return (
        <div
            className={cn(
                "flex flex-col gap-8 items-center justify-center mt-28 sm:mt-0 sm:h-[520px]",
                className
            )}
        >
            <img src="/assets/icons/racoon.svg" alt="shopify" />
            <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-center mb-4">
                    {"[STORE-NAME] already connected"}
                </p>

                <Button
                    onClick={() => {
                        onChangeState("email");
                    }}
                    className="w-full mb-4"
                >
                    Continue
                </Button>
                <div className="flex justify-center text-xs">
                    <p>
                        Wrong store?{" "}
                        <button
                            onClick={() => {
                                onChangeState("platform");
                            }}
                            className="text-primary"
                        >
                            Connect another one
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

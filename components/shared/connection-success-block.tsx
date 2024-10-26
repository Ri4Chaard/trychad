import React from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

interface Props {
    className?: string;
}

export const ConnectionSuccessBlock: React.FC<Props> = ({ className }) => {
    const { user, registrationState, onChangeState } = useAuthStore();

    switch (registrationState) {
        case "shopify_already_connected":
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

        case "shopify_connected":
            return (
                <div
                    className={cn(
                        "flex flex-col gap-8 items-center justify-center mt-28 sm:mt-0 sm:h-[520px]",
                        className
                    )}
                >
                    <img src="/assets/icons/racoon.svg" alt="shopify" />
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold">Store Connected</h1>
                        <p className="text-sm text-center mb-4">
                            {
                                "Chad is now able to manage customer support requests for [STORE-NAME]."
                            }
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

        case "success":
            return (
                <div
                    className={cn(
                        "flex flex-col gap-8 items-center justify-center mt-28 sm:mt-0 sm:h-[520px]",
                        className
                    )}
                >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#65BD47] text-white">
                        <Check width={40} height={40} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold">Response received</h1>
                        <p className="text-sm text-center mb-4">
                            Thank you for your interest in Chad! We’ll be hard
                            at work building integrations to support your
                            platform.
                        </p>

                        <Button
                            onClick={() => {
                                if (user.email) {
                                    onChangeState("done");
                                } else {
                                    onChangeState("email");
                                }
                            }}
                            className="w-full"
                        >
                            Done
                        </Button>
                    </div>
                </div>
            );
    }
};

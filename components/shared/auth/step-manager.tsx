import { useAuthStore } from "@/store/auth-store";
import React from "react";
import { Register } from "./register";
import { Platform } from "./platform";
import { SupportEmail } from "./support-email";
import { useRouter } from "next/navigation";
import { SuccessCircle } from "../success-circle";
import { SuccessBlock } from "../success-block";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

export const StepManager: React.FC<Props> = () => {
    const router = useRouter();
    const { user, registrationState, onChangeState } = useAuthStore();

    React.useEffect(() => {
        const screenWidth = window.innerWidth;

        if (registrationState === "done" && screenWidth >= 768) {
            onChangeState("register");
            router.push("/login");
        }
    }, [registrationState, router]);

    const steps = {
        register: <Register />,
        platform: <Platform />,
        email: <SupportEmail />,
        shopify_already_connected: (
            <SuccessBlock
                title={`${user.name.toUpperCase()} STORE already connected`}
                btnText="Continue"
                onClick={() => onChangeState("email")}
                bottomText={
                    <div className="flex justify-center text-xs mt-3">
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
                }
            >
                <div className="relative">
                    <img src="/assets/icons/racoon.svg" alt="shopify" />
                    <SuccessCircle
                        className="absolute top-0 right-0 w-6 h-6"
                        checkSize={20}
                    />
                </div>
            </SuccessBlock>
        ),
        shopify_connected: (
            <SuccessBlock
                title="Store connected"
                description={`Chad is now able to manage customer support requests for ${user.name.toUpperCase()} STORE.`}
                btnText="Continue"
                onClick={() => onChangeState("email")}
                bottomText={
                    <div className="flex justify-center text-xs mt-3">
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
                }
            >
                <div className="relative">
                    <img src="/assets/icons/racoon.svg" alt="shopify" />
                    <SuccessCircle
                        className="absolute top-0 right-0 w-6 h-6"
                        checkSize={20}
                    />
                </div>
            </SuccessBlock>
        ),
        success: (
            <SuccessBlock
                title="Response received"
                description="Thank you for your interest in Chad! We’ll be hard at work
                    building integrations to support your platform."
                btnText="Done"
                onClick={() => {
                    if (user.supportEmail) {
                        onChangeState("done");
                    } else {
                        onChangeState("email");
                    }
                }}
            >
                <SuccessCircle />
            </SuccessBlock>
        ),
        done: (
            <SuccessBlock
                title="You’re ready to go!"
                description="Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
                btnText="Ok"
                onClick={() => {
                    router.push("/login");
                    onChangeState("register");
                }}
            >
                <SuccessCircle />
            </SuccessBlock>
        ),
    };

    return (
        <div className="step-container overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={registrationState}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="step-content"
                >
                    {steps[registrationState]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

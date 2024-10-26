import { useAuthStore } from "@/store/auth-store";
import React from "react";
import { Auth } from "./auth";
import { Platform } from "./platform";
import { SupportEmail } from "./support-email";
import { ShopifyAlreadyConnected } from "./shopify-already-connected";
import { ShopifySuccess } from "./shopify-success";
import { SuccessBlock } from "./success-block";
import { redirect } from "next/navigation";

interface Props {
    className?: string;
}

export const StepManager: React.FC<Props> = ({ className }) => {
    const { user, registrationState, onChangeState } = useAuthStore();

    const steps = {
        register: <Auth />,
        platform: <Platform />,
        email: <SupportEmail />,
        shopify_already_connected: (
            <ShopifySuccess title="[STORE-NAME] already connected" />
        ),
        shopify_connected: (
            <ShopifySuccess
                title="Store connected"
                description={
                    "Chad is now able to manage customer support requests for [STORE-NAME]."
                }
            />
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
            />
        ),
        done: (
            <SuccessBlock
                title="You’re ready to go!"
                description="Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
                btnText="Ok"
                onClick={() => {
                    redirect("/login");
                }}
            />
        ),
    };

    return (
        <div className="step-container">
            {steps[registrationState] || <div></div>}
        </div>
    );
};

import React from "react";
import { ShopifyForm } from "./form/shopify-form";
import { OtherPlatformConnectionForm } from "./form/other-platform-connection-form";

interface Props {
    className?: string;
}

export const Platform: React.FC<Props> = ({ className }) => {
    const [type, setType] = React.useState<"shopify" | "other">("shopify");

    const onSwitchType = () => {
        type === "shopify" ? setType("other") : setType("shopify");
    };
    return (
        <div className={className}>
            {type === "shopify" ? (
                <ShopifyForm />
            ) : (
                <OtherPlatformConnectionForm />
            )}

            <button className="w-full text-xs" onClick={onSwitchType}>
                {type === "shopify" ? (
                    "I don’t use Shopify"
                ) : (
                    <>
                        Actually use Shopify?{" "}
                        <span className="text-primary">Connect</span>
                    </>
                )}
            </button>
        </div>
    );
};

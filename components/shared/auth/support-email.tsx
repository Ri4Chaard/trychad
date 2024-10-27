import React from "react";
import { cn } from "@/lib/utils";
import { GmailForm } from "../forms/gmail-form";
import { OtherEmailConnectionForm } from "../forms/other-email-connection-form";

interface Props {
    className?: string;
}

export const SupportEmail: React.FC<Props> = ({ className }) => {
    const [type, setType] = React.useState<"gmail" | "other">("gmail");

    const onSwitchType = () => {
        type === "gmail" ? setType("other") : setType("gmail");
    };
    return (
        <div className={className}>
            {type === "gmail" ? <GmailForm /> : <OtherEmailConnectionForm />}

            <button className="w-full text-xs" onClick={onSwitchType}>
                {type === "gmail" ? (
                    "I don’t use Gmail"
                ) : (
                    <>
                        Actually use Gmail?{" "}
                        <span className="text-primary">Connect</span>
                    </>
                )}
            </button>
        </div>
    );
};

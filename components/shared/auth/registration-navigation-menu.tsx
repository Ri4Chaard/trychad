"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChangeStageButtons } from "./change-stage-buttons";
import { useAuthStore } from "@/store/auth-store";

interface Props {
    className?: string;
}

export const RegistrationNavigationMenu: React.FC<Props> = ({ className }) => {
    const { user } = useAuthStore();

    const stages = [
        { text: "Welcome" },
        { text: "Connect your Shopify store" },
        { text: "Connect your customer support email" },
        { text: "Done" },
    ];

    return (
        <nav className={cn("flex flex-col relative", className)}>
            {stages.map((stage, index) => (
                <>
                    <div className="flex items-center gap-4 ">
                        {/* circle */}
                        <div
                            className={cn(
                                "w-8 h-8 rounded-full border-2 border-[#5D7FA3]",
                                { "border-primary": index === 0 }
                            )}
                        ></div>

                        {/* text */}
                        <p
                            className={cn("text-[#5D7FA3]", {
                                "text-white": index === 0,
                            })}
                        >
                            {stage.text}
                        </p>
                    </div>
                    {index !== stages.length - 1 && (
                        <div className="w-[2px] h-12 bg-[#5D7FA3] ml-[15px]"></div>
                    )}
                </>
            ))}
            {user.email && (
                <ChangeStageButtons
                    className="text-[#93A8C1] absolute w-full -bottom-[88px]"
                    btnClassName="text-base hover:bg-[#134267] hover:text-none"
                />
            )}
        </nav>
    );
};

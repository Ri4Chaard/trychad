import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const NavigationMenu: React.FC<Props> = ({ className }) => {
    const stages = [
        { text: "Welcome" },
        { text: "Connect your Shopify store" },
        { text: "Connect your customer support email" },
        { text: "Done" },
    ];

    return (
        <nav className={cn("flex flex-col", className)}>
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
        </nav>
    );
};

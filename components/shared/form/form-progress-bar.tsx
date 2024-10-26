import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const FormProgressBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(" xl:hidden", className)}>
            <p className="text-xs mb-2">Step 1 of 4</p>
            <div className="relative overflow-hidden w-full h-2 rounded-sm border border-[#C9D3E0]">
                <div className="absolute w-1/4 h-full left-0 rounded-r-sm bg-[#C9D3E0]" />
            </div>
        </div>
    );
};

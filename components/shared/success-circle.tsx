import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Props {
    checkSize?: number;
    className?: string;
}

export const SuccessCircle: React.FC<Props> = ({ checkSize, className }) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center w-20 h-20 rounded-full bg-[#65BD47] text-white",
                className
            )}
        >
            <Check
                width={checkSize || 40}
                height={checkSize || 40}
                strokeWidth={3}
            />
        </div>
    );
};

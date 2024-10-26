import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

interface Props {
    title: string;
    description: string;
    btnText: string;
    onClick: () => void;
    className?: string;
}

export const SuccessBlock: React.FC<Props> = ({
    title,
    description,
    btnText,
    onClick,
    className,
}) => {
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
                <h1 className="font-bold">{title}</h1>
                <p className="text-sm text-center mb-4">{description}</p>

                <Button onClick={onClick} className="w-full">
                    {btnText}
                </Button>
            </div>
        </div>
    );
};

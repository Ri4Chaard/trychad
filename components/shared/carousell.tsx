import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Carousell: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "w-[364px] flex flex-col items-center justify-center gap-4",
                className
            )}
        >
            <div className="h-24 p-4 flex items-center gap-4 bg-[#134267] rounded-lg text-[#96CAF7] text-sm">
                <span className="text-[32px] font-bold">5X</span>
                <p>
                    Acquiring a new customer is 5x more costly than making an
                    unhappy customer happy
                </p>
            </div>
            <div className="flex items-center justify-center gap-3">
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        className={cn("w-2 h-2 rounded-full bg-[#134267]", {
                            "bg-[#96CAF7]": index === 0,
                        })}
                    ></button>
                ))}
            </div>
        </div>
    );
};

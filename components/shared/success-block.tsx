"use client";

import React, { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
    title: string;
    description?: string;
    btnText: string;
    onClick?: () => void;
    bottomText?: ReactNode;
    className?: string;
}

export const SuccessBlock: React.FC<PropsWithChildren<Props>> = ({
    title,
    description,
    btnText,
    onClick,
    bottomText,
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col gap-8 items-center justify-center mt-28 sm:mt-0 sm:h-[520px]",
                className
            )}
        >
            {children}

            <div className="flex flex-col items-center gap-2">
                <h1 className={cn("font-bold", { "mb-2": !description })}>
                    {title}
                </h1>
                {description && (
                    <p className="text-sm text-center mb-4">{description}</p>
                )}

                <Button onClick={onClick} className="w-full">
                    {btnText}
                </Button>
                {bottomText}
            </div>
        </div>
    );
};

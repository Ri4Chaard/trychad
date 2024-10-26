import React from "react";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "./navigation-menu";
import { Carousell } from "./carousell";

interface Props {
    className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "hidden xl:flex flex-col bg-sidebar basis-[568px] min-h-full items-center justify-center",
                className
            )}
        >
            <NavigationMenu className="mb-64" />

            <Carousell />
        </div>
    );
};

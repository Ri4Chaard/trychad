import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/logo.svg";

interface Props {
    className?: string;
}

export const FormLogo: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-1", className)}>
            <Image src={logo} alt="logo" width={32} height={32} />
            <h2 className="text-2xl font-bold">Chad</h2>
        </div>
    );
};

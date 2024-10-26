import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const AuthSwitchBlock: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("flex justify-center text-xs", className)}>
            <p>
                Already have an account?{" "}
                <button className="text-primary">Login</button>
            </p>
        </div>
    );
};

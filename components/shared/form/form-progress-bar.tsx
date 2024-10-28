import React from "react";
import { cn } from "@/lib/utils";
import { ChangeStageButtons } from "../auth/change-stage-buttons";
import { useAuthStore } from "@/store/auth-store";
import { motion } from "framer-motion";

interface Props {
    className?: string;
}

export const FormProgressBar: React.FC<Props> = ({ className }) => {
    const { user, registrationState } = useAuthStore();

    const getProgressPercentage = () => {
        switch (registrationState) {
            case "register":
                return 1 / 4;

            case "platform":
                return 2 / 4;

            case "email":
                return 3 / 4;

            case "done":
                return 4 / 4;

            default:
                return 1 / 4;
        }
    };

    return (
        <div className={cn("xl:hidden", className)}>
            <p className="text-xs mb-2">
                Step {Math.round(getProgressPercentage() * 4)} of 4
            </p>
            <div className="relative overflow-hidden w-full h-2 rounded-sm border border-[#C9D3E0]">
                <motion.div
                    className="absolute h-full left-0 rounded-r-sm bg-[#C9D3E0]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${getProgressPercentage() * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            {user.email && (
                <ChangeStageButtons
                    className="mt-2 px-2"
                    btnClassName="text-xs h-[18px]"
                />
            )}
        </div>
    );
};

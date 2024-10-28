"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChangeStageButtons } from "./change-stage-buttons";
import { useAuthStore } from "@/store/auth-store";

interface Props {
    className?: string;
}

export const RegistrationNavigationMenu: React.FC<Props> = ({ className }) => {
    const { user, registrationState } = useAuthStore();

    const [stages, setStages] = React.useState([
        { text: "Welcome", key: "register", done: false },
        { text: "Connect your Shopify store", key: "platform", done: false },
        {
            text: "Connect your customer support email",
            key: "email",
            done: false,
        },
        { text: "Done", key: "done", done: false },
    ]);

    const [isRevisiting, setIsRevisiting] = React.useState(false);

    React.useEffect(() => {
        setStages([
            { text: "Welcome", key: "register", done: !!user.email },
            {
                text: "Connect your Shopify store",
                key: "platform",
                done: !!user.platform,
            },
            {
                text: "Connect your customer support email",
                key: "email",
                done: !!user.supportEmail,
            },
            { text: "Done", key: "done", done: false },
        ]);

        const currentStageIndex = stages.findIndex(
            (stage) => stage.key === registrationState
        );

        if (!stages[currentStageIndex]?.done) {
            setIsRevisiting(false);
        }
    }, [user, registrationState]);

    const handleNavigation = (direction: "prev" | "next") => {
        setIsRevisiting(
            direction === "prev" ||
                stages.some(
                    (stage) => stage.key === registrationState && stage.done
                )
        );
    };

    return (
        <nav className={cn("flex flex-col relative", className)}>
            {stages.map((stage, index) => {
                const isCurrentStage = stage.key === registrationState;
                const isStageDone = stage.done;
                const isFutureStage =
                    stages.findIndex((s) => s.key === registrationState) <
                    index;

                return (
                    <React.Fragment key={stage.key}>
                        <div className="flex items-center gap-4 relative">
                            {isCurrentStage && isRevisiting && isStageDone && (
                                <motion.div
                                    className="absolute -top-2 -left-2"
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <div className="w-full h-full border-2 rounded-full border-[#4F9EF9]"></div>
                                </motion.div>
                            )}

                            <motion.div
                                animate={{
                                    borderColor:
                                        isStageDone &&
                                        isFutureStage &&
                                        isRevisiting
                                            ? "#5D7FA3"
                                            : isCurrentStage || isStageDone
                                            ? "#4F9EF9"
                                            : "#C9D3E0",
                                    backgroundColor:
                                        isStageDone &&
                                        isFutureStage &&
                                        isRevisiting
                                            ? "#5D7FA3"
                                            : isStageDone
                                            ? "#4F9EF9"
                                            : "transparent",
                                }}
                                transition={{ duration: 0.5 }}
                                className={cn(
                                    "w-8 h-8 rounded-full border-2 flex justify-center items-center relative z-10",
                                    isCurrentStage || isStageDone
                                        ? "border-[#4F9EF9]"
                                        : "border-[#C9D3E0]"
                                )}
                            >
                                {isStageDone && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Check className="text-white w-4 h-4" />
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.p
                                initial={{ color: "#5D7FA3" }}
                                animate={{
                                    color:
                                        isCurrentStage || isStageDone
                                            ? "#ffffff"
                                            : "#5D7FA3",
                                }}
                                transition={{ duration: 0.5 }}
                                className={cn(
                                    "text-sm",
                                    isCurrentStage || isStageDone
                                        ? "text-white"
                                        : "text-[#5D7FA3]"
                                )}
                            >
                                {stage.text}
                            </motion.p>
                        </div>

                        {index !== stages.length - 1 && (
                            <div className="w-[2px] h-12 bg-[#5D7FA3] ml-[15px]"></div>
                        )}
                    </React.Fragment>
                );
            })}

            {user.email && (
                <ChangeStageButtons
                    onNavigate={handleNavigation}
                    className="text-[#93A8C1] absolute w-full -bottom-[88px]"
                    btnClassName="text-base hover:bg-[#134267] hover:text-none"
                />
            )}
        </nav>
    );
};

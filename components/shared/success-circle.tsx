import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
    checkSize?: number;
    className?: string;
}

export const SuccessCircle: React.FC<Props> = ({
    checkSize = 40,
    className,
}) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "flex items-center justify-center w-20 h-20 rounded-full bg-[#65BD47] text-white",
                className
            )}
        >
            <motion.div
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
            >
                <Check width={checkSize} height={checkSize} strokeWidth={3} />
            </motion.div>
        </motion.div>
    );
};

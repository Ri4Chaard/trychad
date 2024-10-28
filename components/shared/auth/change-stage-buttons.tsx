import React from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    btnClassName?: string;
    className?: string;
}

export const ChangeStageButtons: React.FC<Props> = ({
    btnClassName,
    className,
}) => {
    const { user, registrationState, onChangeState } = useAuthStore();

    const stepsOrder: any = [
        "register",
        "platform",
        "shopify_connected",
        "shopify_already_connected",
        "success",
        "email",
    ];

    const canGoNext = () => {
        if (registrationState === "platform" && !user.platform) {
            return false;
        }
        if (registrationState === "email" && !user.supportEmail) {
            return false;
        }
        return true;
    };

    const handleNext = () => {
        const currentIndex = stepsOrder.indexOf(registrationState);
        if (
            registrationState === "shopify_connected" ||
            registrationState === "shopify_already_connected" ||
            registrationState === "success" ||
            stepsOrder[currentIndex + 1] === "shopify_connected" ||
            stepsOrder[currentIndex + 1] === "success" ||
            (stepsOrder[currentIndex + 1] === "shopify_already_connected" &&
                currentIndex < stepsOrder.length - 1)
        ) {
            onChangeState("email");
            return;
        }
        if (currentIndex < stepsOrder.length - 1 && canGoNext()) {
            onChangeState(stepsOrder[currentIndex + 1]);
        }
    };

    const handlePrevious = () => {
        const currentIndex = stepsOrder.indexOf(registrationState);
        if (
            stepsOrder[currentIndex - 1] === "shopify_connected" ||
            stepsOrder[currentIndex - 1] === "success" ||
            (stepsOrder[currentIndex - 1] === "shopify_already_connected" &&
                currentIndex > 0)
        ) {
            onChangeState("platform");
            return;
        }
        if (currentIndex > 0) {
            onChangeState(stepsOrder[currentIndex - 1]);
        }
    };

    return (
        <div className={cn("flex justify-between", className)}>
            <Button
                variant="ghost"
                onClick={handlePrevious}
                className={cn(
                    "px-3 py-[6px] flex items-center gap-[2px]",
                    btnClassName
                )}
                disabled={registrationState === stepsOrder[0]}
            >
                <ChevronLeft width={12} height={12} />
                Prev
            </Button>

            <Button
                variant="ghost"
                onClick={handleNext}
                className={cn(
                    "px-3 py-[6px] flex items-center gap-[2px]",
                    btnClassName
                )}
                disabled={
                    registrationState === stepsOrder[stepsOrder.length - 1] ||
                    !canGoNext()
                }
            >
                Next
                <ChevronRight width={12} height={12} />
            </Button>
        </div>
    );
};
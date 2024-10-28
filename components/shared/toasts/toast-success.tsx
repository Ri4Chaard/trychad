import toast, { Toast } from "react-hot-toast";
import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props {
    t: Toast;
    title: string;
    message?: string;
    className?: string;
}

export const ToastSuccess: React.FC<Props> = ({
    t,
    title,
    message,
    className,
}) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden max-w-xs w-full bg-[#F3FCF4] rounded-md pointer-events-auto text-xs text-[#65BD47] flex ring-1 ring-black ring-opacity-5",
                t.visible ? "animate-enter" : "animate-leave",
                className
            )}
        >
            <div className="flex-1 w-0 px-6 py-3">
                <div className="absolute h-full w-[6px] bg-[#65BD47] left-0 top-0"></div>
                <div>
                    <h3>{title}</h3>
                    {message && <p className="font-bold">{message}</p>}
                </div>
            </div>
            <button
                onClick={() => toast.dismiss(t.id)}
                className="absolute top-3 right-3"
            >
                <X width={16} height={16} />
            </button>
        </div>
    );
};

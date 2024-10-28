import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative w-full">
            <input
                type={showPassword ? "text" : type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 right-[10px] flex items-center text-muted-foreground"
                >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            )}
        </div>
    );
});

Input.displayName = "Input";

export { Input };

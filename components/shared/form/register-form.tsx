import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

interface Props {
    className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
    return (
        <form className={cn("flex flex-col gap-6", className)} action="#">
            <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-xs text-[#4F637D]">
                    Email
                </Label>
                <Input
                    className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                    id="email"
                    placeholder="megachad@trychad.com"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-xs text-[#4F637D]">
                    Your name
                </Label>
                <Input
                    className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                    id="name"
                    placeholder="Mega Chad"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="text-xs text-[#4F637D]">
                    Password
                </Label>
                <Input
                    className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                    id="password"
                    placeholder="Enter password"
                />
            </div>

            <Button className="font-regular">Create account</Button>
        </form>
    );
};

import React from "react";
import { cn } from "@/lib/utils";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    form: any;
    label: string;
    name: string;
    className?: string;
}

export const FormInput: React.FC<Props> = ({
    form,
    label,
    name,
    required,
    className,
    ...props
}) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && (
                        <FormLabel className="text-xs text-[#4F637D]">
                            {label}
                        </FormLabel>
                    )}
                    <FormControl>
                        <Input
                            className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                            {...field}
                            {...props}
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

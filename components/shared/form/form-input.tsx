import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    formProps: {
        control: Control<T>;
    };
    label: string;
    name: Path<T>;
    className?: string;
}

export const FormInput = <T extends FieldValues>({
    formProps,
    label,
    name,
    className,
    ...props
}: FormInputProps<T>) => {
    return (
        <FormField
            control={formProps.control}
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

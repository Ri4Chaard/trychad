import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    formProps: {
        control: Control<T>;
    };
    label: string;
    name: Path<T>;
    selectItems: string[];
    placeholder?: string;
    className?: string;
}

export const FormSelect = <T extends FieldValues>({
    formProps,
    label,
    name,
    selectItems,
    placeholder,
    className,
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
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="bg-[#F8F9FC] rounded-lg border-none text-[#C3CAD5]">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {selectItems.map((value) => (
                                <SelectItem key={value} value={value}>
                                    {value}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

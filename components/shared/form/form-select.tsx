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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Props {
    form: any;
    label: string;
    name: string;
    selectItems: string[];
    placeholder?: string;
    className?: string;
}

export const FormSelect: React.FC<Props> = ({
    form,
    label,
    name,
    selectItems,
    placeholder,
    className,
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

import React from "react";

interface Props {
    title: string;
    description: string;
    className?: string;
}

export const FormDescription: React.FC<Props> = ({
    title,
    description,
    className,
}) => {
    return (
        <div className={className}>
            <h1 className="text-2xl mb-2 font-bold">{title}</h1>
            <p className="text-sm text-[#4F637D]">{description}</p>
        </div>
    );
};

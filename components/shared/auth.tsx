import React from "react";
import { RegisterForm } from "./form/register-form";

interface Props {
    className?: string;
}

export const Auth: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <RegisterForm className="mb-4" />

            <div className="flex justify-center text-xs">
                <p>
                    Already have an account?{" "}
                    <button className="text-primary">Login</button>
                </p>
            </div>
        </div>
    );
};

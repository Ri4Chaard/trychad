import React from "react";
import { RegisterForm } from "../forms/register-form";
import { useRouter } from "next/navigation";

interface Props {
    className?: string;
}

export const Register: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    return (
        <div className={className}>
            <RegisterForm className="mb-4" />

            <div className="flex justify-center text-xs">
                <p>
                    Already have an account?{" "}
                    <button
                        className="text-primary"
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

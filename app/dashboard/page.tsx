"use client";

import { FormLogo } from "@/components/shared/form/form-logo";
import { SuccessBlock } from "@/components/shared/success-block";
import { SuccessCircle } from "@/components/shared/success-circle";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    const { user } = useAuthStore();
    console.log(user);

    return (
        <div className="flex flex-1 items-center justify-center sm:min-h-screen sm:bg-bgImage lg:w-full">
            {/* outer container */}
            <div className="bg-white sm:rounded-lg sm:shadow-[0_5px_20px_#6C758B33] sm:px-10 sm:py-16">
                <div className="px-8 pt-4 text-[#20496C]  sm:w-[460px] xl:p-0">
                    <FormLogo className="hidden sm:flex mb-4 xl:mb-6" />
                    <SuccessBlock
                        className="hidden sm:flex"
                        title={`Hello Luna Edge, My name is ${user.name}.`}
                        onClick={() => {
                            console.log("smtg");
                        }}
                        btnText="Ok"
                        bottomText={
                            <div className="flex justify-center text-xs mt-3">
                                <p>
                                    Not {user.email}?{" "}
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                        }}
                                        className="text-primary"
                                    >
                                        Logout
                                    </button>
                                </p>
                            </div>
                        }
                    >
                        {user.platform === "shopify" ? (
                            <img src="/assets/icons/racoon.svg" alt="shopify" />
                        ) : (
                            <SuccessCircle />
                        )}
                    </SuccessBlock>

                    <SuccessBlock
                        className="sm:hidden"
                        title="Use your desktop to access Chad"
                        description="Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
                        onClick={() => {
                            console.log("smtg");
                        }}
                        btnText="Ok"
                        bottomText={
                            <div className="flex justify-center text-xs mt-3">
                                <p>
                                    Not {user.email}?{" "}
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                        }}
                                        className="text-primary"
                                    >
                                        Logout
                                    </button>
                                </p>
                            </div>
                        }
                    >
                        {user.platform === "shopify" ? (
                            <img src="/assets/icons/racoon.svg" alt="shopify" />
                        ) : (
                            <SuccessCircle />
                        )}
                    </SuccessBlock>
                </div>
            </div>
        </div>
    );
}

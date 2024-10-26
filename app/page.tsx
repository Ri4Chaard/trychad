import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Home() {
    return (
        <div className="xl:flex">
            {/* sidebar */}
            <div className="hidden xl:flex flex-col bg-sidebar basis-[568px] min-h-full items-center justify-center">
                {/* navigation */}
                <nav className="flex flex-col mb-64 ">
                    {/* Welcome */}
                    <div className="flex items-center gap-4 text-white">
                        {/* circle */}
                        <div className="w-8 h-8 rounded-full border-2 border-primary"></div>

                        {/* text */}
                        <p>Welcome</p>
                    </div>
                    <div className="w-[2px] h-12 bg-[#5D7FA3] ml-[15px]"></div>

                    {/* Connect your Shopify store */}
                    <div className="flex items-center gap-4 text-[#5D7FA3]">
                        {/* circle */}
                        <div className="w-8 h-8 rounded-full border-2 border-[#5D7FA3]"></div>

                        {/* text */}
                        <p>Connect your Shopify store</p>
                    </div>
                    <div className="w-[2px] h-12 bg-[#5D7FA3] ml-[15px]"></div>

                    {/* Connect your customer support email */}
                    <div className="flex items-center gap-4 text-[#5D7FA3]">
                        {/* circle */}
                        <div className="w-8 h-8 rounded-full border-2 border-[#5D7FA3]"></div>

                        {/* text */}
                        <p>Connect your customer support email</p>
                    </div>
                    <div className="w-[2px] h-12 bg-[#5D7FA3] ml-[15px]"></div>

                    {/* Done */}
                    <div className="flex items-center gap-4 text-[#5D7FA3]">
                        {/* circle */}
                        <div className="w-8 h-8 rounded-full border-2 border-[#5D7FA3]"></div>

                        {/* text */}
                        <p>Done</p>
                    </div>
                </nav>

                <div className="w-[364px] flex flex-col items-center justify-center gap-4">
                    <div className="h-24 p-4 flex items-center gap-4 bg-[#134267] rounded-lg text-[#96CAF7] text-sm">
                        <span className="text-[32px] font-bold">5X</span>
                        <p>
                            Acquiring a new customer is 5x more costly than
                            making an unhappy customer happy
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        {[...Array(5)].map((_, index) => (
                            <button
                                key={index}
                                className={cn(
                                    "w-2 h-2 rounded-full bg-[#134267]",
                                    {
                                        "bg-[#96CAF7]": index === 0,
                                    }
                                )}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* register form */}
            <div className="flex flex-1 items-center justify-center sm:min-h-screen bg-bgImage lg:w-full">
                {/* outer container */}
                <div className="bg-white sm:rounded-lg sm:shadow-[0_5px_20px_#6C758B33] sm:px-10 sm:py-16">
                    <div className="px-8 pt-4 text-[#20496C] sm:w-[460px] xl:p-0">
                        {/* header logo */}
                        <div className="flex items-center gap-1 mb-4 xl:mb-6">
                            <Image
                                src={logo}
                                alt="logo"
                                width={32}
                                height={32}
                            />
                            <h2 className="text-2xl font-bold">Chad</h2>
                        </div>

                        {/* progress bar */}
                        <div className="mb-8 xl:hidden">
                            <p className="text-xs mb-2">Step 1 of 4</p>
                            <div className="relative overflow-hidden w-full h-2 rounded-sm border border-[#C9D3E0]">
                                <div className="absolute w-1/4 h-full left-0 rounded-r-sm bg-[#C9D3E0]" />
                            </div>
                        </div>

                        {/* description */}
                        <div className="mb-8">
                            <h1 className="text-2xl mb-2 font-bold">
                                Welcome to Chad
                            </h1>
                            <p className="text-sm text-[#4F637D]">
                                Go live in 10 minutes! Our self-service widget
                                empowers your customers to manage orders and
                                track shipments 24/7 without driving you crazy.
                            </p>
                        </div>

                        {/* form */}
                        <form className="flex flex-col gap-6 mb-4" action="#">
                            <div className="flex flex-col gap-2">
                                <Label
                                    htmlFor="email"
                                    className="text-xs text-[#4F637D]"
                                >
                                    Email
                                </Label>
                                <Input
                                    className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                                    id="email"
                                    placeholder="megachad@trychad.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label
                                    htmlFor="name"
                                    className="text-xs text-[#4F637D]"
                                >
                                    Your name
                                </Label>
                                <Input
                                    className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                                    id="name"
                                    placeholder="Mega Chad"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label
                                    htmlFor="password"
                                    className="text-xs text-[#4F637D]"
                                >
                                    Password
                                </Label>
                                <Input
                                    className="bg-[#F8F9FC] rounded-lg border-none placeholder:font-light placeholder:text-[#C3CAD5]"
                                    id="password"
                                    placeholder="Enter password"
                                />
                            </div>

                            <Button className="font-regular">
                                Create account
                            </Button>
                        </form>

                        <div className="flex  justify-center text-xs">
                            <p>
                                Already have an account?{" "}
                                <button className="text-primary">Login</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

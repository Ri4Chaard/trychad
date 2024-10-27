import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chad | Login",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}

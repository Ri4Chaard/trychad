import { AuthMenu } from "@/components/shared/auth-menu";
import { Sidebar } from "@/components/shared/sidebar";

export default function Home() {
    return (
        <div className="xl:flex">
            <Sidebar />

            <AuthMenu />
        </div>
    );
}

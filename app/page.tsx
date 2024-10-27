import { AccountRegisterMenu } from "@/components/shared/auth/account-register-menu";
import { RegistrationSidebar } from "@/components/shared/auth/registration-sidebar";

export default function Home() {
    //register page
    return (
        <div className="xl:flex">
            <RegistrationSidebar />

            <AccountRegisterMenu />
        </div>
    );
}

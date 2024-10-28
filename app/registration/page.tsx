import { AccountRegisterMenu } from "@/components/shared/auth/account-register-menu";
import { RegistrationSidebar } from "@/components/shared/auth/registration-sidebar";

export default function RegistrationPage() {
    return (
        <div className="xl:flex">
            <RegistrationSidebar />

            <AccountRegisterMenu />
        </div>
    );
}

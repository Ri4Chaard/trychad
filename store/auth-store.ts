import { create } from "zustand";

export interface User {
    email: string;
    name: string;
    password: string;
    platform?: string;
    supportEmail?: string;
}

export type RegistrationState =
    | "register"
    | "platform"
    | "shopify_connected"
    | "shopify_already_connected"
    | "success"
    | "email"
    | "done";

export interface Auth {
    user: User;
    registrationState: RegistrationState;

    setUser: (user: User) => void;
    onChangeState: (registrationState: RegistrationState) => void;
}

export const useAuthStore = create<Auth>((set) => ({
    user: { email: "", name: "", password: "", platform: "", supportEmail: "" },
    registrationState: "register",

    setUser: (user) => {
        set({ user });
    },

    onChangeState: (registrationState) => {
        set({ registrationState });
    },
}));

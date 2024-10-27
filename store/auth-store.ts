import { create } from "zustand";

export interface User {
    email: string;
    name: string;
    password: string;
    platform?: string;
    supportEmail?: string;
}

export interface Auth {
    user: User;
    registrationState:
        | "register"
        | "platform"
        | "success"
        | "shopify_already_connected"
        | "shopify_connected"
        | "email"
        | "done";

    setUser: (user: User) => void;
    onChangeState: (
        registrationState:
            | "register"
            | "platform"
            | "success"
            | "shopify_already_connected"
            | "shopify_connected"
            | "email"
            | "done"
    ) => void;
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

import { z } from "zod";

export const passwordSchema = z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" });

export const formLoginSchema = z.object({
    email: z.string().email("Enter the correct email"),
    password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema.merge(
    z.object({
        name: z
            .string()
            .min(2, { message: "Name must be at least 2 characters long" }),
    })
);

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;

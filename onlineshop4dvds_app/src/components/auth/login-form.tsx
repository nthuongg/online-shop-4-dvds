"use client"

import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { z } from "zod";
import { Facebook, Google } from "../icons/brands";

const passwordErrorMessage = "Mật khẩu phải chứa từ 6 - 64 kí tự";
const emailErrorMessage = "Vui lòng nhập đúng định dạng email";

const formSchema = z.object({
    email: z.string().email({ message: emailErrorMessage }),
    password: z.string().min(6, { message: passwordErrorMessage }).max(64, { message: passwordErrorMessage }),
    remember: z.boolean().default(false).optional(),
});

export default function LoginForm() {
    return (
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
            <p className="text-center pb-2 text-xl font-extrabold">Log In</p>
            <form className="flex flex-col gap-4">
                <Input type="email" label="Email" placeholder="Enter your email....." />
                <Input type="password" label="Password" placeholder="Enter your password....." />
                <Checkbox size="sm">Remember me</Checkbox>
                <Button color="primary" className="font-semibold" href="/" as={Link}>Log In</Button>
            </form>
            <div className="flex items-center gap-4 py-2">
                <hr
                    className="bg-divider border-none w-full h-divider flex-1"
                    role="separator"
                />
                <p className="shrink-0 text-tiny text-default-500">OR</p>
                <hr
                    className="bg-divider border-none w-full h-divider flex-1"
                    role="separator"
                />
            </div>
            <div className="flex flex-col gap-3">
                <Button variant="flat" startContent={<Google />}>Continue with Google</Button>
                <Button variant="flat" startContent={<Facebook />}>Continue with Facebook</Button>
            </div>
            <p className="text-center text-small">
                Need to create an account? <Link href="/auth/register" size="sm" className="font-semibold">Register now</Link>
            </p>
        </div>
    );
}
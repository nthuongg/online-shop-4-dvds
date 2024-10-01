"use client"

import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { Facebook, Google } from "../icons/brands";

export default function RegisterForm() {

    return (
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
            <p className="pb-2 text-xl text-center font-extrabold">Register</p>
            <form className="flex flex-col gap-4">
                <Input type="text" label="Full name" placeholder="Enter your full name....." />
                <Input type="email" label="Email" placeholder="Enter your email....." />
                <Input type="password" label="Password" placeholder="Enter your password....." />
                <Checkbox size="sm">I agree with the <Link href="#" size="sm" className="font-semibold">Terms</Link> and <Link href="#" size="sm" className="font-semibold">Privacy policy</Link></Checkbox>
                <Button color="primary" className="font-semibold">Register</Button>
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
                Already have an account? <Link size="sm" href="/auth/login" className="font-semibold">Login now</Link>
            </p>
        </div>
    );
}


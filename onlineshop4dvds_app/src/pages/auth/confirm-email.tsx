import { API_URL } from "@/config";
import ConfirmEmailPayload from "../../models/confirm-email-payload";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Check } from "lucide-react";
import { GetServerSidePropsContext } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CenteredLayout from "@/components/layouts/centered-layout";

export default function ConfirmEmail({ status }: { status: boolean }) {
    // Render data
    if (status) {
        return (
            <CenteredLayout>
                <Alert className="w-full max-w-md space-y-2">
                    <Check className="h-4 w-4" />
                    <AlertTitle>Xác nhận email thành công!</AlertTitle>
                    <AlertDescription className="space-y-4">
                        <p>Bây giờ bạn có thể bắt đầu đăng nhập vào OnlineShop4DVDS.</p>
                        <div className="flex justify-end">
                            <Link href="/auth/login"><Button>Đăng nhập</Button></Link>
                        </div>
                    </AlertDescription>
                </Alert>
            </CenteredLayout>
        );
    }

    return (
        <CenteredLayout>
            <Alert variant="destructive" className="w-full max-w-md">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Lỗi</AlertTitle>
                <AlertDescription>
                    Rất tiếc. Link xác nhận này đã không còn khả dụng.
                </AlertDescription>
            </Alert>
        </CenteredLayout>
    );
}

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
    let status: boolean;

    const email = context.query.email as string;
    const token = context.query.token as string;

    // Fetch data from external API
    if (!email || !token) {
        return { props: { status: false } };
    }

    const confirmEmailPayload = new ConfirmEmailPayload(email, token);

    try {
        const res = await fetch(`${API_URL}/auth/confirm-email`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(confirmEmailPayload)
        });

        if (!res.ok) {
            status = false;
        } else {
            status = true;
        }

    } catch (err) {
        status = false;
    }

    return { props: { status } };
}
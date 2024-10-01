import Layout from "@/components/layouts/layout";
import LoginForm from "@/components/auth/login-form";
import { Acme } from "@/components/icons/brands";

export default function LoginPage() {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div
                    className="flex h-screen w-screen items-center justify-center overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8"
                    style={{
                        backgroundImage:
                            'url("../black-background-texture-2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }}
                >
                    <div className="absolute right-10 top-10">
                        <div className="flex items-center">
                            <Acme width={40} height={40} />
                            <p className="font-medium text-white">OnlineShop4DVDS</p>
                        </div>
                    </div>
                    <div className="absolute bottom-10 right-10 hidden md:block">
                        <p className="max-w-xl text-right text-white/60">
                            <span className="font-medium"></span>Welcome to OnlineShop4DVDS, your destination for timeless tunes and the latest hits on CD!<span className="font-medium"></span>
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </Layout>
    );
}
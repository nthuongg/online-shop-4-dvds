import { ReactNode } from "react";
import Layout from "./layout";
import { CartProvider } from "@/contexts/cart-context";

export default function UserLayout({children}: {children: ReactNode}) {

    return (
        <Layout>
            <CartProvider>
                {children}
            </CartProvider>
        </Layout>
    );
}
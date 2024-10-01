import PageLayout from "@/components/layouts/page-layout";
import ShoppingCart from "@/components/shopping-cart";

export default function CartPage() {

    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <ShoppingCart />
            </div>
        </PageLayout>
    );
}
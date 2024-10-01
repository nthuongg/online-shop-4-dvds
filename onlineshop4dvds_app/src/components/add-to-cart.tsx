import { API_URL } from "@/config";
import { useCart, useCartDispatch } from "@/contexts/cart-context";
import { Cart, CartCreate, CartUpdate } from "@/models/cart";
import { Button } from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";
import { useCookies } from "react-cookie";

export default function AddToCart({productId}: {productId: number}) {
    const cart = useCart();
    const cartDispatch = useCartDispatch();
    const [cookies, setCookie] = useCookies(['cartId']);

    const handleAddToCart = (productId: number) => {
        if (!cookies.cartId) {
            const payload: CartCreate = {productId};
            fetch(`${API_URL}/carts`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            })
            .then(res => res.json())
            .then((data: Cart) => {
                cartDispatch && cartDispatch({payload: data});
                setCookie("cartId", data.id, {path: "/", maxAge: 604800});
            })
            .catch(err => console.error(err));
        } else {
            if (!cart) return;
            const item = cart.items.find(cp => cp.productId === productId);
            let quantity: number;
            if (!item) quantity = 1;
            else quantity = item.quantity + 1;
            const payload: CartUpdate = {productId, quantity};
            fetch(`${API_URL}/carts`, {
                method: "PUT",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            })
            .then(res => res.json())
            .then((data: Cart) => cartDispatch && cartDispatch({payload: data}))
            .catch(err => console.error(err));
        }
    }

    return (
        <Button className="w-full font-medium" color="primary" startContent={<FaCartShopping className="h-5 w-5" />} size="lg" onPress={() => handleAddToCart(productId)}>Add to cart</Button>
    );
}
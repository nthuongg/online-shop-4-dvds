import { API_URL } from "@/config";
import { useCart, useCartDispatch } from "@/contexts/cart-context";
import { Cart, CartUpdate } from "@/models/cart";
import { Button, Input, Image } from "@nextui-org/react";
import { FaXmark, FaMinus, FaPlus } from "react-icons/fa6";

export default function ShoppingCart() {
    const initialCart = useCart();
    const dispatch = useCartDispatch();
    
    const handleUpdate = (productId: number, quantity: number) => {
        if (quantity < 1) return;

        const payload: CartUpdate = {
            productId,
            quantity
        };

        fetch(`${API_URL}/carts`, {
            method: "PUT",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then((data: Cart) => dispatch && dispatch({payload: data}))
        .catch(err => console.error(err));
    };

    const handleDrop = (productId: number) => {
        const payload: CartUpdate = {
            productId,
            quantity: 0
        };

        fetch(`${API_URL}/carts`, {
            method: "PUT",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then((data: Cart) => dispatch && dispatch({payload: data}))
        .catch(err => console.error(err));
    }

    return (
        <section className="flex max-w-2xl w-full h-full gap-8 justify-center">
            <div className="w-full flex-none py-4">
                <div className="flex h-full flex-1 flex-col p-4">
                    <form
                        className="flex flex-col gap-3"
                        style={{ zIndex: 1, opacity: 1, transform: "none" }}
                    >
                        <h1 className="text-2xl font-extrabold">Shopping cart</h1>
                        <div>
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul>
                                {initialCart?.items?.map(item => (
                                    <li
                                        className="flex justify-between items-center border-divider py-4"
                                        key={item.id}
                                    >
                                        <div className="flex gap-x-4 w-[20rem]">
                                            <Image alt={item.title} src={item.thumbnailUrl} className="h-20 w-20 object-contain" />
                                            
                                            <div className="flex flex-col">
                                                <h4 className="text-medium font-semibold">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    <p>
                                                        <span className="text-small text-default-500">Type: </span>
                                                        <span className="text-small font-medium capitalize text-default-700">
                                                            {item.type}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="text-small text-default-500">Stock: </span>
                                                        <span className="text-small font-medium text-default-700">
                                                            {item.stock}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <span className="text-small font-semibold text-pink-500">
                                                        ${item.price}
                                                    </span>
                                                    <span className="text-small text-default-500">x {item.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <Button isIconOnly aria-label="Decrease quantity" variant="light" onPress={() => handleUpdate(item.productId, item.quantity - 1)}>
                                                <FaMinus className="w-3 h-3" />
                                            </Button>
                                            <Input type="number" isReadOnly variant="bordered" value={item.quantity.toString()} className="max-w-20" classNames={{base: "bg-background"}} />
                                            <Button isIconOnly aria-label="Increase quantity" variant="light" onPress={() => handleUpdate(item.productId, item.quantity + 1)}>
                                                <FaPlus className="w-3 h-3" />
                                            </Button>
                                        </div>
                                        <Button isIconOnly color="secondary" aria-label="Drop" size="sm" radius="full" onPress={() => handleDrop(item.productId)}>
                                            <FaXmark className="w-3 h-3 text-foreground" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <div>

                                <dl className="flex flex-col gap-4 py-4">
                                    <hr
                                        className="shrink-0 bg-divider border-none w-full h-divider"
                                        role="separator"
                                    />
                                    <div className="flex justify-between">
                                        <dt className="text-small font-semibold text-default-500">
                                            Subtotal
                                        </dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            ${initialCart?.subtotal}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </form>
                    <div className="w-full h-auto flex justify-end">
                        <Button color="primary" className="font-medium mt-10" size="lg">Check out</Button>          
                    </div>
                </div>
            </div>
        </section>
    );
}
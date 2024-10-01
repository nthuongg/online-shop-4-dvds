import { Cart } from "@/models/cart";
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

interface CartState {
    cart: Cart | null;
}

export interface CartAction {
    payload: Cart | null;
}

const CartContext = createContext<Cart | null>(null);
const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

export function CartProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={state.cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

function cartReducer(cart: CartState, action: CartAction): CartState {
    return {cart: action.payload};
}

const initialState: CartState = {
    cart: null
}


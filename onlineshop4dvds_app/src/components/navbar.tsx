import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Badge
} from "@nextui-org/react";
import { Acme } from "./icons/brands";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi2";
import { useCart, useCartDispatch } from "@/contexts/cart-context";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { API_URL } from "@/config";
import { Cart } from "@/models/cart";

export default function MyNavbar() {
    const [cookies, setCookie] = useCookies(["cartId"]);

    const cart = useCart();
    const dispatch = useCartDispatch();

    useEffect(() => {
        if (cart) return;
        if (!cookies.cartId) {
            dispatch && dispatch({ payload: null });
            return;
        }
        fetch(`${API_URL}/carts`, { credentials: "include" })
            .then(res => res.json())
            .then((data: Cart) => dispatch && dispatch({ payload: data }))
            .catch(err => console.error(err));
    }, []);

    return (
        <Navbar height="54px" classNames={{
            base: "flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 py-4 backdrop-filter-none bg-transparent",
            wrapper: "z-40 flex gap-4 flex-row relative flex-nowrap items-center max-w-[1024px] px-0 w-full justify-center bg-transparent",
            content: "flex h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 gap-6 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50",
            brand: "flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border mr-2 w-[40vw] md:w-auto md:max-w-fit",
            item: [
                "data-[active=true]:opacity-100"
            ]
        }}>
            <NavbarContent justify="center">
                <NavbarBrand>
                    <div className="rounded-full bg-foreground text-background">
                        <Acme width={34} height={34} />
                    </div>
                </NavbarBrand>
                <NavbarItem className="hidden md:flex opacity-60" isActive>
                    <Link href="/" color="foreground">Home</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/music" color="foreground" >Music</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/movies" color="foreground">Movies</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/games" color="foreground">Games</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/news" color="foreground">News</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/forum" color="foreground">Forum</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Badge color="danger" size="sm" content={0} shape="circle">
                        <HiOutlineHeart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />
                    </Badge>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Link href="/cart">
                        <Badge color="danger" size="sm" content={cart?.items?.length || 0} shape="circle">
                            <HiOutlineShoppingCart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />
                        </Badge>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button href="/auth/login" as={Link} color="primary" variant="solid" radius="full" className="font-medium">Login</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    );
}

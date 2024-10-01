import { Link, Spacer } from "@nextui-org/react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Acme } from "./icons/brands";


export default function MyFooter() {
    return (
        <footer className="flex w-full flex-col">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
                <div className="flex items-center justify-center">
                    <Acme width={44} height={44} />
                    <span className="text-medium font-medium">OnlineShop4DVDS</span>
                </div>
                <Spacer y={4} />
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                    <Link href="/" color="foreground" size="sm" className="opacity-60">Home</Link>
                    <Link href="/music" color="foreground" size="sm" className="opacity-60">Music</Link>
                    <Link href="/movies" color="foreground" size="sm" className="opacity-60">Movies</Link>
                    <Link href="/games" color="foreground" size="sm" className="opacity-60">Games</Link>
                    <Link href="/news" color="foreground" size="sm" className="opacity-60">News</Link>
                    <Link href="/forum" color="foreground" size="sm" className="opacity-60">Forum</Link>
                </div>
                <Spacer y={4} />
                <div className="flex justify-center gap-x-5">
                    <Link
                        isExternal
                        showAnchorIcon
                        href="/"
                        anchorIcon={<FaFacebookF />}
                        color="foreground"
                        className="opacity-50"
                    >   
                    </Link>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="/"
                        anchorIcon={<FaInstagram />}
                        color="foreground"
                        className="opacity-50"
                    >    
                    </Link>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="/"
                        anchorIcon={<FaXTwitter />}
                        color="foreground"
                        
                        className="opacity-50"
                    >   
                    </Link>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="/"
                        anchorIcon={<FaLinkedin />}
                        color="foreground"
                        className="opacity-50"
                    >  
                    </Link>
                </div>
                <Spacer y={4} />
                <p className="mt-1 text-center text-small text-default-400">
                    © 2024 OnlineShop4DVDS Inc.
                </p>
            </div>
        </footer>

    );
}
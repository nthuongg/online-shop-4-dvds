import { Button, Spacer } from "@nextui-org/react";
import { Bungee } from "next/font/google";

const bungee = Bungee({subsets: ["latin"], weight: "400"});

export default function Hero() {
    return (
        <section className="flex max-w-4xl flex-col items-center py-48">
            <div className="flex flex-col text-center">
                <h1 className={`text-4xl lg:text-6xl font-extrabold tracking-tight ${bungee.className}`}>Online Shop 4 <span className="tracking-tight inline from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b">DVDS</span></h1>
                <Spacer y={4} />
                <h2 className="text-large text-default-500">
                    Our mission is to provide a sanctuary for CD lovers, a place where they can discover new albums, revisit old movies, and preserve the rich heritage of physical media in the digital age.
                </h2>
                <span
                    aria-hidden="true"
                    className="w-px h-px block"
                    style={{ marginLeft: "0.25rem", marginTop: "1rem" }}
                />
                <div className="flex w-full justify-center gap-2">
                    <Button variant="flat">About us</Button>
                    <Button variant="shadow" color="primary" className="font-medium">Shop products</Button>
                </div>
            </div>
        </section>

    );
}
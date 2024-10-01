import { Image, ScrollShadow, Button } from "@nextui-org/react";
import { useState } from "react";

export default function ImagesGallery({images}: {images: string[] | null | undefined}) {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className="relative h-full w-full flex-none">

            <div className="relative shadow-black/5 shadow-none rounded-large max-w-fit bg-white">
                {images && <Image src={images[selected]} alt="an image" removeWrapper className="w-full aspect-square object-contain" />}
            </div>
            <ScrollShadow orientation="horizontal" className="-mx-2 -mb-4 mt-4 flex w-full max-w-full gap-4 px-2 pb-4 pt-2">
                {images?.map((img, index) => (
                    <Button key={index} className="w-24 h-24 p-0 ring-offset-background data-[selected=true]:ring-primary data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2 bg-white" data-selected={selected === index} onClick={() => setSelected(index)}>
                        <Image src={img} alt="an image" removeWrapper className="h-full w-full object-contain" />
                    </Button>
                ))}
            </ScrollShadow>
        </div>
    );
}
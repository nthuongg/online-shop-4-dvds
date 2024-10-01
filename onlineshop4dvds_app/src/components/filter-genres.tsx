import { RadioGroup, useRadio, VisuallyHidden, cn, RadioProps } from "@nextui-org/react";
import { Genre } from "@/models/genre";

const Tag = (props: RadioProps) => {
  const {
    Component,
    children,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent text-default-400 rounded-small bg-default/40 font-normal text-small",
        "data-[selected=true]:text-foreground data-[selected=true]:bg-default data-[selected=true]:font-medium"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()} className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-7 relative select-none transition-colors-opacity before:transition-width motion-reduce:transition-none">
        <span {...getLabelProps()} className="flex gap-x-1 items-center">{children}</span>
      </div>
    </Component>
  );
}

export default function FilterGenres({genres}: {genres: Genre[] | null}) {

  return (
    <div className="flex gap-x-3 items-center">
      <span className="text-small text-foreground font-medium">Filter:</span>
      <RadioGroup orientation="horizontal">
        <Tag value="0">All</Tag>
        {genres?.map(genre => (
          <Tag key={genre.id} value={genre.id.toString()}> 
            {genre.name}
          </Tag>
        ))}
      </RadioGroup>
    </div>
  );
}

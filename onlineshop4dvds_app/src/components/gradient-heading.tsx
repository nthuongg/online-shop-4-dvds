const defaultClassName = "from-[#6FEE8D] to-[#17c964]";

export default function GradientHeading({title, className}: {title: string, className?: string}) {
    return (
        <h2 className={`text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b ${className || defaultClassName}`}>{title}</h2>
    );
}
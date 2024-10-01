import { cn } from "@nextui-org/react";

const defaultClassName = "w-5 h-5";

export function Google({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={cn(className || defaultClassName)}>
            <title>Google Logo</title>
            <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
            </clipPath>
            <g className="colors" clipPath="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z" />
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </g>
        </svg>
    );
}

export function Acme({ width, height }: { width: number, height: number }) {
    return (
        <svg fill="none" height={height} viewBox="0 0 32 32" width={width}>
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
}

export function Facebook({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 40 40" className={cn(className || defaultClassName)}>
            <linearGradient id="a" x1="-277.375" x2="-277.375" y1="406.6018" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0062e0" />
                <stop offset="1" stopColor="#19afff" />
            </linearGradient>
            <path fill="url(#a)" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" />
            <path fill="#fff" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z" />
        </svg>
    );
}

export function Imdb({className}: {className?: string}) {
    return (
        <svg version="1.1" viewBox="0 0 256 128" xmlns="http://www.w3.org/2000/svg" className={cn(className || "h-5")}><rect width="100%" height="100%" rx="16" fill="#f5c518"/><g transform="matrix(4,0,0,4,32,28)"><polygon points="0 18 5 18 5 0 0 0"/><path d="M 15.672518,0 14.553483,8.4084693 13.858201,3.8350243 C 13.65661,2.3700926 13.463247,1.0917512 13.278113,0 H 7 v 18 h 4.241635 L 11.258091,6.1138068 13.043609,18 h 3.019748 L 17.758365,5.8517865 17.770708,18 H 22 V 0 Z"/><path d="m24 18v-18h7.804559c1.764793 0 3.195441 1.4199441 3.195441 3.1766042v11.6467918c0 1.75439-1.428338 3.176604-3.195441 3.176604zm5.832248-14.7604764c-0.198326-0.1071901-0.577732-0.1588002-1.129596-0.1588002v11.8107626c0.728633 0 1.177022-0.13101 1.345167-0.40494 0.168146-0.26996 0.254375-1.000441 0.254375-2.199382v-6.9792681c0-0.8138509-0.03018-1.3339215-0.08623-1.5641817-0.05605-0.2302603-0.18108-0.3970005-0.383717-0.5041906z"/><path d="m44.429908 4.5068582h0.31961c1.795192 0 3.250482 1.4058177 3.250482 3.1380094v7.2171234c0 1.733074-1.454818 3.138009-3.250482 3.138009h-0.31961c-1.098446 0-2.069633-0.526338-2.658038-1.331726l-0.287974 1.100504h-4.483896v-17.768778h4.784326v5.7805356c0.618172-0.7703782 1.570825-1.2736774 2.645582-1.2736774zm-1.02434 8.7773578v-4.2651379c0-0.7047386-0.04524-1.1672234-0.139493-1.3801133-0.09425-0.2128898-0.470487-0.3495732-0.734393-0.3495732s-0.670889 0.1110822-0.75006 0.2982784v7.219809c0.09048 0.205549 0.478614 0.319927 0.75006 0.319927s0.666531-0.110708 0.749473-0.319927c0.08294-0.20922 0.124413-0.719421 0.124413-1.523263z"/></g></svg>
    );
}
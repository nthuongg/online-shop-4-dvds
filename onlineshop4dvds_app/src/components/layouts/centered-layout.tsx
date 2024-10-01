import { ReactNode } from "react";
import { ThemeProvider } from "../theme-provider";
import ModeToggle from "../mode-toggle";

export default function CenteredLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <div className="relative w-full h-full">
                <div className="absolute right-6 top-6"><ModeToggle /></div>
                <div className="min-h-screen flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
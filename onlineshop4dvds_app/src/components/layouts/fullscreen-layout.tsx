import { ReactNode } from "react";
import { ThemeProvider } from "../theme-provider";
import ModeToggle from "../mode-toggle";

export default function FullscreenLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <div className="w-full h-full">
                <div className="flex justify-end"><ModeToggle /></div>
                <div>
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
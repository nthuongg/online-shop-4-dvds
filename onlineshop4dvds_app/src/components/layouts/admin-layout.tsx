import { ReactNode } from "react";
import Sidebar from "../sidebar";
import FullscreenLayout from "./fullscreen-layout";

export default function AdminLayout({children}: {children: ReactNode}) {
    return (
        <FullscreenLayout>
            <div>
                <div className="hidden md:block">
                    <div className="border-t">
                        <div className="bg-background">
                            <div className="grid lg:grid-cols-5">
                                <Sidebar className="hidden lg:block" />
                                <div className="col-span-3 lg:col-span-4 lg:border-l">
                                    <div className="h-full px-4 py-6 lg:px-8">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FullscreenLayout>
    );
}
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
    const loggedIn = { firstName: "Angel", lastName: "Saikia" };
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="menuIcon"
                    />
                    <div className="">
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}

export default RootLayout;

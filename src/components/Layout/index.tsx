/**
 * Layout Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

'use client';
import { useRef, ReactNode } from "react";
import { LayoutContext } from "@/components/context";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const layoutRef = useRef<HTMLDivElement | null>(null);
    const scrollBar = useRef<HTMLDivElement | null>(null);

    return (
        <LayoutContext.Provider
            value={{
                scrollBar,
            }}
        >
            <div ref={layoutRef}>
                <Navbar />
                <main id="main" className="container">{children}</main>
                <Footer />
            </div>
        </LayoutContext.Provider>
    );
};

export default Layout;

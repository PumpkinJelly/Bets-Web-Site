/**
 * Navbar Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import React, { useState } from "react";
import styles from "./navbar.module.css";
import { navbarLinks } from "@/content/navbar";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import ActionButtons from "../ActionButtons";
import Image from "next/image";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarContent}>
                <Link href={"/"}>
                    <Image
                        src="/brand/logo.svg"
                        alt="Renova logo"
                        width={160}
                        height={38}
                        priority
                    />
                </Link>
                
                <div className={styles.navbarLinks}>
                    {navbarLinks.map((item, index) => (
                        <Link href={item.link} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <ActionButtons showDownloadLink={false} />
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            {menuOpen && (
                <div className={styles.fullscreenMenu}>
                    <div className={styles.menuHeader}>
                        <AiOutlineClose className={styles.closeIcon} onClick={closeMenu} />
                    </div>
                    <div className={styles.menuLinks}>
                        {navbarLinks.map((item, index) => (
                            <Link href={item.link} key={index} onClick={closeMenu}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

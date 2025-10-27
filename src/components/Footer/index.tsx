/**
 * Footer Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import SocialLinks from "../SocialLinks";
import Link from "next/link";
import { useFooterLinks } from "@/content/footer"; 
import { useTranslations } from "next-intl"; 

const Footer = () => {
  const footerLinks = useFooterLinks(); 
  const t = useTranslations("footer"); 

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.links} aria-label="Footer navigation">
          {footerLinks.map((linkSection, sectionIndex) => (
            <div className={styles.linksSection} key={sectionIndex}>
              <h3>{linkSection.title}</h3>
              <ul>
                {linkSection.links.map((link, linkIndex) => (
                  <li className={styles.link} key={linkIndex}>
                    <Link href={link.link} rel="noopener noreferrer">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.brand}>
          <Image
            src="/brand/logo.svg"
            alt="Company Logo"
            width={245}
            height={150}
            priority
          />
          <SocialLinks />
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 2025 Halyk Liga. {t("copyright")}
        </span>
        <span className={styles.developed}>
          Developed By{' '}
          <Link
            href="https://nelcosoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nelcosoft
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

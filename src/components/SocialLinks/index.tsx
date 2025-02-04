/**
 * SocialLinks Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import Link from "next/link";
import styles from "./socialLinks.module.css";
import { socialLinks } from "@/content/social";

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      {socialLinks.map((link) => (
        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
          <link.icon size={30} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;

import Image from 'next/image';
import styles from './footer.module.css';
import ActionButtons from '../ActionButtons';
import { footerLinks } from '@/content/footer';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.container}>
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
                    <ActionButtons />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

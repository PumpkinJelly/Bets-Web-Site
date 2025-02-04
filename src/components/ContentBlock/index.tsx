/**
 * ContentBlock Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import Image from "next/image";
import styles from "./contentBlock.module.css";

interface ContentBlockProps {
    title?: string;
    description: string;
    imageSrc?: string;
    alt?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, imageSrc, alt }) => {
    return (
        <div className={styles.container}>
            {imageSrc && (
                <div className={styles.imageWrapper}>
                    <Image src={imageSrc} alt={alt || "Halyk Liga"} width={200} height={200} className={styles.image} />
                </div>
            )}
            <div className={styles.textWrapper}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {<p className={styles.description}>{description}</p>}
            </div>
        </div>
    );
};

export default ContentBlock;

/**
 * Hero Section
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroWrapper}>
                <Image
                    src="/images/hero.jpg"
                    alt="Halyk Liga Almaty"
                    fill
                    className={styles.heroImage}
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
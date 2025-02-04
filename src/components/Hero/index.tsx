import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Image 
                src="/content/hero.jpg" 
                alt="Halyk Liga Almaty"
                layout="fill" /* Заполняет весь контейнер */
                objectFit="cover" /* Масштабирует изображение без искажений */
                priority
            />
        </section>
    );
};

export default Hero;

/**
 * Partners Section
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import Image from "next/image";
import styles from "./partners.module.css";
import { partners } from "@/content/partners";
import { useTranslations } from "next-intl";

const Partners = () => {
    const t = useTranslations("partners");

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t("partnersTitle")}</h1>
                <div className={styles.partnersGrid}>
                    {partners.map((partner, index) => (
                        <div key={index} className={styles.partner}>
                            <Image
                                src={partner.imageSrc}
                                width={150}
                                height={80}
                                alt={partner.name}
                                className={styles.partnerImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
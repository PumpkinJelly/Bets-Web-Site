/**
 * TitleBadge Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import { ElementType } from "react";
import styles from "./titleBadge.module.css";

interface TitleBadgeProps {
    title: string;
    icon: ElementType;
}

const TitleBadge: React.FC<TitleBadgeProps> = ({ title, icon: Icon }) => {
    return (
        <div className={styles.container}>
            <Icon size={24} className={styles.icon} />
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};

export default TitleBadge;
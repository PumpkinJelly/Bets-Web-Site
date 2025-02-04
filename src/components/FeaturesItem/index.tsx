/**
 * FeaturesItem Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import styles from './featuresItem.module.css';
import { FeaturesItemProps } from '@/types/featuresItemProps';

const FeaturesItem: React.FC<FeaturesItemProps> = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}

export default FeaturesItem;
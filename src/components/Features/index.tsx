/**
 * Features Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import { features } from '@/content/features';
import FeaturesItem from '../FeaturesItem';
import TitleBadge from '../TitleBadge';
import styles from './features.module.css';
import { FaSun } from 'react-icons/fa';

const Features = () => {
    return (
        <div className={styles.container}>
            <TitleBadge title="Основные особенности" icon={FaSun} />
            <div className={styles.items}>
                {features.map((feature, index) => (
                    <FeaturesItem {...feature} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Features;
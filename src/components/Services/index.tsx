/**
 * Services Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import ServicesItem from '../ServicesItem';
import TitleBadge from '../TitleBadge';
import styles from './services.module.css';
import { FaCompass } from 'react-icons/fa';
import { servicesItems } from '@/content/services';

const Services = () => {
    return (
        <div className={styles.container}>
            <TitleBadge title="Основные направления" icon={FaCompass} />
            <div className={styles.items}>
                {servicesItems.map((item, index) => (
                    <ServicesItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Services;
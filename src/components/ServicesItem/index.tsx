/**
 * ServicesItem Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import styles from './servicesItem.module.css';
import { ServiceItemProps } from '@/types/serviceItemProps';

const ServicesItem: React.FC<ServiceItemProps> = ({ description, icon: Icon }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{description}</div>
            <div className={styles.title}><Icon size={40} /></div>
        </div>
    );
}

export default ServicesItem;
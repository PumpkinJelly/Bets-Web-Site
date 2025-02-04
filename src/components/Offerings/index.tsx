/**
 * Offering Section
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import styles from './offerings.module.css';
import Features from '../Features';
import Services from '../Services';

const Offerings = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Services />
                <Features />
            </div>
        </section>
    );
};

export default Offerings;
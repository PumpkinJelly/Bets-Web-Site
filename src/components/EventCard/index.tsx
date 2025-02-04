import styles from './eventCard.module.css';

const EventCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
        </div>
    );
}
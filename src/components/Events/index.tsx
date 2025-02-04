import styles from './events.module.css';
import { events } from '@/content/events';

const Events = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Events</h1>
            <div className={styles.eventsWrapper}>
                <div className={styles.eventsList}>
                    {events.map((event, index) => (
                        <div className={styles.eventCard} key={index}>
                            <div className={styles.teamInfo}>
                                <img src={event.game.team1.imageSrc} alt={event.game.team1.name} />
                                <span>{event.game.team1.name}</span>
                                <span className={styles.score}>{event.game.team1.goal} - {event.game.team2.goal}</span>
                                <span>{event.game.team2.name}</span>
                                <img src={event.game.team2.imageSrc} alt={event.game.team2.name} />
                            </div>
                            <div className={styles.eventDetails}>
                                <p>{event.game.location}</p>
                                <p>{event.game.date} - {event.game.time}</p>
                            </div>
                            <a href={event.link} className={styles.eventLink}>View Details</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Events;

/**
 * Events Section
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import styles from "./events.module.css";
import { events } from "@/content/events";
import EventCard from "../EventCard";

const Events = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Будущие матчи</h1>
                <div className={styles.eventsWrapper}>
                    <div className={styles.eventsList}>
                        {events.map((event, index) => (
                            <EventCard key={index} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;

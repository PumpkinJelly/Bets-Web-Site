/**
 * EventCard Component
 * 
 * Developer: Nelcosoft Sp. z o.o.
 * website: https://nelcosoft.com
 * 
 **/

import React from "react";
import styles from "./eventCard.module.css";
import { EventsProps } from "@/content/events";
import Image from "next/image";

const EventCard: React.FC<{ event: EventsProps }> = ({ event }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.team}>
          <Image src={event.game.team1.imageSrc} alt={event.game.team1.name} width={40} height={40} />
          <span>{event.game.team1.name}</span>
        </div>
        <span className={styles.score}>VS
        </span>
        <div className={styles.team}>
          <span>{event.game.team2.name}</span>
          <Image src={event.game.team2.imageSrc} alt={event.game.team2.name} width={40} height={40} />
        </div>
      </div>
      <div className={styles.middle}>
        <p>{event.game.location}</p>
        <p>{event.game.date} - {event.game.time}</p>
      </div>
      <div className={styles.bottom}>
        <a href={event.link} className={styles.eventLink}>Принять участие</a>
      </div>
    </div>
  );
};

export default EventCard;

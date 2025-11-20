"use client";

import React, { useState } from "react";
import styles from "./eventCard.module.css";
import { EventsProps } from "@/content/events";
import Image from "next/image";
import BetPopup from "../Popup"; // подключаем попап
import { useTranslations } from "next-intl";

const EventCard: React.FC<{ event: EventsProps }> = ({ event }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<any>(null);
  const t = useTranslations("event");

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.team}>
          <Image
            src={event.game.team1.imageSrc}
            alt={event.game.team1.name}
            width={40}
            height={40}
          />
          <span>{event.game.team1.name}</span>
        </div>
        <span className={styles.score}>VS</span>
        <div className={styles.team}>
          <span>{event.game.team2.name}</span>
          <Image
            src={event.game.team2.imageSrc}
            alt={event.game.team2.name}
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className={styles.middle}>
        <p>{event.game.location}</p>
        <p>
          {event.game.date} - {event.game.time}
        </p>
      </div>

      <div className={styles.bottom}>
        <button onClick={openPopup} className={styles.eventLink}>
          {t("button")}
        </button>
      </div>

      {isPopupOpen && <BetPopup match={{
        team1: {
          name: event.game.team1.name,
          logo: event.game.team1.imageSrc,
        },
        team2: {
          name: event.game.team2.name,
          logo: event.game.team2.imageSrc,
        },
      }} onClose={closePopup} />}
    </div>
  );
};

export default EventCard;

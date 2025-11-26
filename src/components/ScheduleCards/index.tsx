"use client";

import React, { useState } from "react";
import styles from "./schedule.module.css";
import { EventsProps } from "@/content/events";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";


const ScheduleCard: React.FC<{ event: EventsProps }> = ({ event }) => {
    const t = useTranslations("event");
    const router = useRouter();

    const goToPage = () => {
    router.push("/#event");
  };

    return (
        <div className={styles.card} onClick={goToPage}>
            <div className={styles.top}>
                <div className={styles.team}>
                    <span>{event.game.team1.name}</span>
                    <Image
                        src={event.game.team1.imageSrc}
                        alt={event.game.team1.name}
                        width={40}
                        height={40}
                    />
                </div>
                <div>
                    <span className={styles.score}>VS</span>
                    <div className={styles.middle}>
                        <p>{event.game.location}</p>
                        <p>
                            {event.game.date} - {event.game.time}
                        </p>
                    </div>
                </div>
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
        </div>
    );
};

export default ScheduleCard;

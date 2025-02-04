"use client"; // Для работы useState и useEffect в Next.js 14 (App Router)

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const targetDate = new Date("2025-02-05T00:00:00").getTime(); // Укажите свою дату
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/brand/logo.svg"
          alt="Halyk Liga"
          width={280}
          height={38}
          priority
        />
        <div className={styles.countdown}>
          <span>{timeLeft.days} дней</span> :
          <span>{timeLeft.hours} часов </span> :
          <span>{timeLeft.minutes} мин </span> :
          <span>{timeLeft.seconds} сек </span>
        </div>
      </main>
    </div>
  );
}


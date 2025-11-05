"use client";

import React, { useState } from "react";
import styles from "./betpopup.module.css";

interface BetPopupProps {
  match: {
    team1: { name: string; logo: string };
    team2: { name: string; logo: string };
  }
  onClose: () => void;
}

const BetPopup: React.FC<BetPopupProps> = ({ match, onClose }: BetPopupProps) => {
  const [team, setTeam] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (!team || !amount) {
      setMessage("Пожалуйста, выберите команду и введите сумму.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/place_bet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ team, amount, comment }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Ставка успешно отправлена!");
        setTeam("");
        setAmount(null);
        setComment("");
      } else {
        setMessage("Ошибка: " + (data.error || "Неизвестная ошибка"));
      }
    } catch (error) {
      console.error(error);
      setMessage("Ошибка соединения с сервером.");
    }

    setLoading(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Ставка на матч</h2>

        <div className={styles.group}>
          <label className={styles.label}>Выберите команду:</label>
          <div className={styles.options}>
            <div
              className={`${styles.teamCard} ${team === "team1" ? styles.selected : ""}`}
              onClick={() => setTeam("team1")}
            >
              <img src={match.team1.logo} alt={match.team1.name} />
              <p>{match.team1.name}</p>
            </div>
            
            <div
              className={`${styles.teamCard} ${team === "team2" ? styles.selected : ""}`}
              onClick={() => setTeam("team2")}
            >
              <img src={match.team2.logo} alt={match.team2.name} />
              <p>{match.team2.name}</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label className={styles.label}>Сумма:</label>
          <input
            type="number"
            className={styles.input}
            placeholder="Введите сумму"
            value={amount ?? ""}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>Комментарий:</label>
          <textarea
            className={styles.textarea}
            placeholder="Ваш комментарий..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {message && <p className={styles.message}>{message}</p>}

        <div className={styles.buttons}>
          <button
            className={styles.submit}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Отправка..." : "Сделать ставку"}
          </button>
          <button onClick={onClose} className={styles.close}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetPopup;
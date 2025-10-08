"use client";

import React from "react";
import styles from "./betpopup.module.css";

interface BetPopupProps {
  onClose: () => void;
}

const BetPopup: React.FC<BetPopupProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Ставка на матч</h2>

        <div className={styles.group}>
          <label className={styles.label}>Выберите команду:</label>
          <div className={styles.options}>
            <label><input type="radio" name="team" value="team1" /> Команда 1</label>
            <label><input type="radio" name="team" value="team2" /> Команда 2</label>
          </div>
        </div>

        <div className={styles.group}>
          <label className={styles.label}>Сумма:</label>
          <input type="number" className={styles.input} placeholder="Введите сумму" />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>Комментарий:</label>
          <textarea className={styles.textarea} placeholder="Ваш комментарий..."></textarea>
        </div>

        <div className={styles.buttons}>
          <button className={styles.submit}>Сделать ставку</button>
          <button onClick={onClose} className={styles.close}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default BetPopup;
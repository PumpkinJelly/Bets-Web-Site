"use client";

import React from "react";
// Убедитесь, что news.module.css доступен по относительному пути
import styles from "./news.module.css";

// Интерфейс для данных
interface NewsItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

// Вспомогательная функция для парсинга контента (перенесена для самодостаточности компонента)
const parseNewsContent = (htmlDescription: string): { imgSrc: string; cleanedDescription: string } => {
    // Внимание: URL плейсхолдера для ошибки/отсутствия изображения остается, 
    // чтобы верстка не "сломалась", если в RSS нет img src.
    const defaultImage = "https://placehold.co/600x400/1C2128/9CA3AF?text=No+Image+Available";

    // 1. Извлечение ссылки на изображение
    const imgMatch = htmlDescription.match(/<img.*?src=["'](.*?)["']/i);
    const imgSrc = imgMatch ? imgMatch[1] : defaultImage;

    // 2. Очистка описания: удаляем все HTML теги, включая <img>
    const cleanedDescription = htmlDescription
        .replace(/<img.*?>/gi, '')
        .replace(/<[^>]*>?/gm, '')
        .trim();

    return { imgSrc, cleanedDescription };
};

export default function NewsCard({ item }: { item: NewsItem }) {

    const { imgSrc, cleanedDescription } = parseNewsContent(item.description);

    // Этот обработчик теперь корректно работает, так как находится в Client Component
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // Устанавливаем изображение-заглушку в случае ошибки загрузки
        e.currentTarget.src = "https://placehold.co/600x400/1C2128/9CA3AF?text=Image+Error";
        e.currentTarget.onerror = null; // Предотвращение бесконечного цикла, если плейсхолдер тоже не загрузится
    };

    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.newsCard}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={imgSrc}
                    alt={item.title}
                    className={styles.newsImage}
                    onError={handleImageError}
                />
            </div>

            <div className={styles.content}>
                <p className={styles.pubDate}>{item.pubDate}</p>
                <h2 className={styles.newsTitle}>{item.title}</h2>
                <p className={styles.newsDescription}>{cleanedDescription}</p>
            </div>
        </a>
    );
}
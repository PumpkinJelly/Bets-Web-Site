import React from "react";
import styles from "./news.module.css";
// Импортируем новый Client Component
import NewsCard from "./NewsCard";

// Интерфейс для данных, полученных из API
interface NewsItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

// Удалили parseNewsContent, так как он перенесен в NewsCard.tsx
// Server Component теперь только фетчит данные.

export default async function NewsPage() {
    const res = await fetch("http://localhost:3000/api/news", {
        cache: "no-store",
    });

    if (!res.ok) {
        return (
            <div className={styles.container}>
                <p className={styles.errorText}>
                    Failed to fetch news. Status: {res.status}. (Check API key or server logs).
                </p>
            </div>
        );
    }

    const news: NewsItem[] = await res.json();

    if (!Array.isArray(news) || news.length === 0) return (
        <div className={styles.container}>
            <p className={styles.errorText}>No news found</p>
        </div>
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Football News Aggregator</h1>

            <div className={styles.newsGrid}>
                {news.map((item: NewsItem, i: number) => {
                    // Теперь мы просто передаем данные в NewsCard, который является Client Component
                    return <NewsCard key={i} item={item} />;
                })}
            </div>
        </div>
    );
}
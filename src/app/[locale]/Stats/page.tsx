"use client";

import React, { useMemo } from "react";
import styles from "./stats.module.css";
import { events } from "@/content/events";

// --- ТИПЫ ДАННЫХ ---
// Интерфейс для подсчитанной статистики команды
interface TeamStats {
    name: string;
    imageSrc: string;
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
}

export default function StatisticsPage() {

    // --- ЛОГИКА ПОДСЧЕТА ТАБЛИЦЫ ---
    // Мы используем useMemo, чтобы пересчитывать таблицу только при изменении events
    const tournamentTable = useMemo(() => {
        const statsMap = new Map<string, TeamStats>();

        // Вспомогательная функция для инициализации команды, если её еще нет в Map
        const initTeam = (teamName: string, imageSrc: string) => {
            if (!statsMap.has(teamName)) {
                statsMap.set(teamName, {
                    name: teamName,
                    imageSrc: imageSrc,
                    matches: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    points: 0,
                    goalsFor: 0,
                    goalsAgainst: 0,
                });
            }
        };

        // Проходим по каждому матчу в events
        events.forEach((event) => {
            const { team1, team2 } = event.game;

            // 1. Создаем записи для команд, если их нет
            initTeam(team1.name, team1.imageSrc);
            initTeam(team2.name, team2.imageSrc);

            // 2. Получаем текущую статистику (точно знаем, что она есть благодаря initTeam)
            const t1 = statsMap.get(team1.name)!;
            const t2 = statsMap.get(team2.name)!;

            // 3. Обновляем сыгранные матчи и голы
            t1.matches += 1;
            t2.matches += 1;
            t1.goalsFor += team1.goal;
            t1.goalsAgainst += team2.goal;
            t2.goalsFor += team2.goal;
            t2.goalsAgainst += team1.goal;

            // 4. Распределяем очки (Победа=3, Ничья=1, Поражение=0)
            if (team1.goal > team2.goal) {
                // Победила команда 1
                t1.wins += 1;
                t1.points += 3;
                t2.losses += 1;
            } else if (team2.goal > team1.goal) {
                // Победила команда 2
                t2.wins += 1;
                t2.points += 3;
                t1.losses += 1;
            } else {
                // Ничья
                t1.draws += 1;
                t1.points += 1;
                t2.draws += 1;
                t2.points += 1;
            }
        });

        // Превращаем Map в массив и сортируем:
        // 1. По очкам (убывание)
        // 2. По разнице мячей (если очки равны) - опционально, тут просто по очкам
        return Array.from(statsMap.values()).sort((a, b) => b.points - a.points);
    }, []);

    return (
        <div className={styles.container}>
            {/* HEADER */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.pageTitle}>Football Statistics</h1>
                    <div className={styles.leagueBadge}>Halyk Liga</div>
                </div>
            </header>

            {/* LIVE SECTION (Остается без изменений, так как это список матчей) */}
            <section className={styles.liveSection}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.livePulse}></span> Live Matches
                </h2>

                <div className={styles.liveScrollWrapper}>
                    {events.map((item, index) => (
                        <div key={index} className={styles.liveCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.statusBadge}>LIVE</span>
                                <span className={styles.matchTimer}>45:32</span>
                            </div>

                            <div className={styles.matchBody}>
                                <div className={styles.teamCol}>
                                    <div className={styles.logoWrapper}>
                                        <img src={item.game.team1.imageSrc} alt={item.game.team1.name} />
                                    </div>
                                    <span className={styles.teamName}>{item.game.team1.name}</span>
                                </div>

                                <div className={styles.scoreBoard}>
                                    <span className={styles.score}>{item.game.team1.goal}</span>
                                    <span className={styles.divider}>:</span>
                                    <span className={styles.score}>{item.game.team2.goal}</span>
                                </div>

                                <div className={styles.teamCol}>
                                    <div className={styles.logoWrapper}>
                                        <img src={item.game.team2.imageSrc} alt={item.game.team2.name} />
                                    </div>
                                    <span className={styles.teamName}>{item.game.team2.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MAIN DASHBOARD GRID */}
            <div className={styles.dashboardGrid}>

                {/* ТУРНИРНАЯ ТАБЛИЦА (Теперь берется из tournamentTable) */}
                <div className={styles.mainColumn}>
                    <section className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h3>Tournament Table</h3>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th className={styles.thRank}>#</th>
                                        <th className={styles.thTeam}>Team</th>
                                        <th>MP</th> {/* Matches Played */}
                                        <th>W</th>  {/* Won */}
                                        <th>D</th>  {/* Drawn */}
                                        <th>L</th>  {/* Lost */}
                                        <th>GF</th> {/* Goals For (опционально) */}
                                        <th className={styles.thPts}>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tournamentTable.map((team, i) => (
                                        <tr key={team.name}>
                                            <td className={styles.rankCell}>{i + 1}</td>
                                            <td className={styles.teamCell}>
                                                <img src={team.imageSrc} alt={team.name} />
                                                <span>{team.name}</span>
                                            </td>
                                            <td>{team.matches}</td>
                                            <td>{team.wins}</td>
                                            <td>{team.draws}</td>
                                            <td>{team.losses}</td>
                                            <td style={{ opacity: 0.5 }}>{team.goalsFor}</td>
                                            <td className={styles.ptsCell}>{team.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                {/* RIGHT COL: LAST RESULTS (Берем последние 4 матча из events) */}
                <div className={styles.sideColumn}>
                    <section className={styles.panel}>
                        <h3 className={styles.panelTitle}>Last Results</h3>
                        <div className={styles.lastMatchesList}>
                            {events.slice(0, 4).map((item, i) => (
                                <div key={i} className={styles.miniMatchRow}>
                                    <div className={styles.miniDate}>
                                        <span>FT</span>
                                    </div>
                                    <div className={styles.miniTeams}>
                                        <div className={styles.miniTeamRow}>
                                            <img src={item.game.team1.imageSrc} alt="" />
                                            <span>{item.game.team1.name}</span>
                                            <span className={styles.miniScore}>{item.game.team1.goal}</span>
                                        </div>
                                        <div className={styles.miniTeamRow}>
                                            <img src={item.game.team2.imageSrc} alt="" />
                                            <span>{item.game.team2.name}</span>
                                            <span className={styles.miniScore}>{item.game.team2.goal}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
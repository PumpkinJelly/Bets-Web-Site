import styles from "./schedule.module.css";
import { events } from "@/content/events";
import ScheduleCard from "../../../components/ScheduleCards";
import { useTranslations } from "next-intl";

const Schedule = () => {
    const t = useTranslations("event");

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>{t("title")}</h1>
                <div className={styles.eventsWrapper}>
                    <div className={styles.eventsList}>
                        {events.map((event, index) => (
                            <ScheduleCard key={index} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
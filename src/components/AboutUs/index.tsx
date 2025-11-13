import { useTranslations } from "next-intl";
import ContentBlock from "../ContentBlock";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
  const t = useTranslations("about");

  return (
    <section id="About" className={styles.container}>
      <div className={styles.content}>
        <ContentBlock
          title={t("title")}
          description={t("description")}
          imageSrc="/images/soccer-with-logo.png"
          alt={t("title")}
        />

        <ContentBlock
          title={t("historyTitle")}
          description={t("historyDescription")}
          alt={t("historyTitle")}
        />

        <ContentBlock
          title={t("firstTournamentTitle")}
          description={t("firstTournamentDescription")}
          imageSrc="/images/cup.png"
          alt={t("firstTournamentTitle")}
        />

        <ContentBlock
          description={t("growthDescription")}
          imageSrc="/images/player.png"
          alt={t("title")}
        />

        <ContentBlock
          description={t("communityDescription")}
        />
      </div>
    </section>
  );
}

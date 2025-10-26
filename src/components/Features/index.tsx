"use client";

import { useFeatures } from '@/content/features';
import FeaturesItem from '../FeaturesItem';
import TitleBadge from '../TitleBadge';
import styles from './features.module.css';
import { FaSun } from 'react-icons/fa';
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("services");
  const features = useFeatures(); 

  return (
    <div className={styles.container}>
      <TitleBadge title={t("mainFeaturesTitle")} icon={FaSun} />
      <div className={styles.items}>
        {features.map((feature, index) => (
          <FeaturesItem {...feature} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;

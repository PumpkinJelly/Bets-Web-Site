"use client";

import { FeaturesItemProps } from "@/types/featuresItemProps";
import { useTranslations } from "next-intl";

export function useFeatures(): FeaturesItemProps[] {
  const t = useTranslations("services"); 

  return [
    {
      title: t("matchesTitle"),
      description: t("matchesDescription"),
    },
    {
      title: t("shootingTitle"),
      description: t("shootingDescription"),
    },
    {
      title: t("varTitle"),
      description: t("varDescription"),
    },
  ];
}
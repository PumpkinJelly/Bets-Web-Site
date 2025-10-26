import { ElementType } from "react";
import { FaCrown, FaHeart } from "react-icons/fa";
import { useTranslations } from "next-intl";

export interface InfoBlockProps {
  description: string;
  icon: ElementType;
  backgroundColor?: string;
}

// Хук, возвращающий переводы из messages/[locale].json
export function useInfoBlocks() {
  const t = useTranslations("partners");

  const highlights: InfoBlockProps = {
    description: t("awardsText"),
    icon: FaCrown,
  };

  const halykLiga: InfoBlockProps = {
    description: t("communityDescription"),
    icon: FaHeart,
  };

  return { highlights, halykLiga };
}

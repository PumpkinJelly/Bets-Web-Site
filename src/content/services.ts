"use client";

import { ServiceItemProps } from "@/types/serviceItemProps";
import { FaGift, FaMicrophone, FaStar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export function useServicesItems(): ServiceItemProps[] {
  const t = useTranslations("services");

  return [
    {
      description: t("tournamentsTitle"),
      icon: FaStar,
    },
    {
      description: t("rewardsTitle"),
      icon: FaGift,
    },
    {
      description: t("educationTitle"),
      icon: FaPerson,
    },
    {
      description: t("podcastTitle"),
      icon: FaMicrophone,
    },
  ];
}
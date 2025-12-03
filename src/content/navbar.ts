"use client";

import { useTranslations } from "next-intl";

type NavbarLink = {
  name: string;
  link: string;
};

export function useNavbarLinks(): NavbarLink[] {
  const t = useTranslations("navbar");

  return [
    {
      name: t("schedule"),
      link: "/Schedule"
    },
    {
      name: t("statistics"),
      link: "/Stats"
    },
    {
      name: t("news"),
      link: "/News"
    },
    {
      name: t("about"),
      link: "/#about"
    },
    {
      name: t("socials"),
      link: "/#footer"
    }
  ];
}

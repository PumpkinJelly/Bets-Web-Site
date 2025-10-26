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
      link: "/"
    },
    {
      name: t("statistics"),
      link: "/"
    },
    {
      name: t("news"),
      link: "/#"
    },
    {
      name: t("gallery"),
      link: "/#"
    },
    {
      name: t("contacts"),
      link: "/#"
    }
  ];
}

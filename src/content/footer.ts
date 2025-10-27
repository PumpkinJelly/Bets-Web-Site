"use client";

import { useTranslations } from "next-intl";

type LinksType = {
  name: string;
  link: string;
};

interface FooterLink {
  title: string;
  links: LinksType[];
}

export function useFooterLinks(): FooterLink[] {
  const t = useTranslations("footer");

  return [
    {
      title: t("navigationTitle"),
      links: [
        { name: t("navigationLinks.about"), link: "/" },
        { name: t("navigationLinks.schedule"), link: "/" },
        { name: t("navigationLinks.statistics"), link: "/" },
        { name: t("navigationLinks.blog"), link: "/" },
        { name: t("navigationLinks.gallery"), link: "/" }
      ]
    },
    {
      title: t("supportTitle"),
      links: [
        { name: t("supportLinks.faq"), link: "/" },
        { name: t("supportLinks.help"), link: "/" },
        { name: t("supportLinks.rules"), link: "/" },
        { name: t("supportLinks.privacy"), link: "/" }
      ]
    },
    {
      title: t("partnersTitle"),
      links: [
        { name: t("partnersLinks.partners"), link: "/" },
        { name: t("partnersLinks.sponsors"), link: "/" },
        { name: t("partnersLinks.affiliate"), link: "/" }
      ]
    }
  ];
}

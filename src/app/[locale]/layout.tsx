import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layout from "@/components/Layout";
import "../globals.css";
import { localesMap } from "@/constants/locales";
import { getMessages } from "next-intl/server";
import { Locale } from "@/types/locale";

const roboto = Roboto({
  weight: ["400", "700"],  // исправлено: "480" → "400", "/790" → "700"
  variable: "--font-roboto",
  subsets: ["latin"]
});

interface PageProps {
  params: Promise<{ locale: Locale; slug?: string }>;
}

export function generateStaticParams() {
  return localesMap.map((locale)=>({ locale }));
}

export const metadata: Metadata = {
  title: "Халык Лига | Казахстан",  // исправлено название
  description: "Проведение любительских футбольных матчей в Казахстане",
};


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: Locale}>
}) {
  const { locale } = await params;

  if (!localesMap.includes(locale)) {
    notFound();
  }
  const messages = await getMessages({locale});
  return (
    <html lang={locale}>
      <body className={roboto.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
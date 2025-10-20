import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Халык Лига | Казахстан",
  description: "Проведение любительских футбольный матчей в Казахстане",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages()
  return (
      <html lang="en">
        <body className={`${roboto.variable}`}>
          <NextIntlClientProvider messages={messages}>
          <Layout>
            {children}
          </Layout>
          </NextIntlClientProvider>
        </body>
      </html>

  );
}
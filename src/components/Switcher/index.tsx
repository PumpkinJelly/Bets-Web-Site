"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import styles from "./switcher.module.css";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "", label: "KZ...(Soon)" },
  ];

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        {languages.find((l) => l.code === currentLocale)?.label || currentLocale.toUpperCase()}
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className={styles.menu}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={`${styles.option} ${currentLocale === lang.code ? styles.active : ""
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

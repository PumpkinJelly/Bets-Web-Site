interface LinksType {
    name: string;
    link: string;
}

interface FooterLink {
    title: string;
    links: LinksType[];
}

export const footerLinks: FooterLink[] = [
    {
        title: "Навигация",
        links: [
            {
                name: "О нас",
                link: "/"
            },
            {
                name: "Расписание",
                link: "/"
            },
            {
                name: "Статистика",
                link: "/"
            },
            {
                name: "Блонг и новости",
                link: "/"
            },
            {
                name: "Галерея",
                link: "/"
            }
        ]
    },
    {
        title: "Поддержка",
        links: [
            {
                name: "FAQ",
                link: "/"
            },
            {
                name: "Помощь",
                link: "/"
            },
            {
                name: "Правила",
                link: "/"
            },
            {
                name: "Политика конфиденциальности",
                link: "/"
            }
        ]
    },
    {
        title: "Партнеры",
        links: [
            {
                name: "Партнеры",
                link: "/"
            },
            {
                name: "Спонсоры",
                link: "/"
            },
            {
                name: "Партнерская программа",
                link: "/"
            }
        ]
    }
]
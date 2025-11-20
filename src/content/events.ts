import { GameType } from "@/types/gameType";

export interface EventsProps {
    game: GameType;
    link: string;
}

export const events: EventsProps[] = [
    {
        game: {
            team1: {
                name: "Kairat",
                imageSrc: "/content/teams/kairat.svg",
                goal: 1
            },
            team2: {
                name: "Astana",
                imageSrc: "/content/teams/astana.svg",
                goal: 2
            },
            location: "Almaty",
            date: "2021-10-10",
            time: "19:00"
        },
        link: "/#"
    },
    {
        game: {
            team1: {
                name: "FcAstana",
                imageSrc: "/content/teams/astana-big.svg",
                goal: 1
            },
            team2: {
                name: "Almata",
                imageSrc: "/content/teams/alma-ata.svg",
                goal: 2
            },
            location: "Almaty",
            date: "2021-10-10",
            time: "19:00"
        },
        link: "/#"
    },
    {
        game: {
            team1: {
                name: "Ordabasy",
                imageSrc: "/content/teams/ordabasy.svg",
                goal: 1
            },
            team2: {
                name: "Astana",
                imageSrc: "/content/teams/astana.svg",
                goal: 2
            },
            location: "Almaty",
            date: "2021-10-10",
            time: "19:00"
        },
        link: "/#"
    },
    {
        game: {
            team1: {
                name: "Kairat",
                imageSrc: "/content/teams/kairat.svg",
                goal: 1
            },
            team2: {
                name: "Aktobe",
                imageSrc: "/content/teams/aktobe-big.svg",
                goal: 2
            },
            location: "Almaty",
            date: "2021-10-10",
            time: "19:00"
        },
        link: "/#"
    },
    {
        game: {
            team1: {
                name: "FcAstana",
                imageSrc: "/content/teams/astana-big.svg",
                goal: 1
            },
            team2: {
                name: "Astana",
                imageSrc: "/content/teams/astana.svg",
                goal: 2
            },
            location: "Almaty",
            date: "2021-10-10",
            time: "19:00"
        },
        link: "/#"
    },
];
type TeamType = {
    name: string;
    imageSrc: string;
    goal: number;
};

type GameType = {
    team1: TeamType;
    team2: TeamType;
    location: string;
    date: string;
    time: string;
};

interface EventsProps {
    game: GameType;
    link: string;
}

export const events: EventsProps[] = [
    {
        game: { 
            team1: {
                name: "Kairat",
                imageSrc: "/content/teams/kairat.png",
                goal: 1
            },
            team2: {
                name: "Astana",
                imageSrc: "/content/teams/astana.png",
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
                name: "Aktobe",
                imageSrc: "/content/teams/aktobe.png",
                goal: 3
            },
            team2: {
                name: "Shakhter",
                imageSrc: "/content/teams/shakhter.png",
                goal: 1
            },
            location: "Karaganda",
            date: "2021-11-05",
            time: "17:30"
        },
        link: "/#"
    },
    {
        game: { 
            team1: {
                name: "Tobol",
                imageSrc: "/content/teams/tobol.png",
                goal: 2
            },
            team2: {
                name: "Ordabasy",
                imageSrc: "/content/teams/ordabasy.png",
                goal: 2
            },
            location: "Kostanay",
            date: "2021-12-01",
            time: "15:00"
        },
        link: "/#"
    },
    {
        game: { 
            team1: {
                name: "Zhetysu",
                imageSrc: "/content/teams/zhetysu.png",
                goal: 0
            },
            team2: {
                name: "Taraz",
                imageSrc: "/content/teams/taraz.png",
                goal: 3
            },
            location: "Taldykorgan",
            date: "2022-01-15",
            time: "18:45"
        },
        link: "/#"
    },
    {
        game: { 
            team1: {
                name: "Caspiy",
                imageSrc: "/content/teams/caspiy.png",
                goal: 2
            },
            team2: {
                name: "Atyrau",
                imageSrc: "/content/teams/atyrau.png",
                goal: 4
            },
            location: "Aktau",
            date: "2022-02-20",
            time: "16:20"
        },
        link: "/#"
    }
];
import { TeamType } from "./teamType";

export type GameType = {
    team1: TeamType;
    team2: TeamType;
    location: string;
    date: string;
    time: string;
};
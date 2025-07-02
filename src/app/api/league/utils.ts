import { NextResponse } from "next/server";
import { TAction, TDates, TLeague, TMatches } from "./types";
import config from "@/config";

export const filterData = (filter: TAction, teamFixtures: TMatches[], keyName: string, dateSpan?: TDates) => {
    return teamFixtures.filter((team) => {
        if (filter === "wins") {
            return team.team1.key === keyName ? team.score1 > team.score2 : team.score2 > team.score1;
        } else if (filter === "losses") {
            return team.team1.key === keyName ? team.score1 < team.score2 : team.score2 < team.score1;
        } else if ( filter ===  'byDate' ) {
            if(dateSpan && 'startDate' in dateSpan && 'endDate' in dateSpan) {
                return null;
            }   

            const startDate: number | undefined = new Date(dateSpan!.startDate).getTime();
            const endDate: number | undefined = new Date(dateSpan!.endDate).getTime();
            return new Date(team.date).getTime() >= startDate &&  new Date(team.date).getTime() <= endDate
        } else {
            return team.team1.key === keyName ? team.score1 === team.score2 : team.score2 === team.score1;
        }
    });
}


export const getTeamData = async () => {
    const res = await fetch(`${config.baseServerApi}/league`);
    const result: TLeague = await res.json();
    return NextResponse.json({...result}, {status: 200});
}
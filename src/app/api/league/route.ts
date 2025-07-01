import { NextResponse } from "next/server";
import { filterData, getTeamData } from "./utils";
import { TMatchDays, TMatches, TTeam } from "./types";


const reduceTeams = (matchDays: TMatches[]) => { 
    const allTeams: TTeam[] = [];
    const tempArr: string[]= [];


    matchDays.forEach((current) => {
        if (!tempArr.includes(current.team1.key)) {
            tempArr.push(current.team1.key);
            allTeams.push(current.team1);
        }
    });
    
    return allTeams;
}

export async function GET() { 
    const allGames: TMatches[] = [];

    try {
        const res = await getTeamData();
        if(!res.ok) return NextResponse.json({error: "No Data"}, {status: 401});
        const leagueRounds = await res.json();

        leagueRounds.rounds.forEach((roundMatched: TMatchDays) => roundMatched?.matches?.forEach((match) => allGames.push(match) ));
        
        const teams = reduceTeams(allGames);
        const teamSorted  = teams.sort((a, b) => a.key.localeCompare(b.key));

        return NextResponse.json({teams: teamSorted}, {status: 200});

    } catch(e) {
        console.log(e)
        return NextResponse.json({error: e}, {status: 500});
    }
}

export async function  POST(req: Request) {
    let leagueRounds;
    const body = await req.json();
    const teamKey: string = body?.teamKey;
    // const dateSpan: {startDate: string; endDate: string;} | undefined = "startDate" in body && "endDate" in body 
    //     ? { startDate: body.startDate, endDate: body.endDate } 
    //     : undefined;

    try {
        const res = await getTeamData();
        if(!res.ok) return NextResponse.json({error: "No Data"}, {status: 401});
        leagueRounds = await res.json();
    } catch(e) {
        console.log(e)
        return NextResponse.json({error: e}, {status: 500});
    }

    const teamFixtures: TMatches[] = leagueRounds?.rounds.map((round: TMatchDays) => {
        return round?.matches?.filter((matchfixture: TMatches) => {
            return matchfixture.team1.key === teamKey || matchfixture.team2.key === teamKey;
        })
    }).flat();


    const wins = filterData('wins', teamFixtures, teamKey);
    const losses = filterData('losses', teamFixtures, teamKey);
    const draws = filterData('draws', teamFixtures, teamKey);

    const matchStats = {
        wins,
        draws,
        losses,
        totals: {
            wins: wins.length,
            draws: draws.length,
            losses: losses.length
        }
    }

    return NextResponse.json({matchStats}, {status: 200});

    //     case "byDate":

    //     const matchesByDate =  filterData('byDate', teamFixtures, teamKey, dateSpan);

    //         matchStats = {
    //             byDate: matchesByDate,
    //             totalGames: matchesByDate?.length || 0
    //         }

    //         return NextResponse.json({matchStats}, {status: 200});
            
    //     default:
    //         const allGames: TMatches[] = [];
        
    //         leagueRounds.rounds.forEach((roundMatched: TMatchDays) => roundMatched?.matches?.forEach((match) => allGames.push(match) ));
    //         const teams = reduceTeams(allGames).sort((a, b) => a.key.localeCompare(b.key));
        
    //         return NextResponse.json({teams}, {status: 200});
    // }
}


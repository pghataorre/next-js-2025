 "use server";
import LeagueDateFilter from "@/Components/League/LeagueFilters/LeagueFilters";
import PageLayout from "@/Components/PageLayout/PageLayout";
import { TTeamResponse, TFilteredData, TTeam } from '@/app/api/league/types';
import LeagueTeamsList from '@/Components/League/LeagueTeamsList/LeagueTeamsList';
import config from '@/config';
import TeamStats from "@/Components/League/TeamStats/TeamStats";
import style from './LeaguePage.module.css';

type TSearchBody = {
    teamKey: string | undefined;
    action?: string | undefined;
    byDate?: {
        startDate: string | undefined;
        endDate: string | undefined;
    }
}


type TParams = {
    searchParams: Record<string, string | string[] | undefined | TSearchBody>
}

export async function getTeams(searchBody: TSearchBody) {
    try {
        const res = await fetch(`${config.apiUrl}/league`, {
            "method": "POST",
            "body": JSON.stringify({
                "teamKey": searchBody?.teamKey,
                "action": searchBody?.action
            }),
            "headers": {
                "Content-Type": "application/json"
            }
        });
        
        const result = await res.json();

        return await result;
    } catch (e) {
        console.log('error -----', e);
    }
}

export async function getAllTeams() {
    try {
        const res = await fetch(`${config.apiUrl}/league`);
        const result = await res.json();

        return await result;
    } catch (e) {
        console.log('error -----', e);
    }
}

export default async function League({searchParams}: TParams) {
    let dataTeams: TTeamResponse | undefined = undefined;
    let filteredTeams: TFilteredData | undefined = undefined
    let teamName: TTeam | undefined = undefined;
    const params = {teamKey: searchParams.teamKey || undefined, action: searchParams.action || undefined }

    dataTeams = await getAllTeams();


    if(dataTeams &&'teams' in dataTeams) {
        teamName = await dataTeams?.teams?.find((team: TTeam) =>  team.key === params.teamKey);
    }


    if('teamKey' in params) {
        filteredTeams = await getTeams(params);
    }

    return (
        <PageLayout>
            {!dataTeams ? (
                <h2>L o a d i n g</h2>
            ) : (
                <>
                    <h2>FOOTBALL LEAGUE</h2>
                    <LeagueDateFilter teamsData={dataTeams?.teams} />
                    <div className={style['teams-data-container']}>
                        <div className={style['full-team-data-listing']}>
                            <h2>TEAMS</h2>
                            <LeagueTeamsList teamsData={dataTeams?.teams} />
                        </div>
                        {filteredTeams && (
                            <div>
                                <h2>TEAM STATS: {teamName && ('name' in teamName ) ? (teamName.name) : ('')}</h2>
                                <div className={style['team-results-data']} >
                                    <TeamStats filteredTeams={filteredTeams.matchStats} />
                                </div> 
                            </div> 
                    )}
                    </div>
                </>
            )}
        </PageLayout>
    )
} 
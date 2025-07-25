import PageLayout from "@/Components/PageLayout/PageLayout";
import config from "@/config";
import style from './football.module.css';
import Link from "next/link";
import { TTeam } from './types';


type TSearchBody = {
  teamId: string | undefined;
}

type TParams = {
    searchParams: TSearchBody;
}


const getTeams = async (teamId?: string | undefined): Promise<TTeam[] | undefined> => {
    const url = !teamId 
      ? `${config.apiUrl}/football/teams` 
      : `${config.apiUrl}/football/teams/${teamId}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      const sortedResult = result.teams.sort((a: TTeam, b: TTeam) => a.name.localeCompare(b.name));

      return sortedResult;

    } catch (e) {
      console.log('error -------- ', e);
      return undefined;
    }
}


export default async function Football({searchParams}: TParams) {
  const params: TSearchBody | undefined = {teamId: searchParams.teamId || undefined};
  const teamsResult = await getTeams(params.teamId);

  return (
    <PageLayout>
        {!teamsResult ? (
            <h2>L o a d i n g</h2>
        ) : (
          <>  
            <h2>FOOTBALL LEAGUE</h2>
            <div className={style['teams-container']}>
              <h3>TEAMS</h3>
              <ul>
              {
                  teamsResult?.map((team: TTeam) => {
                    return (<li key={team.teamid}><Link href={`football?teamId=${team.teamid}`}>{team.name}</Link></li>) 
                  })
              }
              </ul>
            </div>
          </>
        )}
    </PageLayout>
  )
} 
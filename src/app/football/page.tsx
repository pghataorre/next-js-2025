import PageLayout from "@/Components/PageLayout/PageLayout";
import config from "@/config";
import style from './football.module.css';
import Link from "next/link";
import { TManagers, TPlayers, TTeam, TTeamsList } from './types';


type TSearchBody = {
  teamId: string | undefined;
}

type TParams = {
    searchParams: TSearchBody;
}


const getTeams = async (teamId?: string | undefined): Promise<TTeamsList | undefined> => {
    const url = !teamId 
      ? `${config.apiUrl}/football/teams` 
      : `${config.apiUrl}/football/teams/${teamId}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      const sortedResult = result.teams.sort((a: TTeam, b: TTeam) => a.name.localeCompare(b.name));
      return !teamId ? {teams: sortedResult } : {...result, teams: sortedResult};

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
             
              <div className={style['team-details']}>
              {teamsResult?.teams.length > 0 && (
                <ul>
                  <li><h3>TEAMS</h3></li>
                  {
                    teamsResult?.teams?.map((team: TTeam) => {
                      return (<li key={team.teamid}><Link href={`/football?teamId=${team.teamid}`}>{team.name}</Link></li>) 
                    })
                  }
                </ul>
              )}

              {teamsResult?.players !== undefined && teamsResult?.players.length > 0 && 
              
                (<ul>
                  <li><h3>PLAYERS</h3></li>
                  {
                    teamsResult?.players?.map((player: TPlayers) => {
                      return (<li key={`${player.playerid}-${player.posid}`}><Link href={`/player?playerId=${player.playerid}`}>{`${player.firstname}  ${player.lastname} (${player.shirt_number})`}</Link></li>) 
                    })
                  }
                </ul>
              )}


              {teamsResult?.managers !== undefined && teamsResult?.managers.length > 0 && (
                <ul>
                  <li><h3>MANAGERS</h3></li>
                  {
                    teamsResult?.managers?.map((manager: TManagers) => {
                      return (<li key={`${manager.m_name}-${manager.iscurrent}`}><Link href={`/managers?playerId=${123}`}>{`${manager.m_name}`}</Link></li>) 
                    })
                  }
                </ul>
              )}
              </div>
            </div>
          </>
        )}
    </PageLayout>
  )
} 
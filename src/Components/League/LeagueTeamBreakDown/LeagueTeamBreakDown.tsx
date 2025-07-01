import { TMatches } from '@/app/api/league/types';
import style from './LeagueTeamBreakDown.module.css';


const LeagueTeamBreakDown = ({ teamsData} : { teamsData: TMatches[] }) => {  
    return(
        <div className={style['team-stats']}>
            <ul>
                {
                    teamsData?.map((team: TMatches) => {
                        return (
                        <li key={`${new Date(team.date).getTime()}`}>
                            <p>{team?.date}</p>
                            <p>{team.team1.name} <strong>({team.score1})</strong></p>
                            <p>{team.team2.name} <strong>({team.score2})</strong></p>
                        </li>)
                        
                    })
                }
            </ul>
        </div>
    )
};

export default LeagueTeamBreakDown;

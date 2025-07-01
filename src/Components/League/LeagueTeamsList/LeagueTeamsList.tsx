import { TTeam } from '@/app/api/league/types';
import style from './LeagueTeamsList.module.css';
import Link from 'next/link';

const LeagueTeamsList = ({ teamsData} : { teamsData: TTeam[] }) => {
    if(!teamsData) (<h2>Sorry No Team Data Available</h2>);    
    return(
        <div className={style['teams-list-container']}>
            <ul>
                {
                    teamsData?.map((team: TTeam) => (
                        <li key={`${team.key}-${team.code}`}><Link href={`/league?teamKey=${team.key}`} >{team.name} </Link></li>
                    ))
                }
            </ul>
        </div>
    )
};

export default LeagueTeamsList;

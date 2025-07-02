import { TFilteredData } from "@/app/api/league/types";
import config from "@/config";
import style from './TeamStats.module.css';
import LeagueTeamBreakDown from "../LeagueTeamBreakDown/LeagueTeamBreakDown";
import { TMatches } from "@/app/api/league/types";



const TeamStats = ({ filteredTeams }: { filteredTeams: TFilteredData }) => {
    const teamFiltersOptions = config.filterOptions;

    if(!filteredTeams) return('');
    return (
        <>
            {teamFiltersOptions.map((filter) => {
                const keyVal = filter.keyName as 'wins' | 'draws' | 'losses';
                const totalGoals: number = filteredTeams.matchStats.totals[keyVal];
                return(
                    <div className={style['team-stat-container']} key={filter.keyName}>
                        <h4>{filter.name} ({totalGoals})</h4>
                           {Array.isArray(filteredTeams.matchStats[keyVal]) ? (
                            <LeagueTeamBreakDown teamsData={filteredTeams.matchStats[keyVal] as TMatches[]} />
                        ) : null}
                    </div>
                )
            })}
        </>
    );
}

export default TeamStats;

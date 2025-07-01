import { TFilteredData } from "@/app/api/league/types";
import config from "@/config";
import style from './TeamStats.module.css';
import LeagueTeamBreakDown from "../LeagueTeamBreakDown/LeagueTeamBreakDown";



const TeamStats = ({filteredTeams}: TFilteredData) => {
    const teamFiltersOptions = config.filterOptions;
    return (
        <>
            {teamFiltersOptions.map((filter) => {
                return(
                    <div className={style['team-stat-container']} key={filter.keyName}>
                        <h4>{filter.name} ({filteredTeams.totals[filter.keyName]})</h4>
                        <LeagueTeamBreakDown teamsData={filteredTeams[filter.keyName]} />
                    </div>
                )
            })}
        </>
    );
}

export default TeamStats;
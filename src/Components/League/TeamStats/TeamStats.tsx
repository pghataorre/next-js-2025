import { TFilteredData } from "@/app/api/league/types";
import config from "@/config";
import style from './TeamStats.module.css';
import LeagueTeamBreakDown from "../LeagueTeamBreakDown/LeagueTeamBreakDown";
import { TMatches } from "@/app/api/league/types";



const TeamStats = ({ filteredTeams }: { filteredTeams: TFilteredData }) => {
    const teamFiltersOptions = config.filterOptions;
    return (
        <>
            {teamFiltersOptions.map((filter) => {
                return(
                    <div className={style['team-stat-container']} key={filter.keyName}>
                        <h4>{filter.name} ({filteredTeams.totals[filter.keyName as keyof typeof filteredTeams.totals]})</h4>
                        {Array.isArray(filteredTeams[filter.keyName as keyof TFilteredData]) ? (
                            <LeagueTeamBreakDown teamsData={filteredTeams[filter.keyName as keyof TFilteredData] as TMatches[]} />
                        ) : null}
                    </div>
                )
            })}
        </>
    );
}

export default TeamStats;
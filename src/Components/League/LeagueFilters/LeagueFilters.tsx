'use client';
import style from './leagueFilters.module.css';
import { TTeam } from '@/app/api/league/types';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const LeagueDateFilter = ({ teamsData }: {teamsData: TTeam[] }) => {
  const [hasTeamSelected, setHasTeamSelected] = useState<boolean>(false); 
  const teamsRef = useRef<HTMLSelectElement>(null);
  const filterByRef = useRef<HTMLSelectElement>(null);
  const router = useRouter();


  if (!teamsData) (<h2>Sorry No Filters please try again later</h2>);

  const handleOnChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setHasTeamSelected(false);
    const teamName: string | null = teamsRef?.current?.value || null;
    const filterType: string | null = filterByRef?.current?.value || null;

    if (!teamName || teamName === '-1') {
      setHasTeamSelected(true);
    } else {
      const actionFilter = filterType !== '-1' ? `&action=${filterType}` : '';
      router.push(`/league?teamKey=${teamName}${actionFilter}`);
    }
  }

  return (
    <div className={style['filter-container']}>
      {hasTeamSelected && (<h2>You have  not Selected a Team</h2>)}
     
        <label htmlFor="teamsList">
          <span className={style['filter-title']}>Filter By Team:</span>
          <select 
            name="teamsList" 
            id="teamsList" 
            className={style['filter-select']} 
            ref={teamsRef}
            onChange={(e) => handleOnChange(e)}
          >
            <option value="-1" defaultValue="-1">Select an option</option>
            {teamsData?.map((team: TTeam) => (<option value={team.key} key={`${team.code}-${team.key}`}>{team.name}</option>))}
          </select> 
        </label>

        {/* <label htmlFor="teamsList">
          <span className={style['filter-title']}>Filter By:</span>
          <select 
            name="teamFilter" 
            id="teamFilter" 
            className={style['filter-select']} 
            ref={filterByRef}
          >
            <option value="-1" defaultValue={true}>Select an option</option>
            {config.filterOptions?.map((filter) => (<option value={filter.keyName} key={`${filter.keyName}`}>{filter.name}</option>))}
          </select>
        </label> */}
    </div>
  )
}

export default LeagueDateFilter;


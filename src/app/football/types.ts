export type TTeamsList = {
  teams: TTeam[];
  managers? : TManagers[];
  players?: TPlayers[];
}

export type TTeam = {
  teamid: string;
  name: string;
  key: string;
  code: string;
}

export type TManagers = {
  team_name: string;
  m_name: string;
  iscurrent: boolean;
}

export type TPlayers = {
  team_name: string;
  playerid: string;
  firstname: string;
  lastname: string;
  shirt_number: string;
  posid: string;
  position_name: string;
  position_key: string;
}
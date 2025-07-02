export type TLeague = {
    name: string;
    rounds: TMatchDays[];
};

export type TMatchDays = {
    name: string;
    matches: TMatches[];
};

export type TMatches = {
    date: string;
    team1: TTeam;
    team2: TTeam;
    score1: number;
    score2: number;
}

export type TTeam = {
    key: string;
    name: string;
    code: string;
}

export type TTeamResponse = {
    teams: TTeam[];
}

export type TAction = 'draws' | 'wins' | 'losses' | 'byDate';

export type TDates = {
    startDate: string, 
    endDate: string
} | undefined;


export type TFilteredData = {
    draws: TMatches[],
    losses: TMatches[],
    totals: {
        wins: number;
        draws: number;
        losses: number;
    }
    wins:  TMatches[];
} | undefined;

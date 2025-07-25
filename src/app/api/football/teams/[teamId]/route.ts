import { NextResponse } from 'next/server';
import poolConnection from '../../connection';

export async function GET(req: Request, context: { params?: { teamId?: string } }) {
  const teamId: string | undefined = context?.params?.teamId || undefined;
  const client = await poolConnection.connect();
  try {
    const teams = await client.query(`SELECT * FROM get_teams(NULL)`);
    const managers = await client.query(`SELECT * FROM get_managers('${teamId}')`);
    const players = await client.query(`SELECT * FROM get_team_players('${teamId}')`);

    const info = {
      teams: teams.rows,
      managers: managers.rows,
      players: players.rows
    } 

    return NextResponse.json({...info}, {status: 200});

  } catch(e) {
    console.log('error ------------ ', e);
     return NextResponse.json({error: e}, {status: 500});

  } finally {
    await client.release();
  }
}

import { NextResponse } from 'next/server';
import poolConnection from '../connection';

export async function GET() {
  const client = await poolConnection.connect();
  try {
    const res = await client.query(`SELECT * FROM get_teams()`);
    return NextResponse.json({teams: res.rows}, {status: 200});

  } catch(e) {
    console.log('error ------------ ', e);
     return NextResponse.json({error: e}, {status: 500});

  } finally {
    await client.release();
  }
}

export async function POST(req: Request) {
  const client = await poolConnection.connect();
  try {

    const body = await req.json();
    const {name, key, code } = body;

    const sql = `CALL insert_team('${name}', '${key}', '${code}')`; 
    const res = await client.query(sql);


    console.log('res ------------------ ', res);

    return NextResponse.json({teams: {
      ...body,
      rowCount: res.rowCount
    }}, {status: 200});

  } catch(e) {
     return NextResponse.json({error: e}, {status: 500});

  } finally {
    await client.release();
  }
}
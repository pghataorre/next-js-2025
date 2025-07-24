import { NextResponse } from 'next/server';
import poolConnection from '../connection';

export async function GET() {
  const client = await poolConnection.connect();
  try {
    const res = await client.query(`SELECT * FROM get_managers(NULL)`);
    return NextResponse.json({managersList: res.rows}, {status: 200});

  } catch(e) {
    console.log('error ------------ ', e);
     return NextResponse.json({error: e}, {status: 500});

  } finally {
    await client.release();
  }
}
import config from '@/config';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch(`${config.permyApi}`, {
            cache: 'no-store',
        });
        const result = await res.json();

        return NextResponse.json({mixes: result.Items ?? []}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 400});
    }
}

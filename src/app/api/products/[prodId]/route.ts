import { NextResponse } from 'next/server';
import getProducts from '../getProducts';

export async function GET(req: Request, context: { params?: { prodId?: string } }) {
    const prodId: string | number | undefined = context?.params?.prodId || undefined;

    if (!Number(prodId)) {
        return NextResponse.json({error: 'Bad Request'}, {status: 400});
    }

    try {
        const result = await getProducts(prodId);
        return NextResponse.json({...result}, {status: 200});

    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
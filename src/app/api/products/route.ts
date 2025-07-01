import getProducts from './getProducts';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const products = await getProducts();
        return NextResponse.json({...products}, {status: 200});

    } catch (error){
        return NextResponse.json({error}, {status: 200});
    }
}

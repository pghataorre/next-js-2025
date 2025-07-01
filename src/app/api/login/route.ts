import { NextResponse } from "next/server";
import getUser from "./getUser";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req: Request) { 
    const userDetails = await req.json();
    const {username, password} = userDetails;

    try {
        const user = await getUser({username, password});
        if('id' in user) {
            const userSafe = {
                id: user.id,
            }

            const token = jwt.sign(
                userSafe,
                process.env.JWT_SECRET as string,
                { expiresIn: '1h' }
            );


            const cookieProperties = {
                httpOnly: false,
                secure: true,
                path: '/', 
                maxAge: 10 * 60, // 10 minutes
                sameSite: 'strict',
            }

            cookies().set(
                'access-token', 
                token,
                cookieProperties as object
            )      
            
            cookies().set(
                'id', 
                user.id,
                cookieProperties as object
            )   

            return NextResponse.json({foundUser: true, user: {name: user.name, id: user.id}}, {status: 200});

        } else {
            return NextResponse.json({foundUser: false, user: {}}, {status: 400});
        }

    } catch(error) {
        console.log('error ----------- ', error);
        return NextResponse.json({error}, {status: 500});
    }
}
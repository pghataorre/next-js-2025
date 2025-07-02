import { NextResponse } from "next/server";
import config from '@/config';

const getPosts = async (blogId?: string | undefined) => {

    try {
        const res = await fetch(`${config.baseServerApi}/posts`);
        const results = await res.json();
        
        if(!blogId) {
            return NextResponse.json({results: results}, {status: 200});
        } else{
            const singleBlogg = [...results].filter((item) => item.id === blogId);
            return NextResponse.json({...singleBlogg[0]}, {status: 200});
        }

    }  catch(error) {
        console.log('error ----------- ', error);
        return NextResponse.json({error}, {status: 500});
    }
}

export default getPosts;
import { NextResponse } from "next/server";

const getPosts = async (blogId?: string | undefined) => {

    try {
        const res = await fetch(`${process.env.BASE_JSON_SERVER_URL}/posts`);
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
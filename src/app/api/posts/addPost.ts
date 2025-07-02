import { NextResponse } from 'next/server';
import { TBlog } from '../../posts/types'; 
import config from '@/config';

const addPost = async (postBody: TBlog) => {
    try {
        const res = await fetch(`${config.baseServerApi}/posts`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(postBody)
        })

        const response = await res.json();

        return NextResponse.json({response}, {status: 200});

    } catch (error){
        return NextResponse.json({error}, {status: 500});
    }

}

export default addPost;

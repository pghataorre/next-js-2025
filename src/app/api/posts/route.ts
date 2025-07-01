import getPosts from './getPosts';
import addPost from './addPost';
import { TBlog } from '../../posts/types'; 
import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import {findUser, validateToken} from './utlis';
import getUser from '../login/getUser';

export async function GET() {
    try {
        const res = await getPosts();

        if(!res.ok) throw new Error('Error Occurred')
        const results = await res.json();


        if('results' in results) {
            const tagsCollection = results.results.map((item: {tags: string[]}) => {
                return item?.tags?.map((tag) => {
                    return tag;
                })
            }).flat();

            try {
                const usersCollection = await getUser(results, true);

                const usersAttached = results.results.map((item: TBlog) => {
                    const userAttachedToBlog = findUser(item.userId, usersCollection);

                    item.user = {
                        id: userAttachedToBlog.id,
                        username: userAttachedToBlog.username,
                        name: userAttachedToBlog.name,
                    }
                    return item;
                });

                const tagsCollectionSet = new Set(tagsCollection);
                const tagsCollectionNoDuplicates = Array.from(tagsCollectionSet);

                return NextResponse.json({
                        posts: [...usersAttached],
                        tagsGroup: tagsCollectionNoDuplicates,
                    }, 
                    {status: 200}
                );

            } catch (error) {
                return NextResponse.json({error}, {status: 400});
            }
        }

    } catch(error) {
        return NextResponse.json({error}, {status: 400});
    }
}
    
export async function POST(req: Request) { 
    const headerList = headers();
    const body = await req.json();
    const AuthToken = headerList.get('Authorization');

    if(!AuthToken || !body.id) return NextResponse.json({error: "Not Authorised", added:false}, {status: 401});

    const validToken = validateToken(AuthToken);
    if (!validToken) return NextResponse.json({error: "Not Authorised", added:false}, {status: 401});
    
    if(validToken !== body.id) return NextResponse.json({error: "Not Authorised", added:false}, {status: 401});

    const currentPostsResponse = await getPosts();
    const {results} = await currentPostsResponse.json();

    if(!results || !Array.isArray(results)) {
        throw new Error('CANNOT POST');
    }

    const postBody: TBlog = {
        "id": `${crypto.randomUUID()}`,
        "title": body.blogTitle,
        "body": body.blogBody,
        "tags": body.blogTags,
        "reactions": {
            "likes": 0,
            "dislikes": 0
        },
        "views": 0,
        "userId": body.id
    }

    try {
        const response = await addPost(postBody);
        if(!response.ok) {
            return NextResponse.json({post: {}, added:false}, {status: 401});
        }
        const result = await response.json();
        return NextResponse.json({post: result, added:true}, {status: 200});
  
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
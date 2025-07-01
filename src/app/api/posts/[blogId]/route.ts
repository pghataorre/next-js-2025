import { NextResponse } from 'next/server';
import getPosts from '../getPosts';
import deletePost from '../deletePost';
import patchReaction from '../patchPosts';
import { headers } from 'next/headers';
import {validateToken} from '../utlis';

export async function DELETE(req: Request, context: { params?: { blogId?: string } }) {
    const blogId: string | number | undefined = context?.params?.blogId || undefined;
    const headerList = headers();
    const body = await req.json();
    const AuthToken: string | undefined = headerList.get('Authorization') ?? undefined;

    if (!blogId || !body.userId || !AuthToken) {
        return NextResponse.json({error: "Not Authorized", deleted: false}, {status: 200});
    }

    const validToken = validateToken(AuthToken);
    
    if (!validToken) {
        return NextResponse.json({error: "Not Authorized", deleted: false}, {status: 200});
    }

    try {

        const deleteBlog = await deletePost(blogId);
        if (deleteBlog !== undefined){
            return NextResponse.json({deletedPost: deleteBlog, deleted: true}, {status: 200});

        } else {
            return NextResponse.json({deletedPost: {}, deleted: false}, {status: 401});
        }
    } catch(error) {
        console.log('error --------- ', error);
        return NextResponse.json({error}, {status: 200});
    }
}

export async function PATCH(req: Request, context: { params?: { blogId?: string } }) {
    const blogId: string | number | undefined = context?.params?.blogId || undefined;
    const {reaction} = await req.json();
    try {
        const res = await getPosts(blogId);
        const results = await res.json();

        if('id' in results) {
            const alteredBlog =  await patchReaction(results, reaction);

            if (alteredBlog !== undefined){
                return NextResponse.json({...alteredBlog}, {status: 200});
            } else {
                throw new Error('blog reaction not updated');
            }

        } else {
            throw new Error('blog not found');
        }
    } catch(error) {
        return NextResponse.json({error}, {status: 500});
    }
}

export async function GET(req: Request, context: { params?: { blogId?: string } }) {
    const blogId: string | undefined = context?.params?.blogId || undefined;

    if (!blogId) {
        return NextResponse.json({error: "Bad Request", notFound: true}, {status: 400});
    }

    try {
        const res = await getPosts(blogId);
        const results = await res.json();

        if(results !== undefined) {
            return NextResponse.json({...results, notFound: true}, {status: 200});
        }

        return NextResponse.json({error: "Bad Request"}, {status: 400});

    } catch(error) {
        console.log('error --------', error);
        return NextResponse.json({error}, {status: 500});
    }
}

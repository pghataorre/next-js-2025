import { TBlog, TReaction } from "@/app/posts/types";
import config from "@/config";


const patchReaction = async (blog: TBlog, reaction: TReaction): Promise<TBlog | undefined> => {
    if(reaction === 'likes') {
        blog.reactions.likes = blog.reactions.likes += 1;
    } else {
        blog.reactions.dislikes = blog.reactions.dislikes += 1;
    }

    const addedReaction = {
        ...blog,
    }

    const res = await fetch(`${config.baseServerApi}/posts/${blog.id}`, {
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(addedReaction)
    });

    return res.json();
}

export default patchReaction;
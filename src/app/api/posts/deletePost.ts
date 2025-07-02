import config from "@/config";

const deletePost = async (blogId: string) => {
    const res = await fetch(`${config.baseServerApi}/posts/${blogId}`, {
        "method": "DELETE",
    });

    const result = await res.json();
    return { ...result }
}

export default deletePost;
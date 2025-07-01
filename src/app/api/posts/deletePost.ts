const deletePost = async (blogId: string) => {
    const res = await fetch(`${process.env.BASE_JSON_SERVER_URL}/posts/${blogId}`, {
        "method": "DELETE",
    });

    const result = await res.json();
    return { ...result }
}

export default deletePost;
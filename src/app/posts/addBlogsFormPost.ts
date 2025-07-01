

type TFormDetails = {
    blogTitle: string | undefined;
    blogBody: string | undefined;
    blogTags: string[];
    authToken: string | undefined;
    id: string | undefined;
}

const addBlogsFormPost = async (formDetails: TFormDetails) => {
    const {blogTitle, blogBody, blogTags, authToken, id} = formDetails;

    const res = await fetch(`http://localhost:3000/api/posts`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}` || ''
        },
        "body": JSON.stringify({
            blogTitle: !blogTitle ? '' : blogTitle,
            blogBody: !blogBody ? '' : blogBody,
            blogTags,
            id
        })
    });
    
    return res.json();
}

export default addBlogsFormPost;
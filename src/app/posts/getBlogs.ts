import sortByLikes from './utlis';

const getBlogs = async () => {
    const res = await fetch(`http://localhost:3000/api/posts`);
    const results = await res.json();
    
    if("posts" in results) {
        const sorted = sortByLikes(results);

        return {
            ...results,
            posts: sorted
        }
    }

}

export default getBlogs;
import sortByLikes from './utlis';
import config from '@/config';

const getBlogs = async () => {
    const res = await fetch(`${config.apiUrl}/posts`);
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
import Link from "next/link";
import BlogReaction from "../BlogReaction/BlogReaction";
import { TBlog, IBlogPosts } from "@/app/posts/types";
import style from './BlogList.module.css';

type TBlogList = {
    blogsFilteredData: IBlogPosts | undefined;
    isDeleting: boolean;
    handleDelete: (id: string) => void;
    isLoggedIn: boolean;
};

const BlogList = ({ blogsFilteredData, isDeleting, handleDelete, isLoggedIn }: TBlogList) => {
    if (!blogsFilteredData?.posts) {
        return <h4>Blog posts are loading</h4>;
    }

    return (
        <ul className={style['blog-list-container']}>
            {blogsFilteredData?.posts?.map((item: TBlog) => (
                <li key={`${item.id}-${item.title}`} className={style['mix-item']}>
                    <div className={style['title-container']}>
                        <h2>
                            <Link href={`posts/${item.id}`} className={style['nav-link']}>
                                {item.title}
                            </Link>
                            <span className={style['blog-creator-details']}>
                                Created by: {item?.user?.name} ( {item?.user?.username} )
                            </span>
                        </h2>
                        { isLoggedIn && 
                            (<div>
                                <button
                                    disabled={isDeleting}
                                    id={item.id}
                                    name={item.id}
                                    className={style['delete-button']}
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>)
                        }
                    </div>

                    <div className={style['count-label']}>
                        <BlogReaction
                            id={item.id}
                            likes={item?.reactions?.likes}
                            dislikes={item?.reactions?.dislikes}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
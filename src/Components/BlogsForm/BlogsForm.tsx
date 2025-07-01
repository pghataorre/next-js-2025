import { SyntheticEvent, useRef, useState } from "react";
import addBlogsFormPost from '@/app/posts/addBlogsFormPost';
import style from './BlogsForm.module.css';
import BlogFilterList from "../BlogFilterList/BlogFilterList";
import Cookies from "js-cookie";

type TAddBlog = {
    getAllBlogs: () => void;
    tagsGroup: string[];
    blogFilters: string[];
    isLoggedIn: boolean;
}

const BlogForm = ({getAllBlogs, tagsGroup, isLoggedIn}: TAddBlog): JSX.Element => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [submitForm, setSubmitForm] = useState<boolean>(false);
    const blogTitleRef = useRef<HTMLInputElement>(null);
    const blogBodyRef = useRef<HTMLTextAreaElement>(null);
    const [blogFilters, setBlogsFilters] = useState<string[]>([]);
    
    const handleSubmit = async(event: SyntheticEvent) => {
        event.preventDefault();
        const blogTitle = blogTitleRef.current?.value;
        const blogBody = blogBodyRef.current?.value;
        const blogTags = blogFilters;
        const authToken: string | undefined =  Cookies.get('access-token');
        const id: string | undefined = Cookies.get('id');

        const formDetails = {blogTitle,blogBody, blogTags, authToken, id};
        try {
            const result = await addBlogsFormPost(formDetails);
            if(result.added) {
                setSubmitForm(true);
                setShowForm(false);
            }

        } catch(e) {
            console.log(e);
            return undefined;
        } finally {
            getAllBlogs();
        }
    } 

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.currentTarget;
        let updatedFilters: string[];
    
        if (checked) {
          updatedFilters = [...blogFilters, value];
        } else {
          updatedFilters = blogFilters.filter((tag) => tag !== value);
        }
  
        setBlogsFilters(updatedFilters);
    }

    const handleAddform = () => {
        setShowForm(!showForm);
        setSubmitForm(false);
    }

    return (
        <div className={style['blog-form-container']}>
            
            {isLoggedIn && (
                <h2>
                <span>Add Blog</span>
                    <button type="submit" name="addCloseForm" id="addCloseForm" onClick={handleAddform}>{showForm ? 'Close Form' : 'Add a Blog'}</button>
                </h2>
            )}
            
            {submitForm ? (
                    <h2>Blog has been posted</h2>
                ) : (
                <>
                <div className={showForm ? style['show-blog-form'] : style['hide-blog-form']}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="blogTitle">
                            <span>Blog Title:</span>
                            <input type="text" name="blogTitle" id="blogTitle" placeholder="Add your Blog title" ref={blogTitleRef}/>
                        </label>
                        <label htmlFor="blogText">
                            <span>Blog Text:</span>
                            <textarea name="blogBody" id="blogBody" placeholder="Add your text" ref={blogBodyRef}/>
                        </label>
                        <label htmlFor="submitform">
                            <button type="submit" name="submitform" id="submitform">Submit Blog</button>
                        </label>   
                        <BlogFilterList 
                            tagsGroup={tagsGroup} 
                            blogFilters={blogFilters} 
                            handleOnchange={(e) => handleOnchange(e)} 
                        /> 
                    </form>
                </div>
                </>
                )
            }

        </div>
    )
}

export default BlogForm;


'use client';
import PageLayout from '../../Components/PageLayout/PageLayout';
import { IBlogPosts } from './types';
import BlogsFilter from '@/Components/BlogsFilter/BlogsFilter';
import Modal from '@/Components/Modal/Modal';
import BlogsForm from '@/Components/BlogsForm/BlogsForm';
import LoadingSpinner from '@/Components/Icons/LoadingSpinner/LoadingSpinner';
import getBlogs from './utils/getBlogs';
import { useEffect, useState } from 'react';
import BlogList from '@/Components/BlogList/BlogList';
import BlogLogin from '@/Components/BlogLogin/BlogLogin';
import deleteBlog from './utils/deleteBog';
import Cookies from "js-cookie";

export default function Blogs () {
    const [blogsData, setBlogsData] = useState<IBlogPosts | undefined>(undefined);
    const [blogsFilteredData, setBlogsFilteredData] = useState<IBlogPosts | undefined >(undefined);
    const [blogFilters, setBlogsFilters] = useState<string[]>([]);
    const [isCached, setIsCached] = useState(false); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    // false:  MEANS TO RE-FETCH
    // true:  MEANS TO STOP CALLING API FOR NEW DATA 
    const [isDeleting, setIsDeleting] = useState(false);

    const getAllBlogs = async () => {
      try{
        const results = await getBlogs();

        setBlogsData(results);
        setBlogsFilteredData(results);
        setIsCached(true);
        setIsDeleting(true);
        setIsLoggedIn(true);  
      } catch(e) {
          console.log('error ------- ', e)
          return undefined;
      }finally {
        setTimeout(() =>  setIsDeleting(false), 2000);
      }
    }

    useEffect(() => {
      if(Cookies.get('access-token') !== undefined && Cookies.get('id') !== undefined) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      if(!isCached) {
        getAllBlogs();
      }
    }, [blogsFilteredData, isLoggedIn, isCached]);

    const handleDelete = async(blogId: string) => {
      try {
        const AuthToken = Cookies.get('access-token') || '';
        const userId = Cookies.get('id') || '';

        const result = await deleteBlog(blogId, userId, AuthToken) ;

        if(result.deleted) {
          setIsDeleting(true);
          getAllBlogs();
        }

      } catch(e) {
        console.log(e)
        return;
      } finally {
        setTimeout(() =>  setIsDeleting(false), 2000);
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

      if (updatedFilters.length > 0) {
        setBlogsFilteredData(() => {
          const filteredResults = blogsData?.posts?.filter((blogItem) =>
            updatedFilters.some((item) => blogItem.tags.includes(item))
          );

          return { posts: (filteredResults ?? []).length > 0 ? filteredResults : [] };
        });

      } else {
        setBlogsFilteredData(blogsData ?? undefined);
      }
    };

    return (
      <PageLayout>
          <Modal showModal={isDeleting}>
            <LoadingSpinner />
          </Modal>

        {!blogsData ? (
          <>
            <h2>BLOG POSTS PAGE</h2>
            <h2>... L O A D I N G</h2>
          </>
        ): (
          <>
            <h2>BLOG POSTS PAGE</h2>
            <BlogLogin 
              isLoggedIn={isLoggedIn}
              setIsLoggedIn= {setIsLoggedIn} 
            />
            <BlogsForm 
              getAllBlogs={getAllBlogs} 
              tagsGroup={blogsData?.tagsGroup ?? []} 
              blogFilters={blogFilters}
              isLoggedIn={isLoggedIn}
            />
            <BlogsFilter 
              tagsGroup={blogsData?.tagsGroup ?? []} 
              handleOnchange={(event) => handleOnchange(event) }
              blogFilters={blogFilters}
            />
            <h3>Number of Blogs: {!blogsFilteredData ? '' : blogsFilteredData.posts?.length }</h3>
            <BlogList 
              blogsFilteredData={blogsFilteredData} 
              isDeleting={isDeleting} 
              handleDelete={handleDelete}  
              isLoggedIn={isLoggedIn}
            />
          </>
          )}
      </PageLayout>
    );
  }
  
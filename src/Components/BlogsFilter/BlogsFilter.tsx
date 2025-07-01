import BlogsFilterList from '../BlogFilterList/BlogFilterList';

type TBlogsFilter = {
    tagsGroup: string[];
    handleOnchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    blogFilters: string[];
}

const BlogsFilter = ({tagsGroup, handleOnchange, blogFilters}: TBlogsFilter) => {
    return (
    <>
        <h2>Blog Filters</h2>
        <BlogsFilterList 
            tagsGroup={tagsGroup} 
            blogFilters={blogFilters}
            handleOnchange={handleOnchange}
        />
    </>
    )
}

export default BlogsFilter;
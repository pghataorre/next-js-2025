import style from './BlogFilterlist.module.css';

type TBlogsFilterList = {
    tagsGroup: string [];
    blogFilters: string [];
    handleOnchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogFilterList = ({tagsGroup, blogFilters, handleOnchange}: TBlogsFilterList) =>{
    return(
        <ul className={style['filter-list']}>
            {
            tagsGroup?.map((tagItem: string) => {
                let datestamp: string = Date.now().toString();
                const isChecked = blogFilters.length > 0 
                    ? blogFilters.includes(tagItem)
                    : false;
                return (
                <li key={`${datestamp}-${tagItem}`}>
                    <label htmlFor={tagItem}>
                        <input 
                            type="checkbox" 
                            checked={isChecked} 
                            value={tagItem} 
                            id={tagItem} 
                            onChange={handleOnchange}/>
                        <span>{tagItem}</span>
                    </label>
                </li>)
            })}
        </ul>
    )
}

export default BlogFilterList;
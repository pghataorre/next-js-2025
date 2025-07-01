import { RefObject } from 'react';
import style from './ProductFilters.module.css';

type TProductFilters = {
    categoryList: string[] | undefined;
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleOnchangePrice: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    categoryRef: RefObject<HTMLSelectElement>;
    priceOrderRef: RefObject<HTMLSelectElement>;
}


const ProductFilters = ({categoryList, handleSelectChange, handleOnchangePrice, categoryRef, priceOrderRef}: TProductFilters) => {

    return (
    <div className={style['filter-container']}>
        {categoryList && (<label htmlFor="categoryList" className={style['label-container']}>
            Product Category:
            <select 
                id="categoryList" 
                name="categoryList" 
                onChange={(event) => handleSelectChange(event)} ref={categoryRef} 
                className={style['select-list']}>
                <option defaultValue="-1" value="-1">Category</option>
                { categoryList?.map((catItem, index) => <option key={`${index}-${catItem}`} value={catItem}>{catItem}</option>)} 
            </select>
        </label>)
        }
        <label htmlFor="categoryList" className={style['label-container']}>
            Order By Price:
            <select 
                id="categoryList" 
                name="categoryList" 
                onChange={(event) => handleOnchangePrice(event)} ref={priceOrderRef} 
                className={style['select-list']}>
                    <option defaultValue="-1" value="-1">By Price</option>
                    <option  value="1">Lowest</option>
                    <option value="2">Highest</option> 
            </select>
        </label>
    </div>

)}

export default ProductFilters;
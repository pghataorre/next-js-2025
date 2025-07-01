'use client';

import PageLayout from "@/Components/PageLayout/PageLayout";
import {IProduct, IProductItem
} from './types';
import Link from "next/link";
import style from './Products.module.css';
import ProductCard from "@/Components/ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import filteredProducts from "./filterProducts";
import ProductFilters from "@/Components/ProductFilters/ProductFilters";
import config from "@/config";

export default function Products() {
  const [products, setProducts] = useState<IProductItem[] | undefined>(undefined);
  const [shadowProducts, setShadowProducts] = useState<IProductItem[] | undefined>(undefined);
  const [categoryList, setCategoryList] = useState<string[] | undefined>(undefined);
  const [intialLoad, setInitialLoad] = useState<boolean>(false);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const priceOrderRef = useRef<HTMLSelectElement | null>(null);


  const getProducts = async () => {
    try{
        const res = await fetch(`${config.apiUrl}/products`);
        const result:IProduct = await res.json();
        return result.products;
    } catch (error) {
      console.log('error ------------------------', error);
      return undefined
    }
  }


  useEffect(() => {
    const getProdList = async () => {
      const products = await getProducts();
      const categories = products?.map((product) => {
        return product.category;
      });

      const setOfCategories = new Set(categories);
      const filteredCategories = Array.from(setOfCategories);
      setCategoryList(Array.from(filteredCategories));

      if(!intialLoad) {
        setProducts(products);
        setShadowProducts(products);
      }
    }

    getProdList();

    return () => setInitialLoad(true);

  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const selectedCategory: string | undefined  = categoryRef?.current?.value;
    const fp = selectedCategory === '-1' ? products : filteredProducts(selectedCategory, products);
    setShadowProducts(fp);
  }


  const handleOnchangePrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const productsByPrice = priceOrderRef?.current?.value;

    setShadowProducts((prev) => {
      let sortedProducts; 

      switch(productsByPrice) {
        case '1':
          sortedProducts = prev?.sort((a, b) => Number(a.price) - (Number(b.price)));
            break;
        case '2':
          sortedProducts = prev?.sort((a, b) => Number(b.price) - (Number(a.price)));
          break;
        default: 
          sortedProducts = prev;
          break;
      }
      return [...(sortedProducts ?? [])];
    })
  }
  return (
    <PageLayout>
      <h1>PRODUCTS LIST</h1>
      <p>See the list of dummy products below:</p>
      <h3>Filter</h3>
      <ProductFilters 
        categoryList={categoryList} 
        handleSelectChange={handleSelectChange} 
        handleOnchangePrice={handleOnchangePrice} 
        categoryRef={categoryRef} 
        priceOrderRef={priceOrderRef}
      />
      {!shadowProducts || shadowProducts.length === 0 ? (
        <h2>Sorry, no products available at this time.</h2>
      ) : (
        <ul className={style['product-list']}>
          {shadowProducts.map((productItem) => (
            <Link href={`products/${productItem.id}`} className="nav-link" key={productItem.id}>
              <ProductCard product={productItem} />
            </Link>
          ))}
        </ul>
      )}
    </PageLayout>
  );
}

import { IProductItem } from "@/app/products/types";
import style from './ProductCard.module.css';
import Image from 'next/image'

const ProductCard = ({ product }: { product: IProductItem }) => {
    return (
        <div className={style['product-list-item']} key={`${product.id}-${product.title}`}>
            <h3>{`${product?.brand} - ${product?.title}`}</h3>
            <Image src={product?.thumbnail} width={100} height={100} alt={`${product.brand}-${product.title}`}/>
            <h4>{product.price}</h4>
        </div>
    )
}

export default ProductCard;
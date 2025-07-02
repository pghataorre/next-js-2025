'useClient';


import PageLayout from "@/Components/PageLayout/PageLayout";
import { IProductItem, IReview } from "../types";
import style from './Product.module.css';
import NavButton from "../../../Components/NavButton/NavButton";
import Image from "next/image";
import config from "@/config";

interface IProductParams {
  params: {
    prodId: string;
  }
}

const getProducts = async (id: string) => {
  try {
      const res = await fetch(`${config.apiUrl}/products/${id}`);
      const productDetail :IProductItem = await res.json();

      return productDetail;
  } catch (error) {
    console.log('error ------------------------', error);
    return undefined
  }
}

export default async function Product({params}: IProductParams) {
  let showError: boolean= false;
  let productItem: IProductItem | undefined = undefined;
  const { prodId } = params;

  if(!Number(prodId)) {
    showError = true;
  } else {
    productItem = await getProducts(prodId);

  }

  const calculateAverage = (reviews: IReview[]): string => {
    if (!reviews) return '';
 
    const numberOfReviews = reviews?.length;

    if (numberOfReviews > 0) {
      const reviewsTotal = reviews.reduce((acc, currentValue) => {
        return acc += currentValue?.rating;
      },0);

      const avertage = reviewsTotal / numberOfReviews
      return avertage.toFixed(2);

    } else {
      return 'undefined';
    }
  }


  const convertDate = (dateStamp: string): string => {
    if (!dateStamp) return '';

    const dateObject = new Date(dateStamp);
    
    const options = {
      year: "numeric" as const,
      month: "short" as const,
      day: "2-digit" as const
    }

    return dateObject.toLocaleDateString('en-GB', options);
  }

  const averageViews = !productItem ? '' : calculateAverage(productItem.reviews);

  return (
    <PageLayout>
      {
        !showError ? (
          <>
            <h1>{`${productItem?.title || prodId}`}</h1>

            <ul className={style['product-details']}>
              <li>
                <h3 className={style['product-detail-sub-title']}>DESCRIPTION:</h3>
                {productItem?.description}
              </li>
              <li>
                <h3 className="product-detail-sub-title">BRAND: {productItem?.brand}</h3>
              </li>
              <li className={style['product-images']}>
                {productItem?.images?.map((image) => (
                  <div key={Date.now()}>
                    <Image src={image} alt={productItem?.title || 'Product Item'} width={200} height={200} />
                  </div>
                 
                ))}
              </li>
            </ul>
            <h2>Reviews</h2>
            <ul className={style['review-list']}>
              {productItem?.reviews?.map((review) => (
                <li key={Date.now()}>
                  <div className="product-detail-sub-title">
                    <h3>Rating: {review?.rating}</h3> 
                  </div>
                  <div className="product-detail-sub-title">
                    <span>Comment:</span> {review?.comment}
                  </div>
                  <div className="product-detail-sub-title">
                    <span >Date:</span> {review?.reviewerName}
                  </div>
                  <div className="product-detail-sub-title">
                    <span >Email:</span> {review?.reviewerEmail}
                  </div>
                  <div className="product-detail-sub-title">
                    <span >Date:</span> {convertDate(review?.date)}
                  </div>
                </li>
              ))}
            </ul>
            <h2>
              Average Rating: {averageViews}
            </h2>
          </>
        ) : (
          <>
            <h1>THERE HAS BEEN AN ERROR PLEASE GO BACK AND TRY AGAIN</h1>
          </>
        )
      }
      <div className={style['nav-container']}>
        <NavButton buttonTitle="<< Go Back" pageUrl="/products"/>
      </div>
    </PageLayout>
  );
}

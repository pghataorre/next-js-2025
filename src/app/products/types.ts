export interface IProduct {
    products: IProductItem[]
}

export interface IProductItem {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number
    rating: number
    stock: number,
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    },
    warrantyInformation: number;
    shippingInformation: number;
    availabilityStatus: number;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number,
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    },
    images: string[],
    thumbnail: string;
}

export interface IReview  {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

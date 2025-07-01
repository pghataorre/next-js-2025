import { IProductItem } from "./types";

const filteredProducts = (category: string | undefined, items: IProductItem[] | undefined) => {
    if (!category || !items) return [];

    const filteredCollection = items?.filter((item) => {
      return item.category === category
    })

    return filteredCollection;
}

export default filteredProducts;
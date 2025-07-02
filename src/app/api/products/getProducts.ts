import config from "@/config";

const getProducts = async (prodId?: string) => {
    const url = `${config.productApi}${!prodId ? '' : `/${prodId}` }`;
    const res = await fetch(url);
    const result = await res.json();

    return result;
}

export default getProducts;

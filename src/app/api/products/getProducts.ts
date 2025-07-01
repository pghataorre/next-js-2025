const getProducts = async (prodId?: string) => {
    const url = `${process.env.PRODUCT_URL}${!prodId ? '' : `/${prodId}` }`;
    const res = await fetch(url);
    const result = await res.json();

    return result;
}

export default getProducts;
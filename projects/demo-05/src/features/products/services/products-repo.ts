import type { Product } from '../entities/products';
import PRODUCTS from '../data/products.json';

const getProducts = () => {
    const products: Product[] = PRODUCTS
    return products;
}

const getProductById = (id: string) => {
    const products: Product[] = PRODUCTS
    return products.find(product => product.id === id);
}

export const productsRepo = {
    getProducts,
    getProductById
}
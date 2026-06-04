import type { Product, ProductCreateDTO, ProductUpdateDTO } from '../entities/products';

const BASE_URL = 'http://localhost:8000/api/';
const API_URL = `${BASE_URL}vehicles/`;


const getProducts = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const products: Product[] = await response.json();
    return products;
}

const getProductById = async (id: string) => {
    const response = await fetch(`${API_URL}${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    const product: Product = await response.json();
    return product;
}

const createProduct = async (product: ProductCreateDTO) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to create product');
    }
    const newProduct: Product = await response.json();
    return newProduct;
}

const updateProduct = async (id: string, product: ProductCreateDTO) => {
    const response = await fetch(`${API_URL}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    const updatedProduct: Product = await response.json();
    return updatedProduct;
}

const partialUpdateProduct = async (id: string, product: ProductUpdateDTO) => {
    const response = await fetch(`${API_URL}${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    }); 
    if (!response.ok) {
        throw new Error('Failed to partially update product');
    }
    const updatedProduct: Product = await response.json();
    return updatedProduct;
}   

const deleteProduct = async (id: string) => {
    const response = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
}   


export const productsRepo = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    partialUpdateProduct,
    deleteProduct,
}

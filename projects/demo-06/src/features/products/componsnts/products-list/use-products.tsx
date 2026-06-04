import type { Product, ProductCreateDTO } from '@features/products/entities/products';
import { productsRepo } from '@features/products/services/products-repo';
import { useEffect, useState } from 'react';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const products = productsRepo.getProducts();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProducts(products);
    }, []);

    const editProduct = (product: Product) => {
        console.log(`Producto con id ${product.id} preparado para edición`);
        // Open ProductForm with product data for editing
        setProducts((prevProducts) =>
            prevProducts.map((p) => (p.id === product.id ? product : p)),
        );
    };

    const addProduct = (product: ProductCreateDTO) => {
        const newProduct: Product = {
            id: crypto.randomUUID().slice(0, 4),
            ...product,
        };
        setProducts([newProduct, ...products]);
    };

    const deleteProduct = (id: string) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    return {
        products,
        editProduct,
        addProduct,
        deleteProduct,
    }
};

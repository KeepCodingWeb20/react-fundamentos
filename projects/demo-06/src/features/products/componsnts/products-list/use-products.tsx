import type {
    Product,
    ProductCreateDTO,
} from '@features/products/entities/products';
import { productsRepo } from '@features/products/services/products-repo';
import { useEffect, useState } from 'react';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const products = await productsRepo.getProducts();
                setProducts(products);
            } catch (error) {
                setError('Error loading products');
                console.error('Error loading products:', error);
            }
        };

        load();
    }, []);

    const editProduct = async (product: Product) => {
        // Asincrona -> API
        try {
            const updateProduct = await productsRepo.updateProduct(
                product.id,
                product,
            );

            // Sincrona -> estado local
            setProducts((prevProducts) =>
                prevProducts.map((p) =>
                    p.id === product.id ? updateProduct : p,
                ),
            );
        } catch (error) {
            setError('Error updating product');
            console.error('Error updating product:', error);
        }
    };

    const addProduct = async (product: ProductCreateDTO) => {
        // Asincrona -> API
        try {
            const newProduct: Product =
                await productsRepo.createProduct(product);
            // Sincrona -> estado local
            setProducts([newProduct, ...products]);
        } catch (error) {
            setError('Error creating product');
            console.error('Error creating product:', error);
        }
    };

    const deleteProduct = async (id: string) => {
        // Asincrona -> API
        try {
            await productsRepo.deleteProduct(id);
            // Sincrona -> estado local
            const updatedProducts = products.filter(
                (product) => product.id !== id,
            );
            setProducts(updatedProducts);
        } catch (error) {
            setError('Error deleting product');
            console.error('Error deleting product:', error);
        }
    };

    return {
        products,
        error,
        editProduct,
        addProduct,
        deleteProduct,
    };
};

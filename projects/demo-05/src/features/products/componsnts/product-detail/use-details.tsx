import type { Product } from "@features/products/entities/products";
import { productsRepo } from "@features/products/services/products-repo";
import { useState, useEffect } from "react";


type UseDetailType = {
    product: Product | null;
};
export const useDetails = (id: Product["id"]): UseDetailType => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const item = await productsRepo.getProductById(id);
                setProduct(item);
                console.log(item);
            } catch (error) {
                console.log((error as Error).message)
            }
        };

        load();
    }, [id]);

    return { product };
};

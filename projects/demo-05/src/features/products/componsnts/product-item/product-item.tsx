import type { Product } from '@features/products/entities/products';
import React from 'react';
import './product-item.css';

interface Props {
    product: Product
    onDelete: (id: string) => void
}


export const ProductItem: React.FC<Props> = (
    { product, onDelete }) => {



const handleDelete =() => {    
    console.log(`Producto con id ${product.id} eliminado`);
    onDelete(product.id);
}


  return (
    <li className="product-item">
      <h3>{product.name}</h3>
      <p>{product.vehicleClass}</p>
      <button onClick={handleDelete}>Borrar</button>
    </li>
  );
};
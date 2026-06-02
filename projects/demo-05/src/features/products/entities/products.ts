export type Product = {
  id: string;
  name: string;
  model: string;
  vehicleClass: string;
  manufacturer: string;
  length: number;
  costs: number;
  crew: number;
  passengers: number;
  maxSpeed: number;
  cargoCapacity: number;
  consumables: string;
};

export type ProductCreateDTO = Omit<Product, 'id'>;

export type ProductUpdateDTO = Partial<ProductCreateDTO>;
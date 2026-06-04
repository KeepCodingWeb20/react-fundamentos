# Demo 4

Inicialmente clonamos demo4

## Actualización en casa

- Completamos los campos del formulario

### Funcionalidad de edición

- Modificamos el formulario para que permita add y Edit
  - Props opcionales: `editedProduct`, `onAdd`, `onEdit`
  - handleSubmit: si `editedProduct` existe, llama a `onEdit`, sino a `onAdd`
  - handleChange: actualiza el estado del formulario teniendo en cuenta los valores numéricos
  - en el elemento jsx también hay algunos elementos condicionales para mostrar el título correcto y el botón de submit correcto

- Modificamos product-item
  - Mostramos más campos
  - Añadimos el botón edit 
  - Añadimos un dialog que incluirá el formulario en modo edición
  - handleStartEdit: abre el dialog
  - el formulario recibirá `handleEdit`: cierra el dialog y llama a `onEdit`

- Modificamos product-item
  - Añadimos un botón de Details que redirige a `/product/:id`

- Modificamos products-list
  - Añadimos el método `editProduct` para modificar el array del estado con el producto editado
  - Pasamos `editProduct` a cada `ProductItem` como `onEdit`

### Funcionalidad de detalles

- Creamos un nuevo componente `ProductDetails`
  - recibe in id
  - muestra los datos del producto en un grid
  - Tiene un botón ""Back"" que redirige a la página de productos usando `navigate`
    Debería ser un Link; se usa para mostrar el uso de `navigate` en un evento
- Añadimos un hook `useDetails` para obtener los datos del producto
  - recibe un id
  - crea un estado para el producto
  - usa `useEffect` para llamar a `getProductsById`, obtener los datos completos del producto a través del repositorio y guardarlos en el estado

- Modificamos products-page para que opcionalmente renderice `ProductDetails` si la ruta es `/product/:id`
  - Usamos `useParams` para obtener el id de la ruta
  - Si el id existe, renderizamos `ProductDetails` con ese id, sino renderizamos `ProductsList`

- Modificamos el router añadiendo una ruta di para los detalles: `/product/:id`
  
### Layers: customHooks y repositories

- Creamos un custom hook `useProducts` para manejar la lógica de productos
  - Traemos del componente el estado para los productos
  - Traemos de componente el `useEffect` para llamar a `getProducts` del repositorio y guardar los productos en el estado
  - Traemos del componente los métodos `addProduct`, `editProduct` y `deleteProduct` para modificar el estado de productos
  - Devuelve el estado de productos y los métodos para modificarlo

- En el caso de `useDetails`, ya hemos aplicado directasmente este patrón

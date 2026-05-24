# Práctica de fundamentos de React

- [Práctica de fundamentos de React](#práctica-de-fundamentos-de-react)
  - [Backend proporcionado](#backend-proporcionado)
  - [Entidades](#entidades)
  - [Frontend](#frontend)
    - [Consideraciones iniciales](#consideraciones-iniciales)
    - [Rutas y componentes principales](#rutas-y-componentes-principales)
    - [Funcionalidad de cada página-componente](#funcionalidad-de-cada-página-componente)
      - [LoginPage](#loginpage)
      - [ProductsPage](#productspage)
      - [ProductPage](#productpage)
      - [NewProductPage](#newproductpage)

Vamos a crear una aplicación de tipo dashboard que será la interfaz gráfica desde la que podremos gestionar el API de productos.

Su objetivo será implementar un CRUD sobre los productos: creación, lectura, actualización y borrado de productos.

## Backend proporcionado

Usaremos todos el siguiente proyecto como backend.

<https://github.com/alce65/sparrest.js>

Una vez en marcha, tendremos nuestro backend corriendo en el puerto 8000 (configurable via archivo .env). Con postman o cualquier herramienta similar (Insomnia, etc) podréis hacer peticiones HTTP a este backend, probar los diferentes endpoints y ver cómo pasar los datos en las peticiones.

En el backend tendremos disponibles los siguientes endpoints:

- **/api/auth/register**

  - POST: Nos permite crear usuarios.

- **/api/auth/me**

  - GET: Nos devuelve la información del usuario autenticado

- **/api/auth/login**
  - POST: Devuelve un token de acceso cuando le pasamos un name y
    password de un usuario correctos.

El resto de los enpois pueden usar cualquier nombre, creando la correspondiente entidad en el archivo db.json. En este caso, usaremos la entidad products como ejemplo, para gestionar un CRUD de productos

- **/api/products**

  - GET: Devuelve un listado de productos. No hay posibilidad de aplicar filtros en la query que enviemos en la URL.
  - POST: Crea un producto.

- **/api/products/:id**

  - GET: Devuelve un único producto por Id.
  - DELETE: Borra un producto por Id.

- **/upload**

  - POST: Permite subir una foto asociada a un producto.

    Las fotos subidas al backend son almacenadas en el directorio /public y servidas
    por el backend cómo contenido estático; el endpoint devuelve la ruta pública de cada foto, que puede ser
    almacenada en cualquiera de los productos de la "base de datos".

**NOTA IMPORTANTE**: Todos los endpoints bajo /api requieren que se envíe el token proporcionado en el endpoint de login. Se ha de enviar en la cabecera de la petición de la siguiente forma:

Header['Authorization'] = `Bearer ${token}`

Los datos del backend son persistidos en un fichero json (db.json) sin que sea necesario crear bases de datos.

Puedes crear todos los productos que quieras, que supondrán un nuevo objeto en el fichero json, con un array de productos. Apagar y reiniciar el servidor no borrará los datos creados.

Por ejemplo para utilizar un conjunto de etiquetas (tags) en los productos, puedes inicializar el fichero db.json con el siguiente contenido:

```json
{
  "products": [],
  "tags": ["motor", "work", "lifestyle", "mobile", "motorcycle"]
}
```

Tendrías así un endpoint para obtener el listado de tags disponibles:

- **/api/tags**
  - GET: Devuelve el listado de tags disponibles.

Como tenemos persistencia en json, apagar y reiniciar el servidor no borrará los datos creados.

## Entidades

Al utilizar un fichero json (db.json) como "base de datos", no es necesario crear las entidades en el backend, como sucedería en un sistema con base de datos no relacional como MongoDB, en su forma original, sin añadir capas adicionales.

Esto significa que tu aplicación puede utilizar cualquier entidad que desees, simplemente creando los objetos correspondientes en el fichero db.json. En lugar de **productos**, puedes crear algo mas especifico, coincidiendo con tus aficiones, siempre que tenga las siguientes propiedades mínimas:

- `name`
- `price` (u otro campo numérico)
- `tags`
- `image`
- `isOnSale` (booleano que indica si es una oferta, o cualquier otro campo booleano)
- `description` (u otro campo de texto algo extenso)
- los campos que consideres necesarios para tu entidad.

El backend

- le asigna automáticamente un `id` único numérico a cada entidad creada
- añade un campo timestamp con la fecha de creación del objeto
- añade un campo `userId` con el id del usuario que ha creado el objeto

## Frontend

### Consideraciones iniciales

La aplicación frontend será una **SPA** (Single Page Application) desarrollada con **React** como librería principal y **TypeScript** (super set de JavaScript) como lenguaje de programación.

**Herramientas**: La aplicación se creará con **vite**, que nos proporciona una inicialización del proyecto incluyendo configuración para React y TypeScript, junto con **ESLint** para el formateo y calidad del código. Utilizaremos además **Prettier** como formateador de código, que suele estar incluido entre las extensiones de VSC.

**Librerías**: Se deben usar el mínimo de librerías posibles, idealmente solo React Router.En ningún caso se deben usar librerías para el manejo de formularios (React Hook Form, o Formik), porque en estos momentos es imprescindible que comprendáis como funcionan las cosas en React.

**Estilos**: No es relevante el impacto visual de la aplicación. Solo cuenta que funcione y que las cosas esté colocadas correctamente en la pantalla. Esto no impide que seáis creativos con el diseño, aplicando lo aprendido en módulos anteriores, pero no necesario que dediquéis mucho tiempo a ello.

- Podéis usar la técnica de estilado que más os guste, CSS puro, TailwindCSS, atributo style, SCSS, CSS modules, CSS in JS como Styled Components (u otros) o una mezcla de cosas.
- Podéis usar alguna librería de componentes **puramente visuales** si creéis que os puede quitar trabajo a la hora de dar un aspecto más uniforme a toda la aplicación (material UI, Chakra, Ant Design...). Si usas componentes de este tipo, asegúrate de que no implementen ninguna funcionalidad extra (formularios, validaciones, manejo de estado, etc).

### Rutas y componentes principales

En la aplicación se implementarán una serie de **rutas** (enrutado en el navegador) divididas en dos grupos

- **Públicas**
- **Protegidas**

En cada una de la rutas se renderizará un componente principal tal como se explica a continuación.

- **Públicas**: Accesibles para cualquier usuario.

  - `/login`: LoginPage

- **Protegidas**: Accesibles SOLO para usuarios autenticados.
  Cualquier acceso de un usuario no autenticado a cualquiera de estas rutas redireccionará a `/login`.

  - `/`: redirecciona a /products
  - `/products`: ProductsPage
  - `/products/:id`: ProductPage
  - `/products/new`: NewAProductPage
  - Para cualquier otra url que no coincida se creará un componente `NotFoundPage` que informará al usuario que la página solicitada no existe (la típica 404).

### Funcionalidad de cada página-componente

#### LoginPage

- Formulario con inputs para recoger email y password del usuario.
- Checkbox “Recordar contraseña” mediante el que indicaremos si guardamos en el localStorage el hecho de que hay un usuario logado, evitando tener que introducir credenciales en cada visita al sitio (pensad la información mínima que os interesa guardar).

#### ProductsPage

- Listado de productos. Cada producto presentará
  - `name`
  - `price`
  - `tags`
  - `isOnSale` (indicación visual de si es una oferta)
  - No es necesario mostrar la foto en este listado.
  - cualquier otro dato que consideréis relevante.
- Manejará el estado cuando no haya ningún producto de mostrar, con un enlace a la página de creación de productos.
- Cada producto del listado tendrá un enlace al detalle del producto (ruta /products/:id).
- Zona de **filtros**: Formulario con distintos inputs, donde podremos introducir los filtros que queremos aplicar sobre el listado.

La idea es que a medida que vayamos eligiendo filtros se reduzca el número de productos mostrados, es decir, los productos filtrados mostrados deben cumplir todos los filtros elegidos.

Se puede implementar de manera que a cada interacción del usuario se vaya filtrando el resultado o bien al hacer click sobre un botón para aplicar el filtrado.

Habrá que implementar al menos 2 de estos filtros:

- **Filtro por nombre** (input tipo texto)
- **Filtro ofertas** (input tipo radio o select con ‘venta’, ‘compra’, ‘todos’)
- **Filtro por precio** (input donde podremos seleccionar el rango de precios por el que queremos filtrar). Un slider o simplemente un par de inputs de tipo number para el precio mínimo y máximo.
- **Filtro por tags** (input donde podremos seleccionar uno o varios tags de los disponibles). Puede ser un input tipo select múltiple o varios checkboxes que permitan elegir varias opciones a la vez. Al aplicar el filtro se mostrarán los productos que contengan todos los tags elegidos.

Como nuestro API no admite filtros, no podemos recoger los filtros a aplicar en el front y enviarlos a la petición al API para traer los productos ya filtrados desde el backend (una petición cada vez que se apliquen los filtros). Esta es la forma más habitual de trabajar cuando el backend soporta filtros.

Por tanto debemos manejar el filtrado de productos de otra forma, que nos permitirá practicar más con el estado de React: traeremos los productos sin filtrar desde el backend (una única petición), y aplicaremos el filtro en el frontend con lo que se haya recogido en el formulario de filtros.

#### ProductPage

- Detalle del producto cuyo id es recogido de la URL. Mostrará la `imagen` del producto o un placeholder en su lugar si no existe foto.
- Incluye algunos campos que no estén en la lista, como `description`.
- Si el producto no existe debería redirigirnos al NotFoundPage.
- Botón para poder borrar el producto. Antes de borrar mostrar una confirmación al usuario (algo más elaborado que un window.confirm, jugando con el estado de React). Tras el borrado debería redireccionar al listado de productos.

#### NewProductPage

- Formulario con TODOS los inputs necesarios para crear un nuevo producto:
- Nombre
- Es oferta (checkbox)
- Tags disponibles.
- Precio
- Foto
- Cualquier otro campo que hayas considerado como parte de tu entidad.

- Todos los campos, excepto la foto serán requeridos para crear un producto. Manejar estas validaciones con React, por ejemplo deshabilitando el submit hasta pasar todas las validaciones.

- Tras la creación del producto debería redireccionar a la página del producto.
- Además de estos componentes necesitaremos un componente visible cuando el usuario esté logeado desde el que podamos hacer logout (un botón por ejemplo, a poder ser possible con confirmación, pensando en rehusar lo que
  hayamos hecho en la confirmación de borrado).

- Las rutas de /products y /products/new deben de estar accesibles fácilmente mediante enlaces de navegación (Link o NavLink).

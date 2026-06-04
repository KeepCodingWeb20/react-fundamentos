# Fundamentos de React

- Bootcamp de Desarrollo Web 20. KeepCoding
- 25/05 - 04/06 (6 sesiones)
- 19:00 - 23:00h (4 horas)
- repositorio del módulo: <https://github.com/KeepCodingWeb20/react-fundamentos>

## Formador: Alejandro Cerezo Lasne

- email: <alce65@hotmail.es>
- linkedIn: <https://www.linkedin.com/in/alejandrocerezo>
- github: <https://github.com/alce65>

**Neurobiólogo**, **Doctor en Biología** y hace ya muchos años **programador** como parte de su proyecto de investigación sobre las bases biológicas de la conducta. Vinculado desde siempre a la enseñanza, hasta convertirla en su actividad principal, especialmente en el ámbito del desarrollo Web.

**CONSULTOR** / **DESARROLLADOR** y **FORMADOR TÉCNICO** en el área de PROGRAMACIÓN y DESARROLLO DE APLICACIONES FULLSTACK, cuenta con + de 15 años de experiencia tanto en el **análisis y programación** de aplicaciones web (Ciclo de vida 360: consultoría, creación de aplicaciones desde cero, actualizaciones, implementación de nuevas funcionalidades, mantenimiento, maquetación, diseño, etc), como en la **formación técnica** de esta área.

Especialista FULLSTACK, imparte formación en tecnologías tanto del **BACKEND** (Node, Express, Nest) y Bases de Datos (SQL y NoSQL Mongo); como del **FRONTEND** en diversos lenguajes, frameworks y librerías (Angular desde v. JS a 21x), React, Redux, Next, Vue JS, JS, Typescript, Web Components, HTML, CSS, SASS) y en **herramientas** de TESTING (Jest, Jasmine, Vitest, Cypress, Playwright) y CI/CD (Husky, Sonar) y Git/GitHub, entre otras tecnologías.

Entrega **formación** en diversos formatos (planes de formación programada in company, formación ad hoc para proyectos IT, certificados de profesionalidad, bootcamp y otras formación de larga duración...), tanto en modalidad on-line como en modalidad presencial, capacitando a profesionales técnicos de entidades del sector público y del privado (fabricantes e integradores tecnológicos, entidades financieras, aseguradoras, telecomunicaciones,...)

## Objetivo del módulo

Aprender qué es y cómo funciona React, una librería creada por Facebook para la creación de interfaces de usuario

## Temario del módulo

### Introducción y entorno de desarrollo

- Introducción ¿Qué es React?
  - Librería de JavaScript
  - Principios básicos
  - Elementos del DOM. React en un Script
  - Componentes funcionales y JSX
- Entorno de desarrollo con Vite
  - Construcción de un proyecto real. Vite
  - Requisitos previos
  - Instalación de React y TypeScript con Vite
- Estructura del proyecto creado con Vite
  - Single Page Application (SPA)
  - Estructura de carpetas y ficheros
  - Comandos (scripts) disponibles

### Elementos básicos de React: Componentes y Hooks

- Componentes
  - Componentes y funciones
  - Construcción de componentes: Componentización
  - Componentes y props. Children
  - Estilos en los componentes
  - Componentización y composición de componentes
- Componentes dinámicos. Eventos
  - Condiciones en los componentes
  - Iteraciones: renderizado de listas
  - Manejo de eventos
- Hooks
  - Reglas de los Hooks
  - Hooks y estado: useState
  - Efectos secundarios: useEffect
  - Referencias persistentes: useRef, useMemo, useCallback
- Formularios
  - Tipos de formularios en React
  - Formularios controlados con un campo
  - Formularios controlados con múltiples campos
  - Validación de formularios
  - Formularios no controlados. FormData

### Rutas con React: Single Page Applications (SPA)

- Rutas nativas en React
  - Componente Router: Presentación de las Vistas (páginas)
  - Componente Link: Navegación entre páginas
  - Uso del componente Link
  - Escuchar cambios en la URL
  - Diferencias con librerías de routing
- Custom Hooks
  - Hook useRouter
- La librería React Router
  - Modos de React Router
  - Instalación
  - Páginas
  - React Router declarativo
  - React Router modo data (Programático)
- Patrón contenedor/presentador. Rutas dinámicas
  - Página de Productos y su ruta en el array de rutas
  - Entidad, servicio y datos
  - CRUD de productos: ProductsList, ProductCard y ProductForm
  - Rutas dinámicas
- Patrones de abstracción de datos
  - Patrón layer

### Asincronía y datos externos (http)

- Consumo de APIs con Fetch. CRUD
  - API Rest
  - Servicio fetchProducts
- Uso de las funciones asíncronas en un componente React
  - Carga de datos. Estados, efectos y asincronía: useCallback y useMemo
  - Funciones asíncronas en manejadores de eventos
- Autenticación
- Contexto global: Context API

## Desarrollo del módulo

### Día 1 (Lunes 25/05)

- Introducción ¿Qué es React?
  - Librería de JavaScript
  - Principios básicos
  - Elementos del DOM. React en un Script
  - Componentes funcionales y JSX
- Entorno de desarrollo con Vite
  - Construcción de un proyecto real. Vite
  - Requisitos previos
  - Instalación de React y TypeScript con Vite

[Descanso] - 21:05 a 21:25h


- Estructura del proyecto creado con Vite
  - Client Side Rendering
  - Single Page Application (SPA)
  - Estructura de carpetas y ficheros
    - index.html -> main.tsx -> App
  - Comandos (scripts) disponibles con Vite
- Componentes
  - Componentes y funciones
  - Construcción de componentes: Componentización
    - Socials, Docs, Hero y Counter a partir de la App Inicial 
  - Componentes y props
  - Iteración en el tsx: renderizado de listas
  - Condiciones en los componentes

### Día 2 (Martes 26/05)

- Construcción de componentes: Componentización
  - Componentes y props. Children
  - Componentización y composición de componentes
  - Estilos en los componentes
    - Module CSS

[Descanso] - 21:00 a 21:20h

- Hooks
  - Reglas de los Hooks
  - Hooks y estado: useState

- Componentes dinámicos. Eventos
    - Counter: evento click
    - Manejo de eventos. Tipado de eventos
    - Counter +/-

- Comunicación entre componentes: props
  - Comunicación descendente: props
  - Comunicación ascendente: props funcionales
  - Counter-List y Counter

- Challenge: crear la estructura de componentes descrita en la documentación:
  - App
    - Layout 
      - Header
        - Menu
      - [children] Home_Page
      - Footer

### Día 3 (Jueves 28/05)

- Review del challenge
  - Componentes y props. Children
  - Componentización y composición de componentes
  - Layouts
  - Props drilling
  - Componentes de Design System 

- Estados computados
- Efectos secundarios: useEffect

[descanso] - 21:05 a 21:25h

- Efectos secundarios: useEffect
  - Timers. Componente Timer
    - Botón de reset
    - Botones de Start y Stop: estado boolean y useEffect 

- Referencias persistentes: useRef
  - persistencia de variables. Componente RenderCount
  - elementos del DOM. Componente Focus
  - (mencionados useMemo, useCallback) - React compiler y optimización de renderizados

### Día 4 (Lunes 01/06)

- Formularios
  - Tipos de formularios en React
  - Formularios controlados con un campo
  - Formularios controlados con múltiples campos
  - Validación de formularios con HTMLs
  - Formularios no controlados. FormData

[Descanso] - 21:05 a 21:25h

- Nuevo proyecto a partir del demo-02
  - features (páginas): Home, Dashboard, Users, About
- Rutas nativas en React
  - Componente Router: Presentación de las Vistas (páginas)
  - Componente Link: Navegación entre páginas
  - Uso del componente Link
  - Escuchar cambios en la URL
  - Diferencias con librerías de routing

### Día 5 (Martes 02/06)

- Custom Hooks: Hook useRouter
- La librería React Router
  - Instalación
  - ReactRouter modo declarativo
  - Lazy Loading
  - React Router modo data (Programático) mencionado

- Patrón contenedor/presentador. Rutas dinámicas
  - Página de Productos y su ruta en el array de rutas
  - Entidad, servicio y datos

[Descanso] - 21:00 a 21:20h

- Patrón contenedor/presentador (continuación)
  - servicio
    - getAllAsync / getByIdAsync
  - CRUD de productos:
    - ProductsList
    - ProductItem (Card)
    - ProductForm
  
- CRUD de productos:
  - ProductForm: Delete
  - ProductForm: Add

### Día 6 (Jueves 04/06)

- Explicación del código desarrollado fuera de clase

- CRUD de productos:
  - ProductForm: Edit
- Rutas dinámicas
  - Página de detalle 
- Custom Hooks: lógica del estado

- APIs
  - Backend real can sparest
  - Carga de datos: del mock asinncrono a la api real
    - Capa repositorio -> APIS
    - Adaptación de los métodos de lectura en el repo
    - Métodos CUD en el repo

[Descanso] - 21:05 a 21:25h

- Uso del repo en lo customHooks
  - Lectura de dator en los useEffect
  - Incorporación del CUD en el hook: 
    - estrategia optimista
    - estrategia conservadora


<!-- 

  - Pruebas de los componentes

- Autenticación
  - Configuración y funcionamiento en sparest
  - Protección de rutas
  - Cabeceras de Autenticación
  - Lógica en useAuth
  - Repaso de los componentes Register, Login, Logout. User -->

# Challenge: 

Crear la estructura de componentes descrita en la documentación:
  - App
    - Layout 
      - Header
        - Menu
      - [children] Home_Page
      - Footer


## Elementos iniciales

- Creación del proyecto con Vite

```shell
cd projects
npm create vite@latest demo-02
```

Aprovechamos las características del Monorepo para compartir dependencias entre proyectos. 


- Uso de Aliases

Se definen a nivel TS de proyecto en el tsconfig.json:

```json tsconfig.app.json
{
  "compilerOptions": {
    "paths": {
      "@assets/*": ["./src/assets/*"],
      "@core/*": ["./src/core/*"],
      "@features/*": ["./src/features/*"]
    }
  }
}
```

A nivel de Vite en el vite.config.ts:

```ts
export default defineConfig({
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    resolve: {
        alias: {
            '@assets': '/src/assets',
            '@core': '/src/core',
            '@features': '/src/features',
        },
    },
});
```

Una alternativa es usar el plugin [vite-tsconfig-paths](https://github.com/vitejs/vite-plugin-tsconfig-paths), que lee los paths definidos en el tsconfig.json y los aplica a Vite:

## Componentes

- App: reubicado en la carpeta core

- Header: a partir de la demo de Vite 7; uso de props
- Footer: a partir de la demo de Vite 7
- Logos: a partir de la demo de Vite 7 (separación de responsabilidades)
- Card: componente del Design System: uso de children y props para personalizar el contenido

- Menu: renderizado iterativo
- Header: uso de children para renderizar Logos y Menu dentro del header
- Layout: uso de children para renderizar el contenido principal entre el header y el footer

```plaintext
App
├── Layout
│    ├── Header
│    │    ├── Menu
│    │    └── Logos
│    ├── main
│    └── Footer
```

¿Props drilling?

App --> Layout --> Header
App --> Layout --> Menu


- Greetings: render condicional; uso de Card
- Button: componente del Design System: uso de props para personalizar el estilo y el comportamiento
- PanicButton: botón que al hacer click muestra un alert. Usa el componente Button

- Counter: inicialmente a partir de la demo de Vite 7

## Refactors

- readonly en props que no se modifican

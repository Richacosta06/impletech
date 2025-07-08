## Análisis Técnico del Proyecto Impletech

Este documento detalla las características técnicas, librerías y frameworks utilizados en el proyecto Impletech.

### Framework Principal

*   **Astro:** El proyecto está construido con Astro, un moderno generador de sitios estáticos que se destaca por su enfoque en el rendimiento y la arquitectura de "islas" para la carga de componentes interactivos.

### Estilos

*   **Tailwind CSS:** Se utiliza Tailwind CSS para el diseño y la estilización de la interfaz de usuario. La configuración de Tailwind se gestiona a través de Vite, como se especifica en `astro.config.mjs`.

### Lenguajes

*   **JavaScript/TypeScript:** El proyecto utiliza JavaScript moderno (ES Modules), como lo indica la configuración en `package.json`. La presencia de un archivo `tsconfig.json` sugiere el uso de TypeScript para el tipado estático del código.
*   **Astro Components:** Los componentes de la interfaz de usuario están escritos en el formato de componentes de Astro (`.astro`).

### Estructura del Proyecto

*   `src/pages`: Contiene las páginas del sitio.
*   `src/components`: Alberga los componentes reutilizables de Astro.
*   `src/layouts`: Define la estructura de las páginas.
*   `public`: Almacena los activos estáticos como imágenes y favicons.
*   `package.json`: Gestiona las dependencias y los scripts del proyecto.

### Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo.
*   `npm run build`: Compila el proyecto para producción.
*   `npm run preview`: Previsualiza el sitio compilado.

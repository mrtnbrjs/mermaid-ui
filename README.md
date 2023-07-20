# mermaid-ui

## Descripción

Este proyecto es una librería de componentes diseñada para trabajar de manera unificada componentes de react en diferentes aplicaciones. Está construido utilizando React, TypeScript y Chakra UI para ofrecer una experiencia de desarrollo moderna y elegante.

## Estructura de Carpetas (Atomic Design)

El proyecto sigue el patrón de diseño Atomic Design, organizando los componentes en diferentes capas para facilitar la reutilización y el mantenimiento.

```
src/
├── components/
| ├── atoms/ # Componentes básicos y reutilizables (Ejemplo: Button, Input)
| ├── molecules/ # Combinaciones de componentes atómicos (Ejemplo: Card, Modal)
| ├── organisms/ # Componentes complejos que combinan moléculas y/o átomos (Ejemplo: Navbar, Footer)
| ├── templates/ # Componentes estructurales de página (Ejemplo: PageLayout)
| └── pages/ # Páginas completas construidas con componentes de organismos, moléculas y/o átomos
└── ...
```

## Cómo Correr Storybook

Para visualizar y desarrollar los componentes, utilizamos Storybook. Siga los pasos a continuación para ejecutar Storybook:

1. Clona el repositorio en tu máquina local.
2. Asegúrate de tener Node.js y npm instalados.
3. Instala las dependencias del proyecto con el siguiente comando:

```bash
npm install
```

Ejecuta Storybook con el siguiente comando:

```bash
npm run storybook
```

Abre tu navegador y ve a http://localhost:6006 para ver todos los componentes y sus diferentes estados definidos en las historias de Storybook.

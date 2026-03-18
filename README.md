# Base Angular para CI/CD

Proyecto Angular 21 con una landing page simple, pensado como base de prueba para pipelines de CI/CD, empaquetado y despliegue.

## Objetivo

- Tener una aplicación pequeña y estable para validar instalaciones, build, formato, pruebas y despliegue.
- Mantener una estructura fácil de modificar para agregar nuevas secciones, componentes o automatizaciones.
- Evitar acoplarla a un proveedor de Git o CI específico.

## Requisitos

- Node.js 22 o superior.
- npm 11 o superior.

## Scripts disponibles

```bash
npm start
npm run build
npm run build:dev
npm test
npm run test:ci
npm run format:check
npm run format:write
npm run ci:check
```

## Flujo recomendado para CI

```bash
npm ci
npm run format:check
npm run test:ci
npm run build
```

`npm run ci:check` ejecuta ese flujo completo con un solo comando.

## Despliegue con Docker

El proyecto incluye un `Dockerfile` multi-stage y una configuración de `nginx` para servir la SPA.

```bash
docker build -t angular-cicd-base .
docker run --rm -p 8080:80 angular-cicd-base
```

Luego puedes abrir `http://localhost:8080`.

## Estructura útil para extender

- `src/app/app.ts`: datos base de la landing.
- `src/app/app.html`: estructura de la página.
- `src/app/app.scss`: estilos de la landing.
- `src/app/app.spec.ts`: pruebas unitarias mínimas.
- `Dockerfile`: build y entrega en contenedor.
- `nginx.conf`: soporte para rutas SPA.

## Ideas para seguir probando CI/CD

- Agregar un job de e2e con Playwright o Cypress.
- Publicar la imagen Docker en un registry.
- Añadir análisis estático o escaneo de dependencias.
- Desplegar `dist/` en un hosting estático o el contenedor en cualquier plataforma compatible.

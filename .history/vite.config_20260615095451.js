# Atlas — Otros Mundos

Atlas interactivo de los doce ecosistemas extintos del libro *Otros Mundos* de Thomas Halliday.
Scrollitelling con ilustraciones SVG interactivas, construido con Svelte + Vite.

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Build de producción

```bash
npm run build
```

El resultado queda en `dist/`. Puedes previsualizarlo con:

```bash
npm run preview
```

## Despliegue

### Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

O conecta el repositorio directamente en vercel.com — detecta Vite automáticamente, sin configuración adicional.

### GitHub Pages

1. Añade en `package.json` → `"homepage": "https://<usuario>.github.io/<repo>"`
2. Ejecuta:

```bash
npm run deploy:gh
```

### Netlify

Arrastra la carpeta `dist/` a netlify.com/drop, o configura el repo con:
- Build command: `npm run build`
- Publish directory: `dist`

## Estructura

```
src/
├── App.svelte          # Layout principal: portada, índice lateral, scroll
├── main.js             # Punto de entrada
└── chapters/
    ├── Inundacion.svelte   # Cap. I  — Mar de Paratethys (5,3 Ma)
    └── Bosque.svelte       # Cap. IX — Hainaut, Bélgica (307 Ma)
```

## Capítulos

| # | Nombre | Lugar | Edad |
|---|--------|-------|------|
| I | La inundación | Mar de Paratethys | 5,3 Ma |
| II | La sabana | Siwalik, Pakistán | 7 Ma |
| III | El ámbar | Báltico | 37 Ma |
| IV | La selva | Fayum, Egipto | 37 Ma |
| V | La noche | Ellesmere, Ártico | 53 Ma |
| VI | El interior | Mar Occidental Interior | 67 Ma |
| VII | El desierto | Gobi, Mongolia | 75 Ma |
| VIII | El arrecife | Tethys, Europa | 150 Ma |
| IX | El bosque | Hainaut, Bélgica | 307 Ma |
| X | El estuario | Old Red, Escocia | 407 Ma |
| XI | El océano | Báltico ordovícico | 450 Ma |
| XII | El albor | Ediacara, Australia | 555 Ma |

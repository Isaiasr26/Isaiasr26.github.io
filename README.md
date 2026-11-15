# Portafolio — Isaías Reyes

Sitio estático (HTML, CSS y JS) listo para GitHub Pages.

```
index.html     página principal
proyectos.html página con todos los proyectos, por área
projects.js    DATOS de los proyectos (se usan en ambas páginas)
style.css      diseño (estética tech/IA: circuitos, chip, stack en movimiento)
script.js      circuito, pantalla de carga, stack, pestañas, filtros y modal
assets/        foto (la misma de GitHub), capturas, favicon IR (svg y png)
propuestas/    bocetos de diseño (A, B, C, D) — no hace falta subirlos
cv/            (crear) aquí va el PDF del CV
```

## Publicar en GitHub Pages

1. Crea un repo llamado **`Isaiasr26.github.io`**. Así la dirección queda en `https://isaiasr26.github.io/`.
2. Sube estos archivos. `_version-anterior/` no se sube porque está en `.gitignore`.
3. En el repo ve a **Settings → Pages**, elige "Deploy from a branch", rama `main` y carpeta `/ (root)`.

> GitHub Pages gratis solo funciona con repos **públicos**. El repo solo tiene el portafolio, no el código de tus proyectos.

## Tareas comunes

- **Agregar o editar un proyecto:** todo está en `projects.js`. Con `featured: true` también aparece en el inicio; `area` decide en qué grupo sale dentro de `proyectos.html`.
- **Cuando un repo sea público:** pon su URL en `repo`. Aparece "Código" en lugar de "Código privado".
- **Demo en video:** guarda el video en `assets/` (mp4, idealmente menos de 10 MB) y pon la ruta en `video`. La ficha muestra el botón "Ver demo" y el video se reproduce en el detalle. Si la demo está en línea, usa `demo` con la URL.
- **Ficha técnica:** las filas extra de la tabla (Modelo, API, Pruebas…) van en `specs`.
- **"Ahora mismo":** está en `index.html`. Actualízalo cada uno o dos meses, junto con la fecha.
- **Botón "Descargar CV":** guarda el PDF como `cv/Isaias-Reyes-CV.pdf`. El botón aparece solo cuando el archivo existe.
- **Investigación:** en `index.html`, sección `publicaciones`, descomenta el bloque `paper`. La sección y su enlace en el menú aparecen solos.
- **Agregar una tecnología al stack:** edita la lista `STACK` al inicio de `script.js`. Los íconos salen de [Devicon](https://devicon.dev/). Si el ícono es negro, agrega su nombre en `INVERT`.
- **Pantalla de carga:** aparece solo la primera vez por sesión y nunca si el dispositivo pide reducir movimiento.

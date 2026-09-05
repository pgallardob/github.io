# Documentación del Proyecto - CV Patricio A. Gallardo B.

## Información General

- **Proyecto**: Curriculum Vitae web - Patricio Alejandro Gallardo Barría
- **Repositorio GitHub**: https://github.com/pgallardob/github.io
- **Sitio desplegado (GitHub Pages)**: https://pgallardob.github.io/github.io/
- **Rama principal**: `main`
- **Autor**: pgallardob (pgallardob@hotmail.com)

---

## Estructura del Proyecto

```
CVnuevo/
├── index.html              # Página principal con tarjetas de navegación
├── seccion0.html           # Datos personales y enlaces de contacto
├── seccion1.html           # Galería de certificaciones
├── seccion2.html           # Experiencia, conocimientos y proyectos
├── css/
│   ├── premium.css         # Hoja de estilos principal (diseño premium)
│   └── popup.css           # Estilos del popup de WhatsApp
│   # Eliminados: miestilo.css, miestilo0.css, miestilo1.css, miestilo2.css (ya no se usan)
├── js/
│   ├── script.js           # Botones volver/salir, galería fullscreen
│   └── popup.js            # Lógica del popup de WhatsApp
├── img/                    # Imágenes del proyecto
│   ├── patricio.png        # Foto de perfil
│   ├── html.jpg, css.jpg, SQL.jpg, JS.jpg, angular.jpg
│   ├── vsc.jpg, git.jpg, node.jpg, express.png
│   ├── boostrap.png, office.jpg
│   ├── 1.png a 8.jpeg      # Certificaciones
│   └── ejemploopentowork.jpg  # Imagen de referencia (excluida en .gitignore)
├── curriculum.pdf          # CV descargable
├── curriculum.docx         # CV editable
├── .gitignore              # Excluye img/ejemploopentowork.jpg
└── DOCUMENTACION_PROYECTO.md  # Este documento
```

---

## Stack Tecnológico

- **HTML5** - Estructura semántica
- **CSS3** - Diseño premium con variables CSS, gradientes y animaciones
- **Bootstrap 5.3.0** - Grid responsive y componentes
- **Bootstrap Icons 1.11.0** - Iconografía
- **Google Fonts** - Inter (cuerpo) y Poppins (títulos)
- **JavaScript** - Interactividad (popup, galería, navegación)
- **SVG con textPath** - Badge #OPEN_TO_WORK con texto curvado

---

## Diseño y Componentes

### Navbar Premium
- Barra de navegación oscura (`#1a3c34`) con texto dorado (`#c9a227`)
- Logo "Curriculum Vitae" con icono circular
- Enlaces: Inicio, Datos Personales, Certificaciones, Experiencia
- Responsive con toggler en móvil

### Hero Section
- Fondo con gradiente verde oscuro
- Nombre, título profesional y badge de rol
- Imagen circular de perfil con borde dorado
- Badge **#OPEN_TO_WORK** en verde (#2e7d32) con texto curvado siguiendo la forma de la imagen (SVG textPath, curva hacia arriba tipo sonrisa)

### Stats Bar
- Barra de estadísticas con 3 columnas:
  - **+8 Certificaciones**
  - **+5 Proyectos** (link clickeable a seccion2.html)
  - **+11 Herramientas**

### Section Cards (index.html)
- 3 tarjetas con iconos de color (rosa, púrpura, azul)
- Efecto hover con elevación y sombra
- Botones "Ver Más" con estilo premium

### Info Blocks (seccion0.html, seccion2.html)
- Bloques blancos con borde izquierdo dorado
- Altura uniforme con `h-100`
- Listas de datos con iconos

### Gallery Grid (seccion1.html)
- Grid responsive con `auto-fill minmax(220px, 1fr)`
- 8 certificaciones con efecto hover
- Click para vista fullscreen con overlay oscuro

### Tech Grid (seccion2.html)
- Iconos de tecnologías en flex-wrap centrado
- 11 herramientas: HTML, CSS, SQL, JavaScript, Angular, VS Code, Git, Node.js, Express, Bootstrap, Office
- Efecto hover con escala y elevación

### Project Cards (seccion2.html)
- 5 tarjetas de proyectos en grid de 3 columnas (`col-lg-4`)
- Altura uniforme con `h-100`
- Cada card tiene: icono, título, rol (Desarrollo Back/Front-end), descripción
- Efecto hover con elevación y borde dorado

### Social Bar
- Barra social con iconos circulares
- LinkedIn (azul), WhatsApp (verde), GitHub (oscuro)
- Efecto hover con cambio de color de fondo

### Footer Premium
- Fondo oscuro (`#1a3c34`)
- 3 columnas: perfil, enlaces rápidos, contacto
- Grid responsive (`footer-grid`)
- Email: pgallardob@hotmail.com
- Teléfono: +569 30748991
- Ubicación: Peñaflor, Santiago, Chile
- Línea inferior con copyright

### Popup de WhatsApp
- Modal con backdrop blur
- Foto de perfil con borde dorado
- Número de teléfono
- Animaciones fadeIn y slideUp

---

## Proyectos Documentados en seccion2.html

1. **Rifalovers.cl** - Desarrollo Back-end para www.rifalovers.cl
2. **Mi Condominio** - Front y Back-end (JS, TS, HTML, Bootstrap, Node.js, Express, Supabase, PostgreSQL)
3. **Mis Atrasos** - Front y Back-end (JS, TS, HTML, Bootstrap, Node.js, Express, SQL, MySQL)
4. **MAGIC ERP** - Back y Front-end (JS, TS, HTML, Twilight, Node.js, Express, Supabase, PostgreSQL). Producción local en Comercializadora Los Olivos
5. **Comercializadora Los Olivos** - Front y Back-end (JS, TS, Pico.css, HTML, Node.js). Base de datos desde MAGIC ERP (Supabase). Hosting administrable.cl. Disponible en www.comercializadoralosolivos.cl

---

## Historial de Cambios Realizados

### Sesión 1: Rediseño Premium y Badge #OPEN_TO_WORK

1. **Rediseño completo del CV** - Migración de estilos antiguos (`miestilo.css`, `miestilo0.css`, `miestilo1.css`) a un único `premium.css` unificado
2. **Navbar premium** - Reemplazo del header antiguo por navbar con navegación entre páginas
3. **Hero section** - Nueva sección hero con gradiente, nombre, rol e imagen circular
4. **Badge #OPEN_TO_WORK**:
   - Primera versión: span plano en navbar (estilo LinkedIn)
   - Segunda versión: movido al hero, color verde
   - Tercera versión: SVG con texto curvado siguiendo la imagen
   - Versión final: curva hacia arriba (sonrisa) con SVG textPath, borde blanco y relleno verde (#2e7d32)
5. **Eliminación de foto y nombre del navbar** - Quedan solo en el hero
6. **Footer premium** - 3 columnas con enlaces, contacto y copyright
7. **Stats bar** - Barra de estadísticas (certificaciones, proyectos, herramientas)

### Sesión 2: Actualización de Email y Proyectos

1. **Cambio de correo** - `patriciobackend@hotmail.com` → `pgallardob@hotmail.com` en:
   - seccion0.html (mailto + texto visible)
   - Footer de las 4 páginas (index, seccion0, seccion1, seccion2)
2. **Alineación de cards en seccion2.html** - Agregado `h-100` y `height: 100%` en CSS para igualar alturas
3. **Nuevas project-cards en seccion2.html** - 5 tarjetas con proyectos, tecnologías y links
4. **Estilos CSS para project-card** - Nuevas clases: `.project-card`, `.project-header`, `.project-role`, `.section-title`

### Sesión 3: Despliegue a GitHub

1. **Configuración de git** - Cambio de credenciales de Danilo Contreras a pgallardob
2. **Inicialización del repo** - `git init`, remote a `https://github.com/pgallardob/github.io.git`
3. **Primer push** - Commit con todos los cambios premium (`e01e776`)
4. **Restauración de archivos** - Después del checkout forzado, se reaplicaron todos los cambios premium a los 7 archivos (4 HTML, premium.css, popup.css, popup.js, script.js)

### Sesión 4: Corrección de Footer

1. **Bug del footer** - CSS tenía `.footer-top` pero el HTML usaba `.footer-grid`
2. **Corrección** - Renombrado `.footer-top` → `.footer-grid` en CSS (incluyendo media query)
3. **Reset de ul** - Agregado `padding: 0; margin: 0;` para `.footer-col ul`
4. **Push de corrección** - Commit `feba639`

### Sesión 5: Stats Bar Update

1. **+11 Herramientas** - Reemplazado "2026 / Año actual" por "+11 / Herramientas" (11 herramientas: HTML, CSS, SQL, JavaScript, Angular, VS Code, Git, Node.js, Express, Bootstrap, Office)
2. **Link en Proyectos** - "+5 Proyectos" ahora es un link clickeable que navega a `seccion2.html`
3. **Push final** - Commit `1f31d23`

### Sesión 6: Limpieza de CSS innecesarios

1. **Eliminación de CSS antiguos** - Borrados `miestilo.css`, `miestilo0.css`, `miestilo1.css`, `miestilo2.css` (ningún HTML los referenciaba)
2. **Push a GitHub** - Commit de eliminación
3. **Documentación actualizada** - Estructura e historial actualizados (el .md no se sube a GitHub)

### Sesión 7: Nuevo proyecto, QR en footer, correcciones ortográficas

1. **Nueva card Óptima Productora** - Agregada en `seccion2.html` con botón "Leer más" para truncar texto y mantener alturas uniformes
2. **Correcciones ortográficas en todo el proyecto**:
   - `index.html`: "Github" → "GitHub", "+5 Proyectos" → "+6 Proyectos"
   - `seccion0.html`: "Técnico Nivel Superior" → "Técnico de nivel superior", agregado párrafo sobre actividades independientes como desarrollador
   - `seccion1.html`: "flosum" → "Flosum"
   - `seccion2.html`: "full Stack" → "Full Stack", "micondominio" → "Mi Condominio", "misatrasos" → "Mis Atrasos", "Optima" → "Óptima"
3. **QR de contacto en footer** - Imagen `img/miQR.jpg` (80x80px, borde dorado) agregada en el footer de las 4 páginas debajo del nombre y rol
4. **Estilos CSS nuevos** - `.footer-qr`, `.card-text.collapsed` (line-clamp), `.read-more` (botón expandir)
5. **Función JS nueva** - `toggleReadMore()` en `script.js` para expandir/colapsar texto de cards
6. **Push a GitHub** - Commit con todos los cambios

---

## Configuración de Git

```
user.name: pgallardob
user.email: pgallardob@hotmail.com
credential.helper: manager
remote origin: https://github.com/pgallardob/github.io.git
rama: main
```

## .gitignore

```
img/ejemploopentowork.jpg
```

---

## Commits Realizados

| Commit  | Descripción |
|---------|-------------|
| `e01e776` | Rediseño premium completo: navbar, hero con #OPEN_TO_WORK, proyectos, correo actualizado, popup y script corregidos |
| `feba639` | Corregir footer: footer-top a footer-grid, reset ul padding/margin |
| `1f31d23` | Stats: +11 Herramientas, link en +5 Proyectos a seccion2.html |

---

## Notas

- El archivo `img/ejemploopentowork.jpg` fue subido por el usuario como referencia visual para el badge #OPEN_TO_WORK y está excluido del repositorio mediante `.gitignore`
- GitHub Pages tarda 1-2 minutos en reflejar los cambios después de cada push
- El diseño es totalmente responsive con breakpoint en 768px
- El popup de WhatsApp funciona en todas las páginas excepto index.html (que no incluye script.js)

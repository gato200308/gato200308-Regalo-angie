# 💕 Cartas de Amor - Encuentro Cristiano

Una página web romántica que desbloquea una carta de amor cada día durante el encuentro cristiano del 22 al 31 de agosto.

## ✨ Características

- **Desbloqueo automático**: Una carta nueva cada día
- **Diseño romántico**: Colores suaves y tipografía elegante
- **Responsive**: Funciona en móvil y computadora
- **Temática cristiana**: Incluye versículos bíblicos y mensajes de fe
- **Fácil personalización**: Puedes cambiar las cartas fácilmente

## 📅 Fechas del Evento

- **Inicio**: 22 de Agosto 2024
- **Fin**: 31 de Agosto 2024
- **Total**: 10 días de cartas

## 🚀 Cómo usar

1. **Abrir la página**: Simplemente abre `index.html` en tu navegador
2. **Ver calendario**: Las fechas disponibles se muestran en el calendario
3. **Leer cartas**: Haz clic en cualquier fecha disponible para leer la carta
4. **Desbloqueo automático**: Cada día se desbloquea una nueva carta

## 🎨 Personalización

### Cambiar las cartas

Edita cada archivo HTML en la carpeta `cartas/`:

```html
<!-- En cartas/carta1.html -->
<div class="carta-content">
    <p>Tu mensaje personalizado aquí...</p>
    <div class="carta-verse">
        "Tu versículo bíblico aquí" - Libro Capítulo:Versículo
    </div>
    <p>Más contenido personalizado...</p>
</div>
```

Cada carta es un archivo HTML independiente que puedes editar fácilmente.

### Cambiar colores

Edita el archivo `styles.css` para personalizar los colores:

```css
.main-title {
    color: #tu-color-aqui;
}
```

### Cambiar fechas

En `script.js`, modifica estas líneas:

```javascript
const START_DATE = new Date('2024-08-22'); // Fecha de inicio
const END_DATE = new Date('2024-08-31');   // Fecha de fin
const TOTAL_DAYS = 10;                     // Número total de días
```

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Móviles (iOS/Android)

## 🌐 Subir a GitHub Pages

1. **Crear repositorio**: Crea un nuevo repositorio en GitHub
2. **Subir archivos**: Sube todos los archivos del proyecto
3. **Activar GitHub Pages**: Ve a Settings > Pages
4. **Seleccionar rama**: Elige la rama main
5. **¡Listo!**: Tu página estará disponible en `https://tu-usuario.github.io/tu-repositorio`

## 📁 Estructura del Proyecto

```
📁 cartas-romanticas/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica de desbloqueo
├── README.md           # Documentación
└── 📁 cartas/
    ├── carta1.html     # Carta del día 1
    ├── carta2.html     # Carta del día 2
    ├── carta3.html     # Carta del día 3
    ├── carta4.html     # Carta del día 4
    ├── carta5.html     # Carta del día 5
    ├── carta6.html     # Carta del día 6
    ├── carta7.html     # Carta del día 7
    ├── carta8.html     # Carta del día 8
    ├── carta9.html     # Carta del día 9
    └── carta10.html    # Carta del día 10
```

## 💡 Ideas para personalizar

- **Agregar música**: Incluye una canción romántica de fondo
- **Efectos especiales**: Confeti cuando se abre una carta
- **Fotos**: Incluye fotos de ustedes en cada carta
- **Versículos bíblicos**: Agrega más versículos sobre el amor
- **Animaciones**: Más efectos visuales

## 🎯 Funcionalidades técnicas

- **Desbloqueo por fecha**: Solo se muestran las cartas de días pasados
- **Almacenamiento local**: Recuerda qué cartas ya se leyeron
- **Diseño responsive**: Se adapta a cualquier pantalla
- **Sin servidor**: Funciona completamente en el navegador

## 💝 Mensaje especial

Este proyecto fue creado con mucho amor para hacer especial el encuentro cristiano. Cada carta es una oportunidad para expresar el amor y la fe que comparten.

---

*"El amor es paciente, el amor es bondadoso" - 1 Corintios 13:4* 
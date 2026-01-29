# 🚗⚡ Calculadora de Vehículos Eléctricos

Una landing page moderna y responsive para calcular el ahorro al cambiar a un vehículo eléctrico.

## ✨ Características

- 🧮 **Calculadora de Ahorro**: Compara costes de electricidad vs gasolina
- 🌍 **Multiidioma**: Español e Inglés
- 🌓 **Modo Oscuro/Claro**: Tema personalizable
- 📱 **Responsive**: Optimizado para móvil, tablet y escritorio
- ♿ **Accesible**: Cumple con estándares de accesibilidad
- 🎨 **Diseño Moderno**: Estética acorde a vehículos eléctricos
- 💰 **Plan Moves 3**: Incluye ayudas y achatarramiento
- 🚙 **Vehículos Populares**: Datos reales de consumo
- ⚡ **Precios de Carga**: Información actualizada de costes

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
electric_vehicle_calculator/
├── public/
│   ├── hero.png           # Imagen principal
│   ├── charging.png       # Icono de carga
│   └── savings.png        # Icono de ahorro
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Calculator.jsx
│   │   ├── Vehicles.jsx
│   │   ├── Prices.jsx
│   │   └── Footer.jsx
│   ├── data/             # Datos de vehículos
│   │   └── vehicles.js
│   ├── i18n/             # Traducciones
│   │   └── translations.js
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globales
│   ├── index.css         # Reset CSS
│   └── main.jsx          # Punto de entrada
├── index.html            # HTML principal
└── package.json          # Dependencias
```

## 🎯 Funcionalidades

### Calculadora

- Personalización de kilómetros
- Ajuste de costes eléctricos y de gasolina
- Configuración de consumos
- Inclusión de Plan Moves 3 (€4,000)
- Opción de achatarramiento (+€3,000)
- Resultados en tiempo real

### Secciones

1. **Hero**: Presentación con imagen impactante
2. **Calculadora**: Herramienta interactiva de cálculo
3. **Vehículos**: 8 vehículos eléctricos y 8 de gasolina populares
4. **Precios**: Costes de carga (casa, rápida, ultra-rápida) y combustibles

## 🎨 Tecnologías

- **React 18**: Framework principal
- **Vite**: Build tool y dev server
- **Bootstrap 5**: Framework CSS
- **React Bootstrap**: Componentes React
- **React Icons**: Iconografía
- **CSS Variables**: Theming dinámico

## 🌐 SEO y Accesibilidad

- Meta tags completos (SEO, Open Graph, Twitter)
- Etiquetas semánticas HTML5
- ARIA labels donde necesario
- Contraste de colores accesible
- Navegación por teclado
- Responsive design

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 991px

## 🎨 Temas

La aplicación soporta dos temas que se pueden cambiar con el botón en la navegación:

- **Light Mode**: Colores claros y brillantes
- **Dark Mode**: Tonos oscuros con acentos azules/cyan

## 🌍 Idiomas

Cambia entre español e inglés con el botón de idioma en la navegación. Las preferencias se guardan en localStorage.

## 📊 Datos por Defecto

- **Kilómetros**: 100,000 km
- **Coste eléctrico**: €0.12/kWh
- **Coste gasolina**: €1.45/litro
- **Consumo eléctrico**: 13.9 kWh/100km
- **Consumo gasolina**: 7.5 L/100km

## 🔗 Enlaces Útiles

- [Plan Moves 3](https://www.idae.es/ayudas-y-financiacion/para-movilidad-y-vehiculos/programa-moves-iii)

## 📝 Licencia

Este proyecto es de código abierto.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ usando React y las mejores prácticas de desarrollo web moderno.

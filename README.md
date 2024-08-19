# Tech Test N5

Proyecto de prueba de N5 Now

## Características

- Listado de productos con opción para agregar al carrito.
- Visualización de productos agregados en el carrito con posibilidad de modificar cantidades.
- Funcionalidad de compra y limpieza del carrito.
- Persistencia del carrito en el almacenamiento local para mantener los productos agregados tras recargar la página.
- Implementación opcional de modo oscuro (deshabilitado).

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la creación de interfaces de usuario.
- **Redux**: Manejo del estado global de la aplicación.
- **Sass**: Preprocesador CSS para estilos más eficientes y organizados.
- **Bootstrap**: Para la creación de componentes de interfaz de usuario.
- **React Router**: Manejo de rutas y navegación dentro de la aplicación.
- **React Icons**: Conjunto de íconos para utilizar dentro de la aplicación.
- **React Toastify**: Librería para mostrar notificaciones y alertas en la interfaz.
- 
## Estructura del Proyecto

```bash
your-project/
│
├── node_modules/              # Dependencias del proyecto
├── public/                    # Archivos públicos como index.html
├── src/                       # Código fuente principal
│   ├── components/            # Componentes reutilizables
│   ├── slices/                # Redux slices
│   ├── styles/                # Archivos Sass organizados
│   ├── App.jsx                # Componente principal de la aplicación
│   └── index.js               # Punto de entrada de la aplicación
├── package.json               # Dependencias y scripts del proyecto
├── README.md                  # Documentación del proyecto
└── package-lock.json          # Archivo de bloqueo de dependencias
```

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

### Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tech-test-n5
```

### Instala las dependencians
```bash
npm install
```

### Corre el proyecto
```bash
npm run dev
```

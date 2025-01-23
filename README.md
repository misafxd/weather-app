# Weather App

¡Bienvenido Weather App! Esta es una aplicación web desarrollada con JavaScript, HTML, CSS y Webpack que te permite buscar el pronóstico del clima de cualquier ciudad. Obtén información detallada sobre el clima de ayer, hoy y los próximos 10 días. ¡Perfecta para planificar tus actividades!

## Características

- **Búsqueda por ciudad**: Ingresa el nombre de una ciudad para obtener el pronóstico del clima.
- **Pronóstico completo**: Consulta el clima de ayer, hoy y los próximos 10 días.
- **Interfaz intuitiva**: Diseño limpio y fácil de usar.
- **Responsive**: La aplicación se adapta a diferentes dispositivos.
 
![weather](https://github.com/user-attachments/assets/e328518b-393a-4375-9dfe-68f20cada906)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)
- [webpack](https://webpack.js.org/) y [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) instalados global o localmente.


### Pasos

1. **Clona el repositorio**:
  
  ```bash
   git clone https://github.com/misafxd/weather-app.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
     cd weather-app
   ```

3. **Instala las dependencias**:
  
  ```bash
   npm install
   ```
4. **Compila el proyecto con Webpack**:

```bash
   npm run build
   ```
   
5. **Inicia el servidor**:

  ```bash
   npx webpack serve
   ```

6. **Abre el proyecto en tu navegador**
El proyecto estará disponible en http://localhost:8080 (o el puerto que se indique).

---
## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
  - `js/`: Archivos JavaScript para la lógica de la aplicación.
  - `css/`: Archivos CSS para los estilos.
  - `index.html`: Página principal de la aplicación.
- `dist/`: Carpeta generada por Webpack con los archivos compilados.
- `webpack.config.js`: Configuración de Webpack.

## Tecnologías Utilizadas

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript): Lenguaje de programación para la lógica de la aplicación.
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML): Para la estructura de la aplicación.
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS): Para estilizar la aplicación.
- [Webpack](https://webpack.js.org/): Empaquetador de módulos para compilar y optimizar el proyecto.
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/): Servidor de desarrollo para Webpack.

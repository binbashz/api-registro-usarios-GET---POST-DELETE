# Aplicación web utilizando Node.js y Express

Esta es una aplicación web construida con Node.js y Express, que es un marco de desarrollo web para Node.js.

## Configuración inicial

- Importamos Express y creamos una aplicación llamada `app`.
- Establecemos un middleware para servir archivos estáticos desde la carpeta '/templates', lo que nos permite acceder a archivos HTML, CSS e imágenes en nuestro sitio web.
- Configuramos otro middleware llamado `express.json()` para analizar solicitudes entrantes en formato JSON, lo que facilita el manejo de datos JSON en el servidor.
- Creamos un arreglo llamado `usuarios` que almacena información ficticia de usuarios.

## Definición de rutas

La aplicación define varias rutas:

- La ruta raíz `'/'` muestra un mensaje de "Hola" cuando visitas la página de inicio.
- La ruta '/api/usuario' muestra una lista de usuarios en formato JSON.
- La ruta '/api/usuario/:id' permite buscar un usuario por su ID. Si se encuentra, se muestra la información del usuario en formato JSON; de lo contrario, se devuelve un error 404.
- Puedes crear nuevos usuarios utilizando la ruta '/api/usuario/' con el método POST. Los datos del nuevo usuario se toman del cuerpo de la solicitud y se agregan al arreglo de usuarios. Además, se muestran
- los datos recibidos y el nuevo usuario creado en la consola.
- Para eliminar un usuario, se utiliza la ruta '/api/usuario/:id' con el método DELETE. Si el usuario existe, se elimina del arreglo de usuarios; de lo contrario, se devuelve un error 404. Se envía un mensaje de éxito como respuesta.

## Configuración del puerto

Por último, se especifica en qué puerto se ejecutará el servidor web. Por defecto, utiliza el puerto 80. Cuando inicias el servidor, se muestra un mensaje en la consola indicando en qué puerto está escuchando
![model](https://github.com/binbashz/api-registro-usarios-GET---POST-DELETE/assets/124454895/f271a938-f749-4882-8d70-2c077db9bf9b)

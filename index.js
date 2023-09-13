// Importar el módulo Express y crear una instancia de la aplicación
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/templates'));

// Middleware para analizar solicitudes en formato JSON
app.use(express.json());

// Arreglo de usuarios (datos de muestra).
const usuarios = [
    { id: 1, nombre: 'Mauricio', telefono: 224455, enroll: true },
    { id: 2, nombre: 'Nicolas', telefono: 236677, enroll: true },
    { id: 3, nombre: 'Gustavo', telefono: 261188, enroll: false },
    { id: 2, nombre: 'Joaquin', telefono: 238874, enroll: true },
    { id: 2, nombre: 'Vincenzo', telefono: 237447, enroll: true },
];

// message for take the commit 
// Ruta de inicio (responde con un mensaje "Hola" cuando se accede a la raíz del sitio)
app.get('/', (request, response) => {
    response.send('Hola');
});

// Ruta para obtener todos los usuarios (responde con la lista de usuarios)
app.get('/api/usuario', (request, response) => {
    response.send(usuarios);
});

// Ruta para obtener un usuario por su ID (utiliza un parámetro dinámico :id en la URL)
app.get('/api/usuario/:id', (request, response) => {
    // Buscar un usuario en el arreglo según su ID
    const user = usuarios.find(c => c.id === parseInt(request.params.id));
    if (!user) {
        return response.status(404).send('Usuario no encontrado');
    } else {
        response.send(user);
    }
});

// Ruta para crear un nuevo usuario (utiliza el método POST)
app.post('/api/usuario/', (request, response) => {
    // Crear un nuevo usuario con los datos del cuerpo de la solicitud
    const newUser = {
        id: usuarios.length + 1,
        nombre: request.body.nombre,
        telefono: parseInt(request.body.telefono),
        enroll: (request.body.enroll === 'true')
    };

    // Agregar el nuevo usuario al arreglo de usuarios.
    usuarios.push(newUser);

    // -- Mostrar los datos recibidos y el nuevo usuario creado en la consola
    console.log('Datos recibidos en request.body:');
    console.log(request.body);

    console.log('Nuevo usuario creado:');
    console.log(newUser);

    // Enviar el nuevo usuario como respuesta.
    response.send(newUser);
});

// Ruta para eliminar un usuario por su ID (utiliza el método DELETE)
app.delete('/api/usuario/:id', (request, response) => {
    // Obtener el ID del usuario a eliminar desde los parámetros de la URL
    const userId = parseInt(request.params.id);

    // Buscar el índice del usuario en el arreglo
    const index = usuarios.findIndex(user => user.id === userId);

    if (index === -1) {
        // Si no se encuentra el usuario, responder con un código de estado 404
        return response.status(404).send('Usuario no encontrado');
    }

    // Eliminar el usuario del arreglo de usuarios
    usuarios.splice(index, 1);

    // Responder con un mensaje de éxito
    response.send('Usuario eliminado correctamente');
});

// Puerto en el que se ejecutará el servidor 
const port = process.env.PORT || 80;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
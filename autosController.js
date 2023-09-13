
const express = require('express'); // Importa Express (solo si es necesario)
const app = express(); // Crea una instancia de la aplicación Express (solo si es necesario)



// Arreglo de autos (datos de muestra)
const autos = [
    {
        id: 1,
        disponibilidad: true,
        marca: 'Toyota',
        matricula: 'ABC123',
        modelo: 'Camry',
        precioPorDia: 50
    },
    {
        id: 2,
        disponibilidad: false,
        marca: 'Honda',
        matricula: 'XYZ789',
        modelo: 'Civic',
        precioPorDia: 45
    },
   
];

// Función para obtener todos los autos
const obtenerTodosLosAutos = (request, response) => {
    response.send(autos);
};

// Función para obtener un auto por su ID
const obtenerAutoPorID = (request, response) => {
    const auto = autos.find(c => c.id === parseInt(request.params.id));
    if (!auto) {
        return response.status(404).send('Auto no encontrado');
    } else {
        response.send(auto);
    }
};

// Función para buscar autos disponibles (opcional)
const obtenerAutosDisponibles = (request, response) => {
    const autosDisponibles = autos.filter(auto => auto.disponibilidad === true);
    response.send(autosDisponibles);
};

module.exports = {
    obtenerTodosLosAutos,
    obtenerAutoPorID,
    obtenerAutosDisponibles
};
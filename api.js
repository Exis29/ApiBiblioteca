const express = require('express');
const app = express();
const PORT = 3004;

// Datos iniciales
class Autor {
constructor(nombre, nacionalidad) {
this.nombre = nombre;
this.nacionalidad = nacionalidad;
}
}

class Libro {
constructor(titulo, autor, anioPublicacion, disponibilidad = true) {
this.titulo = titulo;
this.autor = autor; // Debe ser una instancia de Autor
this.anioPublicacion = anioPublicacion;
this.disponibilidad = disponibilidad;
}
}

const autores = [
new Autor("Dan Brown", "Estadounidense"),
new Autor("J. R. R. Tolkien", "Sudáfrica"),
new Autor("Miguel de Cervantes", "España"),
new Autor("Joanne Rowling", "Reino Unido"),
new Autor("Gabriel García Márquez", "Colombiano")
];

const libros = [
new Libro("El Código da Vinci", 2003),
new Libro("El señor de los anillos", 1954),
new Libro("Don Quijote de la Mancha", 1615),
new Libro("Harry Potter", 1997),
new Libro("Cien años de soledad",1967)
];

// Middleware para parsear JSON
app.use(express.json());

// Endpoints

// 1. Obtener todos los autores
app.get('/autores', (req, res) => {

res.json(autores);
});

// 2. Obtener todos los libros
app.get('/libros', (req, res) => {
res.json(libros);
});

// 3. Obtener libros disponibles
app.get('/libros/disponibles', (req, res) => {
const disponibles = libros.filter(libro => libro.disponibilidad);
res.json(disponibles);
});

// 4. Obtener libros no disponibles
app.get('/libros/nodisponibles', (req, res) => {
const noDisponibles = libros.filter(libro => !libro.disponibilidad);
res.json(noDisponibles);
});

// Ruta raíz
app.get('/', (req, res) => {
    res.json({
        autores: autores,
        libros: libros
    });
});

// Iniciar servidor
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
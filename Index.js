let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];

function mostrarNombresSeries(datos) {
    // Reemplaza "array" por tu arreglo "series", cada uno quedará en "item"
    datos.forEach(item => {
        // Escribe aquí el código para mostrar el nombre de la serie
        console.log(item.serie);
    });
}

mostrarNombresSeries(series);
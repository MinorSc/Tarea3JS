
console.log("hola")


let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];

//1
mostrarNombresSeries(series)

function mostrarNombresSeries(datos) {

    datos.forEach(element => {
        console.log(element.Serie)
    });

}

//2
longitud(series)

function longitud(datos) {
    console.log(datos.length)

}

//3
Mayuscula(series)

function Mayuscula(datos) {
    datos.forEach(element => {
        console.log(`El texto es: ${element.Serie.toUpperCase()}`)
    });
}

//4
Minus(series)

function Minus(datos) {
    datos.forEach(element => {
        console.log(`El texto es: ${element.Serie.toLowerCase()}`)
    });
}

//5

function BuscarSerie(datos, nombre) {
    datos.forEach(element => {
        if (element.series == nombre) {
            console.log(`Serie encontrada: ${element.Serie}`)
        } else {
            console.log(":(")
        }
    });


}
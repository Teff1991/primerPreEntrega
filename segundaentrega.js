class Producto{
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}
    let productos = [
        new Producto (100, "campera coral", 100, "urbano"),
        new Producto (101, "conjunto de invierno", 150, "urbano"),
        new Producto (102, "conjunto de otoño", 300, "urbano"),
        new Producto (103, "conjunto elegante", 400, "fiesta"),
        new Producto (104, "conjunto top invierno", 500, "fiesta"),
    ];

    let categorias = ["urbano","fiesta"];
    let productosEnCarro = [];
    let categoria = "";



while (categoria != "salir" && categoria != null){
    let aux = categorias.join (" o ");
    categoria = prompt("Ingrese la categoria de ropa que quiere comprar o ingrese salir para finalizar: \n(" + aux + ")");
   
    if (categoria != "salir" && categoria != null) {
        let productosFiltradoPorCategoria = productos.filter(
         (item) => item.categoria == categoria);


        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
        cartel +=
            " id: " +
            productosFiltradoPorCategoria[i].id +
            " precio: " +
            productosFiltradoPorCategoria[i].precio +
            " " +
            " producto: " +
            productosFiltradoPorCategoria[i].nombre +
            "\n"
        }
       
        //alert("Seleccione el id del producto que quiere comprar \n" + cartel);
       
        let idSeleccionado = parseInt(prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel ));
        let productosParaCarro = productosFiltradoPorCategoria.find(
            item =>item.id === idSeleccionado);

        console.log(productosParaCarro);
    }
}

class ProductManager {
    constructor () {
        this.products = [];
    }

    addProduct (object) {
        const objCode = this.products.map((product) => product.code);
        const existe = objCode.includes (object.code);
        if (existe) {
            console.log ("El producto ya existe");
        } else {
            let id;
            id = this.products.length + 1;
            const newObject = { ...object, id };
            this.products.push(newObject);
            return console.log(`Agregaste el producto: ${newObject.id}`);
        }
    }

    getProductById (id) {
        const buscarProducto = this.products.find ((product) => id === product.id); 
        if (buscarProducto) {
            let productJSON = JSON.stringify(buscarProducto);
      return console.log(`El producto seleccionado es: ${productJSON}`);
           // return JSON.stringify(buscarProducto);
        } else {
            console.log ("Not found product"); 
        }
    }

    getProducts() {
        return this.products;
    }

}

const clase3 = new ProductManager();

clase3.addProduct({
    title: "Producto A",
    description: " Descripcion producto A",
    thumbnail: "",
    price: 25,
    code: 1,
    stock: 20
});
clase3.addProduct({
    title: "Producto B",
    description: " Descripcion producto B",
    thumbnail: "",
    price: 15,
    code: 2,
    stock: 10
});
clase3.addProduct({
    title: "Producto C",
    description: " Descripcion producto C",
    thumbnail: "", 
    price: 35,
    code: 3,
    stock: 5
});
clase3.addProduct({
    title: "Producto D",
    description: " Descripcion producto D",
    thumbnail: " ",
    price: 40,
    code: 4,
    stock: 45
});
clase3.addProduct({
    title: "Producto E",
    description: " Descripcion producto E",
    thumbnail: " ",
    price: 54,
    code: 5,
    stock: 10
});

console.log(clase3);

console.table(clase3.getProducts());
console.log("Productos: " + clase3.getProductById(5));
console.log("Producto: " + clase3.getProductById(10));
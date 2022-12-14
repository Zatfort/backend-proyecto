class ProductManager {
  products;
  static id = 1;
  constructor(tittle, description, price, thumbnail, code, stock) {
    ProductManager.id += 0;
    this.products = [];
    this.tittle = tittle;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  addProduct(product) {
    product = { ...product, id: ProductManager.id };
    let assignedCode = this.products.find(
      (producto) => producto.code === product.code
    );
    if (assignedCode) {
      return console.log(
        "El code del producto ",
        product.tittle,
        "debe ser diferente, ya que es idéntico a otro producto"
      );
    } else {
      this.products.push(product);
      ProductManager.id++;
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let searchID = id;
    let myProduct = null;
    this.products.forEach((product) => {
      if (product.id === searchID) {
        myProduct = product;
      }
    });
    if (myProduct === null) {
      return console.log("El ID", searchID, "no ha sido hallado");
    } else {
      return console.log(
        "El ID",
        searchID,
        "corresponde al siguiente al producto ",
        myProduct.tittle
      );
    }
  }
}

const productList = new ProductManager();

const product1 = {
  tittle: "gorra",
  description: "gorra megaman",
  price: 24,
  thumbnail: "https://cdn.shopify.com/s/files/1/0014/1962/products/product_megaman_mega_robotics_hat_itemview_360x360.png?v=1664926017",
  code: 10,
  stock: 12,
};

const product2 = {
  tittle: "gorra",
  description: "gorra de undertale",
  price: 25,
  thumbnail: "https://cdn.shopify.com/s/files/1/0014/1962/products/product_undertale_AnnoyingDog_beanie_itemview_360x360.png?v=1653341600",
  code: 10,
  stock: 20,
};

console.log("Se procede a la carga de productos: ");
productList.addProduct(product1);
productList.addProduct(product2);

console.log("El listado de productos cargados es: ");
console.log(productList.getProducts());

console.log("Se prodece a buscar el producto con ID=2");
console.log(productList.getProductById(2));
console.log("Fin del programa");

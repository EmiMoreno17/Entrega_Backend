// EJERCICIO PARA ENTREGAR


class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  
      if (this.products.some((product) => product.code === code)) {
        console.log("El codigo ya está en uso. Debe ser unico.");
        return;
      }
  
      const product = {
        id: this.nextProductId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      console.log("Agregaste un producto");
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log("Not Found");
        return;
      }
      return product;
    }
  }
  
  
  const productManager = new ProductManager();
  
  // en las lineas de abajo se agregan los nuevos productos
  // si agregamos un producto nuevo y no le agregamos alguno de los campos solicitaados, no dira "Todos los campos son obligatorios"
  // si el producto que se almacena contiene el mismo codigo que otro nos dira "El codigo ya está en uso. Debe ser unico". si no, se mostrara por consola
  
  
  productManager.addProduct("manzana", "Este es un producto prueba", 200, "Sin imagen", "abc123", 125);
  productManager.addProduct("Pera", "Este es un producto prueba", 200, "Sin imagen", "abc123", 125);
  productManager.addProduct("banana", "Este es un producto prueba", 200, "Sin imagen", "abc1", 125);
  

  

  console.log(productManager.getProducts());
  
  // en la siguiente linea si indicamos un id del producto agregado, nos mostrara los detalles del objeto. caso contrario, si colocamos un id = 0 o mayor a la cantidad de productos agregados, por consola se mostrara "Not Found"

  const product = productManager.getProductById(4);
  console.log(product);
  
  
  
  
  
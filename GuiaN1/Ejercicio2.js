// Definición de la clase Producto
class Producto {
    // Constructor de la clase para inicializar el nombre y el precio
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método para mostrar los detalles del producto
    mostrarDetalles() {
        // Formatear el precio para mostrarlo en pesos chilenos
        const precioFormateado = this.precio.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
        });
        console.log(`Producto: ${this.nombre}, Precio: ${precioFormateado}`);
    }
}

// Crear varias instancias de la clase Producto
let producto1 = new Producto("Notebook", 1200990);
let producto2 = new Producto("Teléfono", 300990);
let producto3 = new Producto("Smart Tv", 700990);

// Invocar el método mostrarDetalles para cada producto
producto1.mostrarDetalles();  // Producto: Notebook, Precio: $1.200.990
producto2.mostrarDetalles();  // Producto: Teléfono, Precio: $300.990
producto3.mostrarDetalles();  // Producto: Smart Tv, Precio: $700.990
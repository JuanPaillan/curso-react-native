// Clase base Trabajador
class Trabajador {
    // Constructor de la clase Trabajador
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    // Método para mostrar los detalles del trabajador
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo.toLocaleString('es-CL')}`);
    }
}

// Clase Gerente que hereda de Trabajador
class Gerente extends Trabajador {
    // Constructor de la clase Gerente
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo); // Llama al constructor de la clase base
        this.departamento = departamento;
    }

    // Sobrescribir el método mostrarDetalles para incluir el departamento
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo.toLocaleString('es-CL')}, Departamento: ${this.departamento}`);
    }
}

// Crear instancias de Trabajador
let trabajador1 = new Trabajador("Ana Pérez", 500000);
let trabajador2 = new Trabajador("Luis Gómez", 400000);

// Crear instancias de Gerente
let gerente1 = new Gerente("Carlos Díaz", 900000, "Ventas");
let gerente2 = new Gerente("María Torres", 1200000, "Recursos Humanos");

// Mostrar la información de los trabajadores y gerentes
trabajador1.mostrarDetalles(); // Nombre: Ana Pérez, Sueldo: $500.000
trabajador2.mostrarDetalles(); // Nombre: Luis Gómez, Sueldo: $400.000
gerente1.mostrarDetalles();     // Nombre: Carlos Díaz, Sueldo: $900.000, Departamento: Ventas
gerente2.mostrarDetalles();     // Nombre: María Torres, Sueldo: $1.200.000, Departamento: Recursos Humanos

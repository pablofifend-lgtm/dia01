// Interfaz IValorable
interface IValorable {
    damePrecio(): number;
}

// Clase Rueda
class Rueda implements IValorable {
    private precio: number;

    constructor(precio: number) {
        this.precio = precio;
    }

    damePrecio(): number {
        return this.precio;
    }
}

// Clase Carroceria
class Carroceria implements IValorable {
    private precio: number;

    constructor(precio: number) {
        this.precio = precio;
    }

    damePrecio(): number {
        return this.precio;
    }
}

// Clase Volante
class Volante implements IValorable {
    private precio: number;

    constructor(precio: number) {
        this.precio = precio;
    }

    damePrecio(): number {
        return this.precio;
    }
}

// Clase Coche
class Coche implements IValorable {
    private ruedas: Rueda[];
    private carroceria: Carroceria;
    private volante: Volante;

    constructor(ruedas: Rueda[], carroceria: Carroceria, volante: Volante) {
        this.ruedas = ruedas;
        this.carroceria = carroceria;
        this.volante = volante;
    }

    damePrecio(): number {
        // Suma del precio de las partes
        const precioRuedas = this.ruedas.reduce((acc, r) => acc + r.damePrecio(), 0);
        return precioRuedas + this.carroceria.damePrecio() + this.volante.damePrecio();
    }
}

// Clase Concesionario
class Concesionario implements IValorable {
    private coches: Coche[] = [];

    agregarCoche(coche: Coche): void {
        this.coches.push(coche);
    }

    damePrecio(): number {
        return this.coches.reduce((total, coche) => total + coche.damePrecio(), 0);
    }

    mostrarCoches(): void {
        this.coches.forEach((coche, index) => {
            console.log(`Coche ${index + 1} → Precio total: ${coche.damePrecio()} €`);
        });
    }
}

// ---------------------------------------------
// Ejemplo de uso
// ---------------------------------------------

// Crear piezas
const rueda = new Rueda(100);
const carroceria = new Carroceria(2000);
const volante = new Volante(300);

// Crear coches
const coche1 = new Coche([rueda, rueda, rueda, rueda], carroceria, volante);
const coche2 = new Coche([rueda, rueda, rueda, rueda], new Carroceria(2500), new Volante(400));

// Crear concesionario y añadir coches
const concesionario = new Concesionario();
concesionario.agregarCoche(coche1);
concesionario.agregarCoche(coche2);

// Mostrar información
concesionario.mostrarCoches();
console.log(`Precio total del concesionario: ${concesionario.damePrecio()} €`);


abstract class Persona {
    readonly nombre: string;
    readonly edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    abstract dameSueldo(): number;
}

class Ejecutivo extends Persona {
    dameSueldo(): number {
        return 100 * this.edad;
    }
}

class Secretario extends Persona {
    dameSueldo(): number {
        return 50 * this.edad;
    }
}

class Aprendiz extends Persona {
    dameSueldo(): number {
        return 10 * this.edad;
    }
}

const ejecutivo1 = new Ejecutivo("Pablo", 30);
const ejecutivo2 = new Ejecutivo("Lucía", 20);

const secretario1 = new Secretario("María", 20);
const secretario2 = new Secretario("Pedro", 22);

const aprendiz1 = new Aprendiz("Juan", 22);
const aprendiz2 = new Aprendiz("Laura", 24);

const personas: Persona[] = [
    ejecutivo1,
    ejecutivo2,
    secretario1,
    secretario2,
    aprendiz1,
    aprendiz2
];

let sueldoTotal = 0;
for (const p of personas) {
    console.log(`${p.nombre} (${p.constructor.name}) gana ${p.dameSueldo()}€`);
    sueldoTotal += p.dameSueldo();
}

console.log(` Sueldo total: ${sueldoTotal}€`);

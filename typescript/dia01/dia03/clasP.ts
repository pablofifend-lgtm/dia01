abstract class Persona {
    readonly nombre: string;
    readonly edad: number;
    constructor(nombre: string, edad: number) {
        if (edad < 0)
            this.edad = 0;
        else
            this.edad = edad;
        this.nombre = nombre;
        //this.edad = edad;
    }
    abstract dameNombre(): string;
    //return `Mi nombre es ${this.dameNombre}`
    abstract dameEdad(): string;


}
class Alumno extends Persona {
    readonly id: string;
    readonly estudios: boolean;

    constructor(nombre: string, edad: number, id: string, estudios: boolean) {
        super(nombre, edad);
        if (id.length == 0)
            this.id = "No identificado";
        else
            this.id = id;
        this.estudios = estudios;
    }
    dameNombre(): string {
        return (this.nombre);
    }
}

class Profesor extends Persona {
    dameNombre(): string {
        return this.nombre;
    }
    readonly estudios: string;
    constructor(nombre: string, edad: number, estudios: string) {
        super(nombre, edad);
        this.estudios = estudios;
    }
}

class Coordinador extends Profesor {
    dameNombre(): string {
        return this.nombre;
    }
    turno: string;
    constructor(nombre: string, edad: number, estudios: string, turno: string) {
        super(nombre, edad, estudios);
        this.turno = turno;
    }

}
class Media{
    
}
/*let Jacinto = new Persona();
Jacinto.name = "";
Jacinto.edad = -789;*/

//let Jacinto = new Persona("Jacinto", 78);
//let Ana = new Persona("Ana",76);
let Rocio = new Alumno("Rocio", 30, "4684654D", true);
let Rocio2 = new Alumno("Rocio", 30, "4684654D", true);
let Rocio3 = new Alumno("Rocio", 30, "4684654D", true);
let Rocio4 = new Alumno("Rocio", 30, "4684654D", true);

let JacintoP = new Profesor("Jacinto", 23, "Medios");
let JacintoP2 = new Profesor("Jacinto", 23, "Medios");

let Pilar = new Coordinador("PilarJ", 34, "univ", "mañana");

let ArrayPersona: Persona[] = [];
ArrayPersona.push(Rocio);
ArrayPersona.push(JacintoP);
ArrayPersona.push(Pilar);
ArrayPersona.forEach(element => {
    console.log(element.dameNombre());
})
//let Manolo = new Persona("Manolo", 78);
//Jacinto.edad = -98;
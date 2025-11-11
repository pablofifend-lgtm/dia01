//jeraruia
interface IIdentificable {
    dameIdentificacion(): string;
}
class Paci {
    nombreCompleto: string;
    numeroSS: string;

    constructor(nombreCompleto: string, numeroSS: string) {
        this.nombreCompleto = nombreCompleto;
        this.numeroSS = numeroSS;
    }
    dameIdentificacion(): string {
        return this.numeroSS;
    }
    private verificaSS(): boolean {
        return true;
    }
}

class Trabajador implements IIdentificable {
    nombreCompleto: string;
    numeroEmpleado: string;

    constructor(nombreCompleto: string, numeroEmpleado: string) {
        this.nombreCompleto = nombreCompleto;
        this.numeroEmpleado = numeroEmpleado;
    }
    dameIdentificacion(): string {
        return this.numeroEmpleado;
    }
}

class Cliente implements IIdentificable {
    nombreCompleto: string;
    dni: string;
    constructor(nombreCompleto: string, dni: string) {
        this.nombreCompleto = nombreCompleto;
        if (this.validaDni(dni))
            this.dni = dni;
        else
            this.dni = "incorrecto";
    }
    dameIdentificacion(): string {
        return this.dni;
    }
    private validaDni(dni: string): boolean {
        return typeof dni === "string" && this.dni.trim().length > 0;
    }
}

class Medico implements IIdentificable {
    nombre: string;
    especialidad: string;
    numeroColegiado: string;

    constructor(nombre: string, especialidad: string, numCol: string) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.numeroColegiado = numCol;
    }
    dameIdentificacion(): string {
        return this.numeroColegiado;
    }
}

interface IColeccionIdentificable {
    cuantoHay(): number;
    mostrarTodo(): void;
    Add(elementos: IIdentificable): void;
}

class centroDeSalud implements IColeccionIdentificable {
    coleccionIdentificable: IIdentificable[]
    coleccionCitas: ICitable[];
    constructor() {
        this.coleccionIdentificable = []
        this.coleccionCitas = []
    }
    cuantoHay(): number {
        return this.coleccionIdentificable.length;
    }
    mostrarTodo(): void {
        this.coleccionIdentificable.forEach(x => console.log(x.dameIdentificacion()));
        throw new Error("no");
    }
    Add(elementos: IIdentificable): void {
        this.coleccionIdentificable.push(elementos);
    }
    addCita(Cita: ICitable): void {
        this.coleccionCitas.push(Cita);
    }
}

interface ICitable {
    dameFeccha(): number;
    dameAsunto(): string;
    dameIdentificador(): string;
}

class citaMedica implements ICitable {
    Atendiente: IIdentificable;
    Receptor: IIdentificable;
    Fecha: number;
    constructor(Atendientte: IIdentificable, Receptor: IIdentificable, Fecha: number) {
        this.Atendiente = Atendientte;
        this.Receptor = Receptor;
        this.Fecha = Fecha;
        
    }
    dameFeccha(): number {
        return this.Fecha;
    }
    dameAsunto(): string {
        return `Cita con ${this.Atendiente.dameIdentificacion()} para ${this.Receptor.dameIdentificacion()}`;
    }
    dameIdentificador(): string {
        return `${this.Atendiente.dameIdentificacion()}`
    }
}
let miCentroDeSalud = new centroDeSalud();
//let persona = new Paciente("Manolo Perez","XXYYZZZZZ");
miCentroDeSalud.Add(new Paci("Manolo Perez", "XXYYZZZZZ"));
miCentroDeSalud.Add(new Medico("eriberto","sasasas","cirugia"));
let miPacienteParaCitar = new Paci("Ana Lui","sasasasa");
let medicoParaAtener = new Medico("oligoberto","asdsasd","Trauma");
let cita1 = new citaMedica(medicoParaAtener,miPacienteParaCitar,Date.now());
miCentroDeSalud.addCita(cita1);
/*abstract class pac{
    nombre: string;
    edad: number;
    dni: string;
    constructor(nombre: string, edad: number, dni: string){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    mostrarInfo(): string{
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}`;
    }
}
class pacCons extends pac{
    especialidad: string;
    constructor(nombre: string, edad: number, dni: string, especialidad: string){
        super(nombre,edad,dni);
        this.especialidad = especialidad;
    }

}*/
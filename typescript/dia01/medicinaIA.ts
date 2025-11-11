// Clase base Paciente
class Paciente {
    nombre: string;
    edad: number;
    dni: string;

    constructor(nombre: string, edad: number, dni: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }

    mostrarInfo(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}`;
    }
}

// Clase derivada PacienteConsulta
class PacienteConsulta extends Paciente {
    especialidad: string;

    constructor(nombre: string, edad: number, dni: string, especialidad: string) {
        super(nombre, edad, dni);
        this.especialidad = especialidad;
    }

    override mostrarInfo(): string {
        return `${super.mostrarInfo()}, Especialidad: ${this.especialidad}`;
    }
}

// Clase derivada PacienteHospitalizado
class PacienteHospitalizado extends Paciente {
    diasHospitalizado: number;
    diagnostico: string;

    constructor(
        nombre: string,
        edad: number,
        dni: string,
        diasHospitalizado: number,
        diagnostico: string
    ) {
        super(nombre, edad, dni);
        this.diasHospitalizado = diasHospitalizado;
        this.diagnostico = diagnostico;
    }

    override mostrarInfo(): string {
        return `${super.mostrarInfo()}, Días hospitalizado: ${this.diasHospitalizado}, Diagnóstico: ${this.diagnostico}`;
    }
}

// Arreglo de pacientes (mezcla de tipos)
const pacientes: Paciente[] = [
    new PacienteConsulta("Juan Pérez", 30, "12345678", "Cardiología"),
    new PacienteHospitalizado("María López", 45, "87654321", 5, "Neumonía"),
    new PacienteConsulta("Carlos Gómez", 28, "11223344", "Dermatología"),
    new PacienteHospitalizado("Ana Torres", 50, "44332211", 10, "Cirugía"),
];

// Mostrar información de todos los pacientes
pacientes.forEach((paciente) => {
    console.log(paciente.mostrarInfo());
});

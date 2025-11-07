class Coche {
    matricula: string;
    potencia: number;
    velocidad: number;
    modelo: string;
    constructor(matricula: string, potencias: number, velocidad: number, modelo: string) {
        this.matricula = matricula;
        this.potencia = 0;
        this.velocidad = 0;
        this.modelo = modelo;
    }
    imprime() {
        console.log(`El coche con matricula ${Coche1.matricula} de modelo ${Coche1.modelo}, tiene una velocidad de ${Coche1.velocidad} para una potencia de ${Coche1.potencia}`);
    }
    velocidadCrucero(): number {
        return this.velocidad / this.potencia;
    }
    velocidadMedia() {

    }
    potenciaMedia() {

    }
}

let Coche1 = new Coche("zaader", 120.5, 110, "Seat 600");
let Coche2 = new Coche("ZZ-2443", 130.3, 125, "Volvo 678");
let Coche3 = new Coche("iuhsuahs", 150.8, 135.6, "Mercedes 500");

let ArrayC: Coche[] = []
ArrayC.push(Coche1);
ArrayC.push(Coche2);
ArrayC.push(Coche3);

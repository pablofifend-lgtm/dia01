class Co {
    readonly matricula: string;
    readonly potencia: number;
    constructor(matricula: string, potencia: number) {
        this.matricula = matricula;
        this.potencia = potencia;
    }
}
class Garage {
    readonly puntoDeVista: IPuntoDeVista;
    readonly coleccion: Co[] = [];
    constructor(PuntoVista: IPuntoDeVista) {
        this.puntoDeVista = PuntoVista;
    }
    add(Co1: Co): void {
        this.coleccion.push(Co1);
    }
    sacaTodo() {
        this.coleccion.filter(this.puntoDeVista.Filtra).sort(this.puntoDeVista.Ordenar).forEach(this.puntoDeVista.Recorre);
    }
}

interface IPuntoDeVista {
    Filtra(Co1: Co): boolean
    Recorre(Co1: Co): void
    Ordenar(Co1: Co, Co2: Co): number
}

class PuntoDeVistaMecanico implements IPuntoDeVista {
    Filtra(Co1: Co): boolean {
        return Co1.potencia > 0;
    }
    Recorre(Co1: Co): void {
        console.log(Co1.matricula + "mecanico");
    }
    Ordenar(Co1: Co, Co2: Co): number {
        return Co1.potencia - Co2.potencia;
    }
}
class Coche {
    readonly matricula: string;
    readonly potencia: number;
    constructor(matricula: string, potencia: number) {
        this.matricula = matricula;
        this.potencia = potencia;
    }
}
class Garaje {
    readonly coleccion: Coche[] = [];
    //con void no hay void, solo informar al progama
    /*add(Coche1, Coche); void
    {
    this.coleccion.push(Coche1);
}*/
}
interface PuntoDeVista {
    Filtra(Coche1: Coche): boolean
    Recoore(Coche1: Coche): void
    Ordenar(Coche1: Coche, Coche2: Coche): number
    Acumula(Coche1: Coche, Coche2: Coche): Coche
}

class PuntoDeVista implements PuntoDeVista {
    //impements renegar
}

export { }
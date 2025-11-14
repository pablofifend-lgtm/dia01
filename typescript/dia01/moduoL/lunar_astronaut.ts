// astronauta.ts

import { IPilotable } from './lunar_types.js';

export class Astronauta implements IPilotable {
    private identificador: string;
    private nombreCompleto: string;
    private edad: number;

    constructor(identificador: string, nombreCompleto: string, edad: number) {
        this.identificador = identificador;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }

    dameId(): string {
        return this.identificador;
    }

    dameNombre(): string {
        return this.nombreCompleto;
    }

    dameEdad(): number {
        return this.edad;
    }
}
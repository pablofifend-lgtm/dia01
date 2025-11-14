// mision.ts

import { IPilotable, IValidable, IEntrada, ISalida, Roca } from './types.js';

export class Mision {
    private piloto: IPilotable;
    public mision: IValidable;
    private entrada: IEntrada;
    private salida: ISalida;

    constructor(piloto: IPilotable, mision: IValidable, entrada: IEntrada, salida: ISalida) {
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }

    analiza(roca?: Roca): boolean {
        let miRoca: Roca | null;

        if (roca) {
            miRoca = roca;
        } else {
            miRoca = this.entrada.dameRoca();
        }

        if (!miRoca) {
            console.log('No se pudo obtener la roca');
            return false;
        }

        const esValida = this.mision.isValid(miRoca);
        
        console.log(`Piloto: ${this.piloto.dameNombre()}`);
        console.log(`Misión: ${this.mision.getNombre()}`);
        console.log(`Roca: ${miRoca.nombre} - Válida: ${esValida ? 'Sí' : 'No'}`);

        this.entrada.mostrarResultado(esValida);

        if (esValida) {
            this.salida.muestra(miRoca);
        }

        return esValida;
    }

    cambiarMision(nuevaMision: IValidable): void {
        this.mision = nuevaMision;
    }

    getPiloto(): IPilotable {
        return this.piloto;
    }
}
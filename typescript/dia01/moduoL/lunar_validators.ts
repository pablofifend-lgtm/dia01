// validadores.ts

import { IValidable, Roca } from './types.js';

export class ValidadorIgneas implements IValidable {
    getNombre(): string {
        return "Criterio Ígneas";
    }

    isValid(roca: Roca): boolean {
        return roca.grupo === 'igneas' && roca.tamanoGrano === 'muy_grueso';
    }
}

export class ValidadorMetamorficas implements IValidable {
    getNombre(): string {
        return "Criterio Metamórficas";
    }

    isValid(roca: Roca): boolean {
        return roca.grupo === 'metamorficas' && 
               (roca.tamanoGrano === 'medio' || roca.tamanoGrano === 'fino') &&
               roca.textura === 'vitrea';
    }
}

export class ValidadorSedimentarias implements IValidable {
    getNombre(): string {
        return "Criterio Sedimentarias";
    }

    isValid(roca: Roca): boolean {
        return roca.grupo === 'sedimentarias' && roca.textura === 'faneritica';
    }
}
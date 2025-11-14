// entrada.ts

import { IEntrada, Roca, GrupoRoca, TamanoGrano, ClasificacionRoca, Textura } from './lunar_types.js';

export class EntradaExtendida implements IEntrada {
    private formId: string;

    constructor(formId: string) {
        this.formId = formId;
    }

    dameRoca(): Roca | null {
        const id = (document.getElementById('id') as HTMLInputElement)?.value;
        const nombre = (document.getElementById('nombre') as HTMLInputElement)?.value;
        const grupo = (document.getElementById('grupo') as HTMLSelectElement)?.value as GrupoRoca;
        const dureza = parseInt((document.getElementById('dureza') as HTMLInputElement)?.value);
        const tamanoGrano = (document.getElementById('tamanoGrano') as HTMLSelectElement)?.value as TamanoGrano;
        const clasificacion = (document.getElementById('clasificacion') as HTMLSelectElement)?.value as ClasificacionRoca;
        const tamanoCristales = parseInt((document.getElementById('tamanoCristales') as HTMLInputElement)?.value);
        const temperaturaFormacion = parseFloat((document.getElementById('temperatura') as HTMLInputElement)?.value);
        const estructura = (document.getElementById('estructura') as HTMLTextAreaElement)?.value;
        const formaGranos = (document.getElementById('formaGranos') as HTMLTextAreaElement)?.value;
        const textura = (document.getElementById('textura') as HTMLSelectElement)?.value as Textura;

        if (!id || !nombre) return null;

        return {
            id, nombre, grupo, dureza, tamanoGrano, clasificacion,
            tamanoCristales, temperaturaFormacion, estructura, formaGranos, textura
        };
    }

    mostrarResultado(valida: boolean): void {
        const resultado = document.getElementById('resultado-extendida');
        if (resultado) {
            resultado.innerHTML = valida ? '😊' : '😠';
            resultado.className = valida ? 'resultado valido' : 'resultado invalido';
        }
    }
}

export class EntradaReducida implements IEntrada {
    private formId: string;

    constructor(formId: string) {
        this.formId = formId;
    }

    dameRoca(): Roca | null {
        const id = (document.getElementById('id-r') as HTMLInputElement)?.value;
        const nombre = (document.getElementById('nombre-r') as HTMLInputElement)?.value;
        const grupo = (document.getElementById('grupo-r') as HTMLSelectElement)?.value as GrupoRoca;
        const dureza = parseInt((document.getElementById('dureza-r') as HTMLInputElement)?.value);
        const tamanoGrano = (document.getElementById('tamanoGrano-r') as HTMLSelectElement)?.value as TamanoGrano;
        const clasificacion = (document.getElementById('clasificacion-r') as HTMLSelectElement)?.value as ClasificacionRoca;
        const tamanoCristales = parseInt((document.getElementById('tamanoCristales-r') as HTMLInputElement)?.value);
        const temperaturaFormacion = parseFloat((document.getElementById('temperatura-r') as HTMLInputElement)?.value);
        const estructura = (document.getElementById('estructura-r') as HTMLTextAreaElement)?.value;
        const formaGranos = (document.getElementById('formaGranos-r') as HTMLTextAreaElement)?.value;
        const textura = (document.getElementById('textura-r') as HTMLSelectElement)?.value as Textura;

        if (!id || !nombre) return null;

        return {
            id, nombre, grupo, dureza, tamanoGrano, clasificacion,
            tamanoCristales, temperaturaFormacion, estructura, formaGranos, textura
        };
    }

    mostrarResultado(valida: boolean): void {
        const resultado = document.getElementById('resultado-reducida');
        if (resultado) {
            resultado.innerHTML = valida ? '😊' : '😠';
            resultado.className = valida ? 'resultado valido' : 'resultado invalido';
        }
    }
}
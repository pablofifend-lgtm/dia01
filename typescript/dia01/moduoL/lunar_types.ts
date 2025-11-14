// types.ts - Definición de tipos e interfaces

export type GrupoRoca = 'igneas' | 'metamorficas' | 'sedimentarias';
export type TamanoGrano = 'muy_grueso' | 'grueso' | 'medio' | 'fino';
export type ClasificacionRoca = 'construccion' | 'ornamental' | 'utensilios' | 'machacada';
export type Textura = 'vitrea' | 'afanitica' | 'faneritica';

export interface Roca {
    id: string; // Formato: LLDDDDLL
    nombre: string;
    grupo: GrupoRoca;
    dureza: number; // 1-10
    tamanoGrano: TamanoGrano;
    clasificacion: ClasificacionRoca;
    tamanoCristales: number; // 0-10
    temperaturaFormacion: number; // -100 a 100 Kelvin
    estructura: string;
    formaGranos: string;
    textura: Textura;
}

export interface IPilotable {
    dameId(): string;
    dameNombre(): string;
    dameEdad(): number;
}

export interface IValidable {
    isValid(roca: Roca): boolean;
    getNombre(): string;
}

export interface IEntrada {
    dameRoca(): Roca | null;
    mostrarResultado(valida: boolean): void;
}

export interface ISalida {
    muestra(roca: Roca): void;
}
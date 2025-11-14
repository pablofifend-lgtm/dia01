// main.ts

import { Astronauta } from './lunar_astronaut.js';
import { ValidadorIgneas, ValidadorMetamorficas, ValidadorSedimentarias } from './lunar_validators.js';
import { EntradaExtendida, EntradaReducida } from './lunar_entrada.js';
import { SalidaAmericana, SalidaEuropea } from './lunar_salida.js';
import { Mision } from './lunar_mission.js';
import { Roca } from './lunar_types.js';

// Crear astronauta Agmunsen
const agmunsen = new Astronauta("AG001", "Agmunsen Pérez", 45);

// Crear validadores
const validadorIgneas = new ValidadorIgneas();
const validadorMetamorficas = new ValidadorMetamorficas();
const validadorSedimentarias = new ValidadorSedimentarias();

// Crear entradas y salidas
const entradaExtendida = new EntradaExtendida('formulario-extendido');
const entradaReducida = new EntradaReducida('formulario-reducido');
const salidaAmericana = new SalidaAmericana('salida-americana');
const salidaEuropea = new SalidaEuropea('salida-europea');

// Crear misiones
let misionExtendida = new Mision(agmunsen, validadorIgneas, entradaExtendida, salidaAmericana);
let misionReducida = new Mision(agmunsen, validadorIgneas, entradaReducida, salidaEuropea);

// Variables globales para el estado
let validadorActual = 'igneas';
let formatoActual = 'americano';

// Función para actualizar el validador
function actualizarValidador(tipoValidador: string): void {
    validadorActual = tipoValidador;
    let nuevoValidador;

    switch (tipoValidador) {
        case 'igneas':
            nuevoValidador = validadorIgneas;
            break;
        case 'metamorficas':
            nuevoValidador = validadorMetamorficas;
            break;
        case 'sedimentarias':
            nuevoValidador = validadorSedimentarias;
            break;
        default:
            nuevoValidador = validadorIgneas;
    }

    misionExtendida.cambiarMision(nuevoValidador);
    misionReducida.cambiarMision(nuevoValidador);

    console.log(`Validador cambiado a: ${tipoValidador}`);
}

// Función para actualizar el formato de salida
function actualizarFormato(formato: string): void {
    formatoActual = formato;
    const nuevaSalida = formato === 'americano' ? salidaAmericana : salidaEuropea;

    misionExtendida = new Mision(agmunsen, misionExtendida.mision, entradaExtendida, nuevaSalida);
    misionReducida = new Mision(agmunsen, misionReducida.mision, entradaReducida, nuevaSalida);

    // Ocultar ambas salidas
    const salidaAm = document.getElementById('salida-americana');
    const salidaEu = document.getElementById('salida-europea');
    if (salidaAm) salidaAm.style.display = 'none';
    if (salidaEu) salidaEu.style.display = 'none';

    console.log(`Formato cambiado a: ${formato}`);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Botón analizar formulario extendido
    const btnExtendido = document.getElementById('btn-analizar-extendido');
    if (btnExtendido) {
        btnExtendido.addEventListener('click', (e) => {
            e.preventDefault();
            misionExtendida.analiza();
        });
    }

    // Botón analizar formulario reducido
    const btnReducido = document.getElementById('btn-analizar-reducido');
    if (btnReducido) {
        btnReducido.addEventListener('click', (e) => {
            e.preventDefault();
            misionReducida.analiza();
        });
    }

    // Selector de validador
    const selectorValidador = document.getElementById('selector-validador') as HTMLSelectElement;
    if (selectorValidador) {
        selectorValidador.addEventListener('change', (e) => {
            actualizarValidador((e.target as HTMLSelectElement).value);
        });
    }

    // Selector de formato
    const selectorFormato = document.getElementById('selector-formato') as HTMLSelectElement;
    if (selectorFormato) {
        selectorFormato.addEventListener('change', (e) => {
            actualizarFormato((e.target as HTMLSelectElement).value);
        });
    }

    // Botón de prueba con roca que cumple criterio Ígneo
    const btnPruebaValida = document.getElementById('btn-prueba-valida');
    if (btnPruebaValida) {
        btnPruebaValida.addEventListener('click', () => {
            const rocaValida: Roca = {
                id: 'AB1234CD',
                nombre: 'Granito Lunar',
                grupo: 'igneas',
                dureza: 7,
                tamanoGrano: 'muy_grueso',
                clasificacion: 'construccion',
                tamanoCristales: 8,
                temperaturaFormacion: 300,
                estructura: 'Cristalina con grandes formaciones',
                formaGranos: 'Angulares y bien definidos',
                textura: 'faneritica'
            };

            console.log('=== PRUEBA CON ROCA VÁLIDA (Ígnea) ===');
            misionExtendida.analiza(rocaValida);
        });
    }

    // Botón de prueba con roca que NO cumple criterio
    const btnPruebaInvalida = document.getElementById('btn-prueba-invalida');
    if (btnPruebaInvalida) {
        btnPruebaInvalida.addEventListener('click', () => {
            const rocaInvalida: Roca = {
                id: 'XY5678ZW',
                nombre: 'Pizarra Lunar',
                grupo: 'metamorficas',
                dureza: 4,
                tamanoGrano: 'grueso',
                clasificacion: 'ornamental',
                tamanoCristales: 3,
                temperaturaFormacion: 250,
                estructura: 'Laminar fina',
                formaGranos: 'Aplanados',
                textura: 'afanitica'
            };

            console.log('=== PRUEBA CON ROCA INVÁLIDA ===');
            misionExtendida.analiza(rocaInvalida);
        });
    }

    console.log('Sistema de análisis de minerales lunares iniciado');
    console.log(`Astronauta: ${agmunsen.dameNombre()} (ID: ${agmunsen.dameId()}, Edad: ${agmunsen.dameEdad()})`);
});
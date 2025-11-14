"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var astronauta_js_1 = require("./astronauta.js");
var validadores_js_1 = require("./validadores.js");
var entrada_js_1 = require("./entrada.js");
var salida_js_1 = require("./salida.js");
var mision_js_1 = require("./mision.js");
// Crear astronauta Agmunsen
var agmunsen = new astronauta_js_1.Astronauta("AG001", "Agmunsen Pérez", 45);
// Crear validadores
var validadorIgneas = new validadores_js_1.ValidadorIgneas();
var validadorMetamorficas = new validadores_js_1.ValidadorMetamorficas();
var validadorSedimentarias = new validadores_js_1.ValidadorSedimentarias();
// Crear entradas y salidas
var entradaExtendida = new entrada_js_1.EntradaExtendida('formulario-extendido');
var entradaReducida = new entrada_js_1.EntradaReducida('formulario-reducido');
var salidaAmericana = new salida_js_1.SalidaAmericana('salida-americana');
var salidaEuropea = new salida_js_1.SalidaEuropea('salida-europea');
// Crear misiones
var misionExtendida = new mision_js_1.Mision(agmunsen, validadorIgneas, entradaExtendida, salidaAmericana);
var misionReducida = new mision_js_1.Mision(agmunsen, validadorIgneas, entradaReducida, salidaEuropea);
// Variables globales para el estado
var validadorActual = 'igneas';
var formatoActual = 'americano';
// Función para actualizar el validador
function actualizarValidador(tipoValidador) {
    validadorActual = tipoValidador;
    var nuevoValidador;
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
    console.log("Validador cambiado a: ".concat(tipoValidador));
}
// Función para actualizar el formato de salida
function actualizarFormato(formato) {
    formatoActual = formato;
    var nuevaSalida = formato === 'americano' ? salidaAmericana : salidaEuropea;
    misionExtendida = new mision_js_1.Mision(agmunsen, misionExtendida.mision, entradaExtendida, nuevaSalida);
    misionReducida = new mision_js_1.Mision(agmunsen, misionReducida.mision, entradaReducida, nuevaSalida);
    // Ocultar ambas salidas
    var salidaAm = document.getElementById('salida-americana');
    var salidaEu = document.getElementById('salida-europea');
    if (salidaAm)
        salidaAm.style.display = 'none';
    if (salidaEu)
        salidaEu.style.display = 'none';
    console.log("Formato cambiado a: ".concat(formato));
}
// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Botón analizar formulario extendido
    var btnExtendido = document.getElementById('btn-analizar-extendido');
    if (btnExtendido) {
        btnExtendido.addEventListener('click', function (e) {
            e.preventDefault();
            misionExtendida.analiza();
        });
    }
    // Botón analizar formulario reducido
    var btnReducido = document.getElementById('btn-analizar-reducido');
    if (btnReducido) {
        btnReducido.addEventListener('click', function (e) {
            e.preventDefault();
            misionReducida.analiza();
        });
    }
    // Selector de validador
    var selectorValidador = document.getElementById('selector-validador');
    if (selectorValidador) {
        selectorValidador.addEventListener('change', function (e) {
            actualizarValidador(e.target.value);
        });
    }
    // Selector de formato
    var selectorFormato = document.getElementById('selector-formato');
    if (selectorFormato) {
        selectorFormato.addEventListener('change', function (e) {
            actualizarFormato(e.target.value);
        });
    }
    // Botón de prueba con roca que cumple criterio Ígneo
    var btnPruebaValida = document.getElementById('btn-prueba-valida');
    if (btnPruebaValida) {
        btnPruebaValida.addEventListener('click', function () {
            var rocaValida = {
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
    var btnPruebaInvalida = document.getElementById('btn-prueba-invalida');
    if (btnPruebaInvalida) {
        btnPruebaInvalida.addEventListener('click', function () {
            var rocaInvalida = {
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
    console.log("Astronauta: ".concat(agmunsen.dameNombre(), " (ID: ").concat(agmunsen.dameId(), ", Edad: ").concat(agmunsen.dameEdad(), ")"));
});

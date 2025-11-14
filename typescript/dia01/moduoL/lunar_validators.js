"use strict";
// validadores.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorSedimentarias = exports.ValidadorMetamorficas = exports.ValidadorIgneas = void 0;
var ValidadorIgneas = /** @class */ (function () {
    function ValidadorIgneas() {
    }
    ValidadorIgneas.prototype.getNombre = function () {
        return "Criterio Ígneas";
    };
    ValidadorIgneas.prototype.isValid = function (roca) {
        return roca.grupo === 'igneas' && roca.tamanoGrano === 'muy_grueso';
    };
    return ValidadorIgneas;
}());
exports.ValidadorIgneas = ValidadorIgneas;
var ValidadorMetamorficas = /** @class */ (function () {
    function ValidadorMetamorficas() {
    }
    ValidadorMetamorficas.prototype.getNombre = function () {
        return "Criterio Metamórficas";
    };
    ValidadorMetamorficas.prototype.isValid = function (roca) {
        return roca.grupo === 'metamorficas' &&
            (roca.tamanoGrano === 'medio' || roca.tamanoGrano === 'fino') &&
            roca.textura === 'vitrea';
    };
    return ValidadorMetamorficas;
}());
exports.ValidadorMetamorficas = ValidadorMetamorficas;
var ValidadorSedimentarias = /** @class */ (function () {
    function ValidadorSedimentarias() {
    }
    ValidadorSedimentarias.prototype.getNombre = function () {
        return "Criterio Sedimentarias";
    };
    ValidadorSedimentarias.prototype.isValid = function (roca) {
        return roca.grupo === 'sedimentarias' && roca.textura === 'faneritica';
    };
    return ValidadorSedimentarias;
}());
exports.ValidadorSedimentarias = ValidadorSedimentarias;

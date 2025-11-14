"use strict";
// astronauta.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Astronauta = void 0;
var Astronauta = /** @class */ (function () {
    function Astronauta(identificador, nombreCompleto, edad) {
        this.identificador = identificador;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }
    Astronauta.prototype.dameId = function () {
        return this.identificador;
    };
    Astronauta.prototype.dameNombre = function () {
        return this.nombreCompleto;
    };
    Astronauta.prototype.dameEdad = function () {
        return this.edad;
    };
    return Astronauta;
}());
exports.Astronauta = Astronauta;

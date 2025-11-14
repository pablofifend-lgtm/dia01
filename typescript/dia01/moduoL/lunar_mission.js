"use strict";
// mision.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mision = void 0;
var Mision = /** @class */ (function () {
    function Mision(piloto, mision, entrada, salida) {
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }
    Mision.prototype.analiza = function (roca) {
        var miRoca;
        if (roca) {
            miRoca = roca;
        }
        else {
            miRoca = this.entrada.dameRoca();
        }
        if (!miRoca) {
            console.log('No se pudo obtener la roca');
            return false;
        }
        var esValida = this.mision.isValid(miRoca);
        console.log("Piloto: ".concat(this.piloto.dameNombre()));
        console.log("Misi\u00F3n: ".concat(this.mision.getNombre()));
        console.log("Roca: ".concat(miRoca.nombre, " - V\u00E1lida: ").concat(esValida ? 'Sí' : 'No'));
        this.entrada.mostrarResultado(esValida);
        if (esValida) {
            this.salida.muestra(miRoca);
        }
        return esValida;
    };
    Mision.prototype.cambiarMision = function (nuevaMision) {
        this.mision = nuevaMision;
    };
    Mision.prototype.getPiloto = function () {
        return this.piloto;
    };
    return Mision;
}());
exports.Mision = Mision;

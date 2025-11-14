"use strict";
// entrada.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaReducida = exports.EntradaExtendida = void 0;
var EntradaExtendida = /** @class */ (function () {
    function EntradaExtendida(formId) {
        this.formId = formId;
    }
    EntradaExtendida.prototype.dameRoca = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var id = (_a = document.getElementById('id')) === null || _a === void 0 ? void 0 : _a.value;
        var nombre = (_b = document.getElementById('nombre')) === null || _b === void 0 ? void 0 : _b.value;
        var grupo = (_c = document.getElementById('grupo')) === null || _c === void 0 ? void 0 : _c.value;
        var dureza = parseInt((_d = document.getElementById('dureza')) === null || _d === void 0 ? void 0 : _d.value);
        var tamanoGrano = (_e = document.getElementById('tamanoGrano')) === null || _e === void 0 ? void 0 : _e.value;
        var clasificacion = (_f = document.getElementById('clasificacion')) === null || _f === void 0 ? void 0 : _f.value;
        var tamanoCristales = parseInt((_g = document.getElementById('tamanoCristales')) === null || _g === void 0 ? void 0 : _g.value);
        var temperaturaFormacion = parseFloat((_h = document.getElementById('temperatura')) === null || _h === void 0 ? void 0 : _h.value);
        var estructura = (_j = document.getElementById('estructura')) === null || _j === void 0 ? void 0 : _j.value;
        var formaGranos = (_k = document.getElementById('formaGranos')) === null || _k === void 0 ? void 0 : _k.value;
        var textura = (_l = document.getElementById('textura')) === null || _l === void 0 ? void 0 : _l.value;
        if (!id || !nombre)
            return null;
        return {
            id: id,
            nombre: nombre,
            grupo: grupo,
            dureza: dureza,
            tamanoGrano: tamanoGrano,
            clasificacion: clasificacion,
            tamanoCristales: tamanoCristales,
            temperaturaFormacion: temperaturaFormacion,
            estructura: estructura,
            formaGranos: formaGranos,
            textura: textura
        };
    };
    EntradaExtendida.prototype.mostrarResultado = function (valida) {
        var resultado = document.getElementById('resultado-extendida');
        if (resultado) {
            resultado.innerHTML = valida ? '😊' : '😠';
            resultado.className = valida ? 'resultado valido' : 'resultado invalido';
        }
    };
    return EntradaExtendida;
}());
exports.EntradaExtendida = EntradaExtendida;
var EntradaReducida = /** @class */ (function () {
    function EntradaReducida(formId) {
        this.formId = formId;
    }
    EntradaReducida.prototype.dameRoca = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var id = (_a = document.getElementById('id-r')) === null || _a === void 0 ? void 0 : _a.value;
        var nombre = (_b = document.getElementById('nombre-r')) === null || _b === void 0 ? void 0 : _b.value;
        var grupo = (_c = document.getElementById('grupo-r')) === null || _c === void 0 ? void 0 : _c.value;
        var dureza = parseInt((_d = document.getElementById('dureza-r')) === null || _d === void 0 ? void 0 : _d.value);
        var tamanoGrano = (_e = document.getElementById('tamanoGrano-r')) === null || _e === void 0 ? void 0 : _e.value;
        var clasificacion = (_f = document.getElementById('clasificacion-r')) === null || _f === void 0 ? void 0 : _f.value;
        var tamanoCristales = parseInt((_g = document.getElementById('tamanoCristales-r')) === null || _g === void 0 ? void 0 : _g.value);
        var temperaturaFormacion = parseFloat((_h = document.getElementById('temperatura-r')) === null || _h === void 0 ? void 0 : _h.value);
        var estructura = (_j = document.getElementById('estructura-r')) === null || _j === void 0 ? void 0 : _j.value;
        var formaGranos = (_k = document.getElementById('formaGranos-r')) === null || _k === void 0 ? void 0 : _k.value;
        var textura = (_l = document.getElementById('textura-r')) === null || _l === void 0 ? void 0 : _l.value;
        if (!id || !nombre)
            return null;
        return {
            id: id,
            nombre: nombre,
            grupo: grupo,
            dureza: dureza,
            tamanoGrano: tamanoGrano,
            clasificacion: clasificacion,
            tamanoCristales: tamanoCristales,
            temperaturaFormacion: temperaturaFormacion,
            estructura: estructura,
            formaGranos: formaGranos,
            textura: textura
        };
    };
    EntradaReducida.prototype.mostrarResultado = function (valida) {
        var resultado = document.getElementById('resultado-reducida');
        if (resultado) {
            resultado.innerHTML = valida ? '😊' : '😠';
            resultado.className = valida ? 'resultado valido' : 'resultado invalido';
        }
    };
    return EntradaReducida;
}());
exports.EntradaReducida = EntradaReducida;

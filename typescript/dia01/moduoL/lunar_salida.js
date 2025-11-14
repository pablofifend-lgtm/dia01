"use strict";
// salida.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalidaEuropea = exports.SalidaAmericana = void 0;
var SalidaAmericana = /** @class */ (function () {
    function SalidaAmericana(contenedorId) {
        this.contenedorId = contenedorId;
    }
    SalidaAmericana.prototype.kelvinAFahrenheit = function (kelvin) {
        return (kelvin - 273.15) * 9 / 5 + 32;
    };
    SalidaAmericana.prototype.muestra = function (roca) {
        var contenedor = document.getElementById(this.contenedorId);
        if (!contenedor)
            return;
        var traduccionGrupo = {
            'igneas': 'Igneous',
            'metamorficas': 'Metamorphic',
            'sedimentarias': 'Sedimentary'
        };
        var traduccionGrano = {
            'muy_grueso': 'Very coarse grain',
            'grueso': 'Coarse grain',
            'medio': 'Medium grain',
            'fino': 'Fine grain'
        };
        var traduccionClasificacion = {
            'construccion': 'Construction',
            'ornamental': 'Ornamental',
            'utensilios': 'Tools',
            'machacada': 'Crushed'
        };
        var traduccionTextura = {
            'vitrea': 'Glassy',
            'afanitica': 'Aphanitic',
            'faneritica': 'Phaneritic'
        };
        contenedor.innerHTML = "\n            <h3>American Format</h3>\n            <p><strong>ID:</strong> ".concat(roca.id, "</p>\n            <p><strong>Name:</strong> ").concat(roca.nombre, "</p>\n            <p><strong>Group:</strong> ").concat(traduccionGrupo[roca.grupo], "</p>\n            <p><strong>Hardness:</strong> ").concat(roca.dureza, " (Mohs)</p>\n            <p><strong>Grain Size:</strong> ").concat(traduccionGrano[roca.tamanoGrano], "</p>\n            <p><strong>Classification:</strong> ").concat(traduccionClasificacion[roca.clasificacion], "</p>\n            <p><strong>Crystal Size:</strong> ").concat(roca.tamanoCristales, "</p>\n            <p><strong>Formation Temperature:</strong> ").concat(this.kelvinAFahrenheit(roca.temperaturaFormacion).toFixed(2), "\u00B0F</p>\n            <p><strong>Structure:</strong> ").concat(roca.estructura, "</p>\n            <p><strong>Grain Shape:</strong> ").concat(roca.formaGranos, "</p>\n            <p><strong>Texture:</strong> ").concat(traduccionTextura[roca.textura], "</p>\n        ");
        contenedor.style.display = 'block';
    };
    return SalidaAmericana;
}());
exports.SalidaAmericana = SalidaAmericana;
var SalidaEuropea = /** @class */ (function () {
    function SalidaEuropea(contenedorId) {
        this.contenedorId = contenedorId;
    }
    SalidaEuropea.prototype.kelvinACelsius = function (kelvin) {
        return kelvin - 273.15;
    };
    SalidaEuropea.prototype.muestra = function (roca) {
        var contenedor = document.getElementById(this.contenedorId);
        if (!contenedor)
            return;
        var traduccionGrupo = {
            'igneas': 'Ígneas',
            'metamorficas': 'Metamórficas',
            'sedimentarias': 'Sedimentarias'
        };
        var traduccionGrano = {
            'muy_grueso': 'Grano muy grueso',
            'grueso': 'Grano grueso',
            'medio': 'Grano medio',
            'fino': 'Grano fino'
        };
        var traduccionClasificacion = {
            'construccion': 'Construcción',
            'ornamental': 'Ornamental',
            'utensilios': 'Utensilios',
            'machacada': 'Machacada'
        };
        var traduccionTextura = {
            'vitrea': 'Vítrea',
            'afanitica': 'Afanítica',
            'faneritica': 'Fanerítica'
        };
        contenedor.innerHTML = "\n            <h3>Formato Europeo</h3>\n            <p><strong>ID:</strong> ".concat(roca.id, "</p>\n            <p><strong>Nombre:</strong> ").concat(roca.nombre, "</p>\n            <p><strong>Grupo:</strong> ").concat(traduccionGrupo[roca.grupo], "</p>\n            <p><strong>Dureza:</strong> ").concat(roca.dureza, " (Mohs)</p>\n            <p><strong>Tama\u00F1o de Grano:</strong> ").concat(traduccionGrano[roca.tamanoGrano], "</p>\n            <p><strong>Clasificaci\u00F3n:</strong> ").concat(traduccionClasificacion[roca.clasificacion], "</p>\n            <p><strong>Tama\u00F1o de Cristales:</strong> ").concat(roca.tamanoCristales, "</p>\n            <p><strong>Temperatura de Formaci\u00F3n:</strong> ").concat(this.kelvinACelsius(roca.temperaturaFormacion).toFixed(2), "\u00B0C</p>\n            <p><strong>Estructura:</strong> ").concat(roca.estructura, "</p>\n            <p><strong>Forma de Granos:</strong> ").concat(roca.formaGranos, "</p>\n            <p><strong>Textura:</strong> ").concat(traduccionTextura[roca.textura], "</p>\n        ");
        contenedor.style.display = 'block';
    };
    return SalidaEuropea;
}());
exports.SalidaEuropea = SalidaEuropea;

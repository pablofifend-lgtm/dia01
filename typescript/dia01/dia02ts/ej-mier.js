var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
var Ejecutivo = /** @class */ (function (_super) {
    __extends(Ejecutivo, _super);
    function Ejecutivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ejecutivo.prototype.dameSueldo = function () {
        return 100 * this.edad;
    };
    return Ejecutivo;
}(Persona));
var Secretario = /** @class */ (function (_super) {
    __extends(Secretario, _super);
    function Secretario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Secretario.prototype.dameSueldo = function () {
        return 50 * this.edad;
    };
    return Secretario;
}(Persona));
var Aprendiz = /** @class */ (function (_super) {
    __extends(Aprendiz, _super);
    function Aprendiz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aprendiz.prototype.dameSueldo = function () {
        return 10 * this.edad;
    };
    return Aprendiz;
}(Persona));
var ejecutivo1 = new Ejecutivo("Pablo", 30);
var ejecutivo2 = new Ejecutivo("Lucía", 20);
var secretario1 = new Secretario("María", 20);
var secretario2 = new Secretario("Pedro", 22);
var aprendiz1 = new Aprendiz("Juan", 22);
var aprendiz2 = new Aprendiz("Laura", 24);
var personas = [
    ejecutivo1,
    ejecutivo2,
    secretario1,
    secretario2,
    aprendiz1,
    aprendiz2
];
var sueldoTotal = 0;
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var p = personas_1[_i];
    console.log("".concat(p.nombre, " (").concat(p.constructor.name, ") gana ").concat(p.dameSueldo(), "\u20AC"));
    sueldoTotal += p.dameSueldo();
}
console.log(" Sueldo total: ".concat(sueldoTotal, "\u20AC"));

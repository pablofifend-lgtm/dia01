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
//solo van a heredar a otros al ser abstract
var Figura = /** @class */ (function () {
    function Figura(x, y) {
        if (x < 0)
            this.x = 0;
        else
            this.x = x;
        if (y < 0)
            this.y = 0;
        else
            this.y = y;
    }
    return Figura;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(x, y, lado1, lado2, base, altura) {
        var _this = _super.call(this, x, y) || this;
        _this.lado1 = lado1;
        _this.lado2 = lado2;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    // Perímetro = suma de los 3 lados
    Triangulo.prototype.damePerimetro = function () {
        return this.lado1 + this.lado2 + this.base;
    };
    // Superficie (área) = base * altura / 2
    Triangulo.prototype.dameSuperficie = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(Figura));
// ⬛ RECTÁNGULO
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(x, y, base, altura) {
        var _this = _super.call(this, x, y) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    // Perímetro = 2*(base + altura)
    Rectangulo.prototype.damePerimetro = function () {
        return 2 * (this.base + this.altura);
    };
    // Superficie (área) = base * altura
    Rectangulo.prototype.dameSuperficie = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Figura));
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    //constructor(x: number = 0, y: number = 0, longitud: number = 0) {
    /*this.x = x;
    this.y = y;*/
    function Cuadrado(x, y, longitud) {
        //esta llamando a la clase padre figura
        var _this = _super.call(this, x, y) || this;
        _this.longitud = longitud;
        return _this;
    }
    Cuadrado.prototype.damePerimetro = function () {
        return this.longitud * 4;
    };
    Cuadrado.prototype.dameSuperficie = function () {
        return this.longitud * this.longitud;
    };
    return Cuadrado;
}(Figura));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    //constructor(x: number = 0, y: number = 0, longitud: number = 0) {
    /*this.x = x;
    this.y = y;*/
    function Circulo(x, y, longitudCi) {
        //esta llamando a la clase padre figura
        var _this = _super.call(this, x, y) || this;
        _this.longitudCi = longitudCi;
        return _this;
    }
    Circulo.prototype.damePerimetro = function () {
        return 2 * Math.PI * this.longitudCi;
    };
    Circulo.prototype.dameSuperficie = function () {
        return Math.PI * Math.pow(this.longitudCi, 2);
    };
    Circulo.prototype.damePosicion = function () {
        return "Pos X: " + this.x + "Pos Y:" + this.y;
    };
    return Circulo;
}(Figura));
var miCuadrado1 = new Cuadrado(3, 3, 4);
var miCuadrado2 = new Cuadrado(5, 5, 7);
var miCirculo1 = new Circulo(5, 6, 5);
var miCirculo2 = new Circulo(7, 4, 3);
var miTriangulo = new Triangulo(5, 5, 8, 8, 8, 6.928);
var miRectangulo = new Rectangulo(2, 2, 5, 10);
var Arreglo = [new Cuadrado(4, 5, 6), new Cuadrado(3, 3, 4), new Circulo(5, 6, 7),
    new Rectangulo(5, 6, 3, 4)];
Arreglo.forEach(function (element) {
    console.log(element.damePerimetro());
    console.log(element.dameSuperficie());
});
var miCuadrado = new Cuadrado(1, 1, 10);
console.log("El cuadrado de lados 4, tiene un perimetro de ".concat(miCuadrado1.damePerimetro()));
console.log("El cuadrado de lados 4, tiene un perimetro de ".concat(miCuadrado1.damePerimetro()));
console.log("El cuadrado de lados 7, tiene un perimetro de ".concat(miCuadrado2.damePerimetro()));
console.log("El cuadrado de lados 7, tiene un perimetro de ".concat(miCuadrado2.damePerimetro()));
console.log("El circulo de radio 5, tiene un perimetro de ".concat(miCirculo1.damePerimetro()));
console.log("El circulo de radio 5, tiene un area de ".concat(miCirculo1.dameSuperficie()));
console.log("El circulo de radio 3, tiene un perimetro de ".concat(miCirculo2.damePerimetro()));
console.log("El circulo de radio 3, tiene un area de ".concat(miCirculo2.dameSuperficie()));
console.log("El triangulo tiene un perimetro de ".concat(miTriangulo.damePerimetro()));
console.log("El triangulo tiene un superficie de ".concat(miTriangulo.dameSuperficie()));
console.log("El Rectangulo tiene un perimetro de ".concat(miRectangulo.damePerimetro()));
console.log("El Rectangulo tiene un superficie de ".concat(miRectangulo.dameSuperficie()));

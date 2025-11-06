"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    //class es el metodo
    //contructor las propiedades
    function Alumno(nombre, edad, soltero) {
        this.nombre = nombre;
        this.edad = edad;
        this.soltero = soltero;
    }
    return Alumno;
}());
var al1 = new Alumno("manolo", 67, true);
var al2 = new Alumno("ana", 43, false);
var Boton = /** @class */ (function () {
    function Boton(posX, posY, textoBoton) {
        this.posX = posX;
        this.posY = posY;
        this.textoBoton = textoBoton;
    }
    return Boton;
}());
/*const b1 = new Boton(1, 1, `1`)

const b2 = new Boton(2, 2, `2`)

const b3 = new Boton(3, 3, `hola`)*/
var b1 = new Boton(1, 2, "hola");
var Viewport = /** @class */ (function () {
    function Viewport(anchura, altura, color) {
        this.anchura = anchura;
        this.altura = altura;
        this.color = color;
    }
    return Viewport;
}());
var v1 = new Viewport(5, 5, "green");
var v2 = new Viewport(10, 10, "blue");

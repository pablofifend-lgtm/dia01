class Alumno {
    nombre: string;
    edad: number;
    soltero: boolean;
    //class es el metodo
    //contructor las propiedades
    constructor(nombre: string, edad: number, soltero: boolean) {
        this.nombre = nombre
        this.edad = edad
        this.soltero = soltero
    }
}
const al1 = new Alumno(`manolo`, 67, true)

const al2 = new Alumno(`ana`, 43, false)

class Boton {
    posX: number;
    posY: number;
    textoBoton: string;
    constructor(posX: number, posY: number, textoBoton: string) {
        this.posX = posX
        this.posY = posY
        this.textoBoton = textoBoton
    }
}
/*const b1 = new Boton(1, 1, `1`)

const b2 = new Boton(2, 2, `2`)

const b3 = new Boton(3, 3, `hola`)*/
const b1 = new Boton(1, 2, `hola`)

class Viewport {
    anchura: number;
    altura: number;
    color: string;
    constructor(anchura: number, altura: number, color: string) {
        this.anchura = anchura
        this.altura = altura
        this.color = color
    }
}
const v1 = new Viewport(5, 5, `green`)
const v2 = new Viewport(10, 10, `blue`)

export { }

//solo van a heredar a otros al ser abstract
abstract class Figura {
    readonly x: number;
    readonly y: number;
    //todos los hijos tendran estos metodos
    abstract damePerimetro(): number;
    abstract dameSuperficie(): number;
    constructor(x: number, y: number) {
        if (x < 0)
            this.x = 0;
        else
            this.x = x;
        if (y < 0)
            this.y = 0;
        else
            this.y = y;
    }
}
class Triangulo extends Figura {
    lado1: number;
    lado2: number;
    base: number;
    altura: number;

    constructor(x: number, y: number, lado1: number, lado2: number, base: number, altura: number) {
        super(x, y);
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.base = base;
        this.altura = altura;
    }

    // Perímetro = suma de los 3 lados
    damePerimetro(): number {
        return this.lado1 + this.lado2 + this.base;
    }

    // Superficie (área) = base * altura / 2
    dameSuperficie(): number {
        return (this.base * this.altura) / 2;
    }
}

// ⬛ RECTÁNGULO
class Rectangulo extends Figura {
    base: number;
    altura: number;

    constructor(x: number, y: number, base: number, altura: number) {
        super(x, y);
        this.base = base;
        this.altura = altura;
    }

    // Perímetro = 2*(base + altura)
    damePerimetro(): number {
        return 2 * (this.base + this.altura);
    }

    // Superficie (área) = base * altura
    dameSuperficie(): number {
        return this.base * this.altura;
    }
}

class Cuadrado extends Figura {
    /*x: number;
    y: number;*/
    longitud: number;
    //constructor(x: number = 0, y: number = 0, longitud: number = 0) {
    /*this.x = x;
    this.y = y;*/
    constructor(x: number, y: number, longitud: number) {
        //esta llamando a la clase padre figura
        super(x, y);
        this.longitud = longitud;
    }
    damePerimetro(): number {
        return this.longitud * 4;
    }
    dameSuperficie(): number {
        return this.longitud * this.longitud;
    }
}
class Circulo extends Figura {
    /*x: number;
    y: number;*/
    longitudCi: number;
    //constructor(x: number = 0, y: number = 0, longitud: number = 0) {
    /*this.x = x;
    this.y = y;*/
    constructor(x: number, y: number, longitudCi: number) {
        //esta llamando a la clase padre figura
        super(x, y);
        this.longitudCi = longitudCi;
    } damePerimetro(): number {
        return 2 * Math.PI * this.longitudCi;
    }
    dameSuperficie(): number {
        return Math.PI * Math.pow(this.longitudCi, 2);
    }
    damePosicion(): string {
        return "Pos X: " + this.x + "Pos Y:" + this.y;
    }
}
let miCuadrado1 = new Cuadrado(3, 3, 4);
let miCuadrado2 = new Cuadrado(5, 5, 7);
let miCirculo1 = new Circulo(5, 6, 5);
let miCirculo2 = new Circulo(7, 4, 3);
let miTriangulo = new Triangulo(5, 5, 8, 8, 8, 6.928);
let miRectangulo = new Rectangulo(2, 2, 5, 10);

let Arreglo: Figura[] = [new Cuadrado(4, 5, 6), new Cuadrado(3, 3, 4), new Circulo(5, 6, 7),
new Rectangulo(5, 6, 3, 4)];
Arreglo.forEach(element => {
    console.log(element.damePerimetro());
    console.log(element.dameSuperficie());
});
let miCuadrado: Figura = new Cuadrado(1, 1, 10);

console.log(`El cuadrado de lados 4, tiene un perimetro de ${miCuadrado1.damePerimetro()}`);
console.log(`El cuadrado de lados 4, tiene un perimetro de ${miCuadrado1.damePerimetro()}`);
console.log(`El cuadrado de lados 7, tiene un perimetro de ${miCuadrado2.damePerimetro()}`);
console.log(`El cuadrado de lados 7, tiene un perimetro de ${miCuadrado2.damePerimetro()}`);
console.log(`El circulo de radio 5, tiene un perimetro de ${miCirculo1.damePerimetro()}`);
console.log(`El circulo de radio 5, tiene un area de ${miCirculo1.dameSuperficie()}`);
console.log(`El circulo de radio 3, tiene un perimetro de ${miCirculo2.damePerimetro()}`);
console.log(`El circulo de radio 3, tiene un area de ${miCirculo2.dameSuperficie()}`);
console.log(`El triangulo tiene un perimetro de ${miTriangulo.damePerimetro()}`);
console.log(`El triangulo tiene un superficie de ${miTriangulo.dameSuperficie()}`);
console.log(`El Rectangulo tiene un perimetro de ${miRectangulo.damePerimetro()}`);
console.log(`El Rectangulo tiene un superficie de ${miRectangulo.dameSuperficie()}`);

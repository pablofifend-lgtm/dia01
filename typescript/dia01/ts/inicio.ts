class Punto {
    x: number;
    y: number;
    //solo se puede cambiarse en el constructor
    readonly color: string;
    constructor(x: number = 0, y: number = 0, color: string = "rojo") {
        //guardar el valor
        this.x = x;
        this.y = y;
        this.color = color;
    }
    //metodo para mostrar la cadena
    mostrar(): string {
        //return((`${miPrimerPunto.x}, y la posicion es: ${miPrimerPunto.y}`))
        return `la posicion x es: ${this.x}, y la posicion y es : ${this.y}`

    }
}
const miPrimerPunto = new Punto(4, 5, "rojo");
const miPrimerPunto2 = new Punto(4)
const miPrimerPunto3 = new Punto(4, 5)
const miPrimerPunto4 = new Punto(4, 5, "verde")
miPrimerPunto.x = 50;
miPrimerPunto.y = 25;
//miPrimerPunto.color = "verde"

//console.log(`${miPrimerPunto.x}, y la posicion es: ${miPrimerPunto.y}`);
console.log(miPrimerPunto.mostrar())

/*let nombre = "jacinto";
var apellido = "aisa";
let nombreCompleto = nombre + apellido;
document.createElement("<p>");
nombreCompleto = 89;
{
    nombre: "jacinto";
    apellido: "aisa";

}
{
    edad: "17";
    numMat: "todo";

}*/

export { };
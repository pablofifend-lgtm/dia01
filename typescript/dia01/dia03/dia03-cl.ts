interface VolumenRepuesto {
    dameVolumen(): number;
}
//el interface se puede poner en todas las clases
//es como una clase, te dice el contenido
//el abstracto solo se puede poner en una clase para heredar
//si quieres más de una clase para heredar hay que hacer interface y poner implements en vez de extends
interface Repuestos {
    /*id: string;
    precio: number;
    constructor(id: string, precio: number) {
        this.id = id;
        this.precio = precio;
    }*/
    damePrecio(): number;

    dameId(): string;
}

class Rueda implements Repuestos, VolumenRepuesto {
    /*constructor(id: string, precio: number) {
        super(id, precio)
    }*/
    dameVolumen(): number {
        return 100;
    }
    damePrecio(): number {
        return 200;
    }
    dameId() {
        return `Soy una rueda `;
    }

}

class Retrovisor implements Repuestos, VolumenRepuesto {
    /*constructor(id: string, precio: number) {
        super(id, precio)
    }*/

    dameVolumen(): number {
        return 60;
    }
    damePrecio(): number {
        return 50;
    }
    dameId() {
        return `Soy un retrovisor`;
    }
}
class LuzCruce implements Repuestos, VolumenRepuesto {
    /*constructor(id: string, precio: number) {
        super(id, precio)
    }*/

    dameVolumen(): number {
        return 40;
    }
    damePrecio(): number {
        return 60;
    }
    dameId() {
        //return `Soy una luz dec ruce y mi es ${this.id}`;
        return `Soy una luz dec ruce`;
    }
}
class Pegatina implements Repuestos {
    damePrecio(): number {
        return 1;
    }
    dameId(): string {
        return "Soy una pegatina";
    }
}
/*let rueda1 = new Rueda("1", 200);
let rueda2 = new Rueda("2", 200);

let retrovisor1 = new Retrovisor("3", 50);
let retrovisor2 = new Retrovisor("4", 50);

let luz1 = new LuzCruce("4", 60);
let luz2 = new LuzCruce("5", 60);*/
let ArrayR: Repuestos[] = [];
ArrayR.push(new Rueda(), new Rueda(), new Retrovisor(), new Retrovisor(), new LuzCruce(), new LuzCruce());
/*ArrayR.push(rueda1);
ArrayR.push(rueda2);
ArrayR.push(retrovisor1);
ArrayR.push(retrovisor2);
ArrayR.push(luz1);
ArrayR.push(luz2);*/
let total: number = 0;

ArrayR.forEach(element => {
    total += element.damePrecio();
    //console.log(element.dameId());
})
console.log("El total es: " + total);
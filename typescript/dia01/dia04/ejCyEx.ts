class Envio {
    id: string;
    num: number;
    precio: number;
    recibido: boolean;
    constructor(id: string, num: number, precio: number, recibido: boolean) {
        this.id = id;
        this.num = num;
        this.precio = precio;
        this.recibido = recibido;
    }
    calcularIVA(): string {
        //const iva = precio * 0.21;
        //return iva;
        return `El iva va a ser: ${this.precio * 0.21}`;
    }

    /*precioConIVA(precio: number): number {
        return precio * 1.21;
    }*/
    validarId(): boolean {
        const regex = /^[A-H]{2}[0-9]{2}[I-Z]{2}$/;
        if (!regex.test(this.id)) {
            console.log("Error")
            return false;
        } else {
            return true;
        }


    }
}

const envio1 = new Envio("A12IJ", 101, 100, true);
const envio2 = new Envio("CD34KL", 102, 250, false);
const envio3 = new Envio("GH56MN", 103, 400, true);

let ArrayEnv: Envio[] = [];
ArrayEnv.push(envio1);
ArrayEnv.push(envio2);
ArrayEnv.push(envio3);
ArrayEnv.forEach(e => {
    if (e.validarId()) {

        console.log(e.calcularIVA())
    }
})

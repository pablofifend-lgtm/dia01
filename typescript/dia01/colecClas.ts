abstract class Regalo {
    id: string;
    precioCompra: number;
    precioVenta: number;
    constructor(id: string, precioCompra: number, precioVenta: number) {
        this.id = id;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        if (!/^[A-Z]{3}\d{4}$/.test(this.id)) {
            throw new Error(`Identificador inválido: ${this.id}`);

        }
    }
    private generarId(): string {
        let letras = "";
        for (let i = 0; i < 3; i++) {
            letras += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }

        const numeros = Math.floor(1000 + Math.random() * 9000);
        return letras + numeros;
    }
    beneficio(): number {
        return this.precioVenta - this.precioCompra;
    }
}

class JarronMing extends Regalo {
    /*constructor() {
        super(100, 200);
    }*/
}
class TazaMong extends Regalo {

}

class ColganteChulin extends Regalo {

}
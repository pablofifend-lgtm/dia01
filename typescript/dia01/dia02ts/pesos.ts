class Persona {
    nombre: string;
    altura: number;
    peso: number;
    constructor(nombre: string, altutra: number, peso: number) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altutra;
    }
    dameIMC(): string {
        let indice = this.peso / Math.pow(this.altura, 2);
        let cadena = `la persona de nombre ${this.nombre} tiene una altura en metros de ${this.altura} y un peso de ${this.peso}`
        if (indice < 18.5)
            cadena += "Peso inferior al normal";
        else if (indice >= 18.5 && indice <= 24.9)
            cadena += "Peso normal";
        else if (indice >= 25 && indice <= 29.9)
            cadena += "Gordico";
        else
            cadena += "Obeso"
        return cadena
    }

}
let jacinto = new Persona("jacinto", 1.95, 140)
console.log(`${jacinto.dameIMC()}`);
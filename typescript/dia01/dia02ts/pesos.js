var Persona = /** @class */ (function () {
    function Persona(nombre, altutra, peso) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altutra;
    }
    Persona.prototype.dameIMC = function () {
        var indice = this.peso / Math.pow(this.altura, 2);
        var cadena = "la persona de nombre ".concat(this.nombre, " tiene una altura en metros de ").concat(this.altura, " y un peso de ").concat(this.peso);
        if (indice < 18.5)
            cadena += "Peso inferior al normal";
        else if (indice >= 18.5 && indice <= 24.9)
            cadena += "Peso normal";
        else if (indice >= 25 && indice <= 29.9)
            cadena += "Gordico";
        else
            cadena += "Obeso";
        return cadena;
    };
    return Persona;
}());
var Jacinto = new Persona("nombre", 1.95, 140);
console.log(Jacinto);

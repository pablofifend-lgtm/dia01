let numeros: number[] = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (let elemento of numeros) {
    console.log(elemento);
}

numeros.forEach(x => console.log(x));
numeros.forEach(muestra);

function muestra(numero: number): void {
    console.log(numero);
}
//cada uno de los elementos de x
//devuelve otro array
numeros.map(x => x * x);
var textos = numeros.map(potenciar);
function potenciar(numero: number): string {
    return "Holaaaa " + numero;
}
textos.forEach(x => console.log);

numeros.filter(x => x % 2 == 0).map(x => x * x).forEach(muestra);
numeros.reduce(sumar);

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}
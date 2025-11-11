/*interface ICadenable{
    TodosLosElementosMayorQue(numeroCaractereres: number) : boolean
    MuestraContenidoArray(): void
    FiltraPorPrimeraLetra(letra: string):string[]
}
class ProcesoCadenasV01 implements ICadenable{
    private elementos string[];

    constructor(elementos: string[]){
        this.elementos = elementos;
    }
    InvierteCadenas(): string[]{
        if(!this.elementos || this.elementos.length === 0) return [];
        return this.elementos.map
    }
    FiltraPorPrimeraLetra(letra: string): string {

    }
    MuestraContenidoArray()
}*/

let nom01 = [
    "Andra",
    "Aneu",
    "Arlet",
    "Ehud",
    "Indivar",
    "Samay",
    "Sança",
    "Tanit",
    "Uxia",
    "Zenda"
];

let nom02 = [
    "Abba",
    "Acfred",
    "Areu",
    "Drac",
    "Guim",
    "Iol",
    "Kilian",
    "Mirt",
    "Yannick",
    "Zigor",
    "Tanit"
];

function mostrar(nA: string, ar: string[]): void {
    console.log(`\n${nA}`);
    ar.forEach((nombre, i) => console.log(`${i + 1}. ${nombre}`));
}

mostrar("nom01", nom01);
mostrar("nom02", nom02);

let mayores: boolean = nom01.every((nombre) => nombre.length > 2);
console.log(`\n${mayores}`);

let sup01: string[] = nom01.filter((nombre) => nombre.toLowerCase() > "i");

let sup02: string[] = nom02.filter((nombre) => nombre.toLowerCase() > "i");

console.log("\nMayor que i: ", sup01);
console.log("\nMayor que i: ", sup02);

//palindromos

//encontrar tanit y jacinto con index of

console.log("\nEncontrar Tanit1: ", nom01.indexOf("Tanit"));
console.log("\nEncontrar Tanit2: ", nom02.indexOf("Tanit"));
console.log("\nEncontrar Jacinto1: ", nom01.indexOf("Jacinto"));
console.log("\nEncontrar Jacinto2: ", nom02.indexOf("Jacinto"));

let juntos: string = nom01.join(", ") + nom02.join(", ");
console.log(juntos);

//7.- Crear un nuevo array usando el de nombres01 existente para crear un nuevo array de
//números almacenando en dicho array la cantidad de caracteres que tienen el nombre.

let long: number[] = nom01.map((nombre) => nombre.length);
console.log(long);

nom01.pop();
nom02.pop();
console.log("\n", nom01);
console.log("\n", nom02);

nom01.push("Jacinto");

nom02.push("Jacinto");
console.log(nom01);
console.log(nom02);

//running
/*let run: number[] = [];
long.reduce((acumulado, val, in) => {
    run[in] = acumulado + val;
    return run[in];
}, 0);*/
const runningTotal1: number[] = [];

long.reduce((acumulado, valor, i) => {
    runningTotal1[i] = acumulado + valor;
    return runningTotal1[i];
}, 0);
console.log("\n", runningTotal1);

let subar1: string[] = nom01.slice(0, 7);
let subar2: string[] = nom02.slice(4, 6);
let nuevoA: string[] = subar1.concat(subar2);
console.log(nuevoA);

/*const algunoMasDe6_01: boolean = nombres01.some((nombre) => nombre.length > 6);
const algunoMasDe6_02: boolean = nombres02.some((nombre) => nombre.length > 6);
console.log("\n¿Algún nombre de nombres01 con longitud > 6?:", algunoMasDe6_01);
console.log("¿Algún nombre de nombres02 con longitud > 6?:", algunoMasDe6_02);
*/

function longitu(arra: string[]): boolean {
    for (let index = 0; index < arra.length; index++) {
        if (arra[index].length > 6) {
            return true;
        }
    }
    return false;
}

let r1 = longitu(nom01);
let r2 = longitu(nom02);

if (r1) {
    console.log("Hay palabras asi");
} else {
    console.log("no lo hay")
}

if (r2) {
    console.log("Hay palabras asi");
} else {
    console.log("no lo hay")
}
console.log("\n", r1);
console.log("\n", r2);

//por defecto te lo ordena de forma ascendente
//se puede hacer con ...
let or1 = nom01.sort();
let des1 = nom01.slice().sort().reverse();
let or2 = nom02.sort();
let des2 = or2.slice().sort().reverse();
console.log(or1);
console.log(des1);
console.log(or2);
console.log(des2);






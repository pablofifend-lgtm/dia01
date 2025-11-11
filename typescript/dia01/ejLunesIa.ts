// 1️⃣ Crear los arrays nombres01 y nombres02
let nombres01: string[] = [
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

let nombres02: string[] = [
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

// 2️⃣ Función para mostrar los elementos de un array por consola
function mostrarArray(nombreArray: string, array: string[]): void {
    console.log(`\nElementos del array ${nombreArray}:`);
    array.forEach((nombre, i) => console.log(`${i + 1}. ${nombre}`));
}

// Mostrar ambos arrays
mostrarArray("nombres01", nombres01);
mostrarArray("nombres02", nombres02);

// 3️⃣ Comprobar que todos los elementos de nombres01 tienen longitud > 2
const todosMayorQueDos: boolean = nombres01.every((nombre) => nombre.length > 2);
console.log("\n¿Todos los nombres de nombres01 tienen longitud > 2?:", todosMayorQueDos);

// 4️⃣ Filtrar los nombres mayores que la letra 'i'
const mayoresQueI_01: string[] = nombres01.filter((nombre) => nombre.toLowerCase() > "i");
const mayoresQueI_02: string[] = nombres02.filter((nombre) => nombre.toLowerCase() > "i");
console.log("\nNombres mayores que 'i' en nombres01:", mayoresQueI_01);
console.log("Nombres mayores que 'i' en nombres02:", mayoresQueI_02);

// 5️⃣ Función que devuelve el palíndromo de un nombre
//hace que la funcion nombre 
function palindromo(nombre: string): string {
    return nombre.split("").reverse().join("");
}

const palindromos01: string[] = nombres01.map(palindromo);
const palindromos02: string[] = nombres02.map(palindromo);
console.log("\nPalíndromos de nombres01:", palindromos01);
console.log("Palíndromos de nombres02:", palindromos02);

// 6️⃣ Buscar "Tanit" y "Jacinto" con indexOf
console.log("\nIndexOf 'Tanit' en nombres01:", nombres01.indexOf("Tanit"));
console.log("IndexOf 'Tanit' en nombres02:", nombres02.indexOf("Tanit"));
console.log("IndexOf 'Jacinto' en nombres01:", nombres01.indexOf("Jacinto"));
console.log("IndexOf 'Jacinto' en nombres02:", nombres02.indexOf("Jacinto"));
// Si no existe, indexOf devuelve -1

// 7️⃣ Unir los elementos separados por coma (join)
const lista01: string = nombres01.join(", ");
const lista02: string = nombres02.join(", ");
console.log("\nLista nombres01:", lista01);
console.log("Lista nombres02:", lista02);

// 8️⃣ Crear nuevo array con la longitud de cada nombre
const longitudes01: number[] = nombres01.map((nombre) => nombre.length);
console.log("\nLongitudes de nombres01:", longitudes01);

// 9️⃣ Eliminar el último elemento de ambas listas
nombres01.pop();
nombres02.pop();
console.log("\nDespués de eliminar el último elemento:");
mostrarArray("nombres01", nombres01);
mostrarArray("nombres02", nombres02);

// 🔟 Añadir el nombre “Jacinto” a ambas listas
nombres01.push("Jacinto");
nombres02.push("Jacinto");
console.log("\nDespués de añadir 'Jacinto':");
mostrarArray("nombres01", nombres01);
mostrarArray("nombres02", nombres02);

// 11️⃣ Running total (suma acumulativa de longitudes)
const runningTotal: number[] = [];
longitudes01.reduce((acumulado, valor, i) => {
    runningTotal[i] = acumulado + valor;
    return runningTotal[i];
}, 0);
console.log("\nRunning total de longitudes nombres01:", runningTotal);

// 12️⃣ Subarray del 1 al 7 (nombres01) y del 4 al 6 (nombres02)
const sub01: string[] = nombres01.slice(0, 7);
const sub02: string[] = nombres02.slice(3, 6);
const nuevoArray: string[] = sub01.concat(sub02);
console.log("\nNuevo array con subarrays combinados:", nuevoArray);

// 13️⃣ Comprobar si algún nombre tiene longitud > 6
const algunoMasDe6_01: boolean = nombres01.some((nombre) => nombre.length > 6);
const algunoMasDe6_02: boolean = nombres02.some((nombre) => nombre.length > 6);
console.log("\n¿Algún nombre de nombres01 con longitud > 6?:", algunoMasDe6_01);
console.log("¿Algún nombre de nombres02 con longitud > 6?:", algunoMasDe6_02);

// 14️⃣ Ordenar ascendente y descendente
const asc01: string[] = [...nombres01].sort();
const desc01: string[] = [...asc01].reverse();
const asc02: string[] = [...nombres02].sort();
const desc02: string[] = [...asc02].reverse();
console.log("\nOrden ascendente nombres01:", asc01);
console.log("Orden descendente nombres01:", desc01);
console.log("Orden ascendente nombres02:", asc02);
console.log("Orden descendente nombres02:", desc02);

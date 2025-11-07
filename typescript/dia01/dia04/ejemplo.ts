const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
    { name: 'oranges', quantity: 7 }
];

function damePuntoDeVista(fun) {
    return inventory.forEach(fun);
}

damePuntoDeVista(muestraContable);
damePuntoDeVista(muestraFrutero);

function findCherries(fruit) {
    return fruit.name === 'cherries';
}
function mayorQueCero(fruit) {
    return fruit.quantity > 0;
}

function muestraContable(fruit) { : void
    console.log(fruit.quantity);
}

function muestraFrutero(fruit): void {

}
function hazAlgo(fruit): void {
    console.log(fruit);
}

function findManzana(apples) {
    return filterQuantity.name = "apples";
}
function filterQuantity(fruit) {
    return fruit.quantity > 2;
}
inventory.find.(findCherries); // { name: 'cherries', quantity: 5 }
/* OR */
//inventory.find(e => e.name === 'apples'); // { name: 'apples', quantity: 2 }
inventory.filter(findCherries);
inventory.filter(filterQuantity);

inventory.find(e => e.name === 'apples'); // { name: 'apples', quantity: 2 }

inventory.every(mayorQueCero);
inventory.forEach(hazAlgo);
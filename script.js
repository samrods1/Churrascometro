let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate() {
    console.log("calculating...");

    let adults = inputAdults.value;
    let children = inputAdults.value;
    let duration = inputDuration.value;

    let totalAmountMeat = meatPP(duration) * adults + meatPP(duration) / 2 * children;
    console.log(totalAmountMeat);
    let totalAmountBeer = beerPP(duration) * adults;
    console.log(totalAmountMeat);
    let totalAmountBeverage = beveragePP(duration) * adults + beveragePP(duration) / 2 * children;
    console.log(totalAmountMeat);

    result.innerHTML = `<p>${totalAmountMeat / 1000} Kg de Carne </p>`
    result.innerHTML += `<p>${Math.ceil(totalAmountBeer / 355)} Latinhas de Cerveja </p>`
    result.innerHTML += `<p>${Math.ceil(totalAmountBeverage / 2000)} Pet's 2L de Bebidas (Sem alcool) </p>`


}

function meatPP(duration){

    if (duration >=6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPP(duration){

    if (duration >=6) {
        return 2000;
    } else {
        return 1200;
    }
}

function beveragePP(duration){

    if (duration >=6) {
        return 2000;
    } else {
        return 1200;
    }
}
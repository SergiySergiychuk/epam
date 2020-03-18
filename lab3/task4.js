const body = document.getElementsByTagName('body')[0];
let p;
var arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
];
////
document.write('START');
for (const object of arr) {
    p = document.createElement('p');
    body.appendChild(p);
    for (const key in object) {
        p.innerText += key + ': ' + object[key] + ',';
    }
}
////
document.write('Task1');
const reduser = (accumulator, currentValue) => {
    if (currentValue.type === 'USD' && currentValue.value < 100) {
        accumulator.value = accumulator.value + currentValue.value;
    }
    return accumulator;
}
const a = arr.reduce(reduser, { value: 0, type: 'EUR' })
p = document.createElement('p');
body.appendChild(p);
p.innerText = 'Cума всіх значень value у яких тип ‘USD’ та value менше за 100: ' + a.value;
////
document.write('Task2');
let arr2 = arr.map((currentValue) => {
    if (currentValue.type === 'EUR') {
        currentValue.value = currentValue.value * 2;
    }
    return currentValue;
})
arr2 = arr2.filter(element => element.type === 'EUR')
for (const object of arr2) {
    p = document.createElement('p');
    body.appendChild(p);
    for (const key in object) {
        p.innerText += key + ': ' + object[key] + ',';
    }
}
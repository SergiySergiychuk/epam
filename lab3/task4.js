const body = document.getElementsByTagName('body')[0];
var arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
];
for (const object of arr) {
    let p = document.createElement('p');
    body.appendChild(p);
    for (const key in object) {
        p.innerText += key + ': ' + object[key] + ',';
    }
}
let sum = 0;
for (let obj of arr) {
    if (obj.type === 'USD' && obj.value < 100) {
        sum += obj.value;
    }
}
document.write('Cума всіх значень value у яких тип ‘USD’ та value менше за 100: ' + sum);

for (const object of arr) {
    if (object.type === 'EUR') {
        object.value = object.value * 2;
        let p = document.createElement('p');
        body.appendChild(p);
        for (const key in object) {
            p.innerText += key + ': ' + object[key] + ',';
        }
    }
}
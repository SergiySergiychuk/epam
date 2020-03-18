let count = prompt("Скільки пляшок", 50);
let body = document.getElementsByTagName('body')[0];
let str = '';
while (count > 0) {
    let p = document.createElement('p');
    body.appendChild(p);
    if (count === 1) {
        p.innerHTML = p.innerHTML + count + " пляшока стоїть на столі,одна упала, жодної не залишилось";
    } else {
        if (((count % 10) < 5) && ((count % 10) > 0) && (Math.floor(count / 10) !== 1)) {
            str = 'пляшки';
            if (count % 10 === 1) {
                str = 'пляшка';
            }
        } else {
            str = 'пляшок';
        }
        p.innerHTML = p.innerHTML + count + ' ' + str + " стоїть на столі,одна упала і залишилось " + (count - 1);
    }
    count--;
}
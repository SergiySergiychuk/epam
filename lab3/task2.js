const triangle = document.getElementsByClassName("triangle")[0];
const size = 25;
const arr = [];

for (let i = 1; i <= size; i++) {
    arr[i] = 0;
}
arr[0] = 1;
for (let j = 1; j <= size; j++) {
    const p = document.createElement('p');
    triangle.appendChild(p);
    for (let i = j; i >= 1; i--) {
        p.innerHTML = p.innerHTML + arr[i - 1] + ' ';
        arr[i] = arr[i - 1] + arr[i];
    }
}
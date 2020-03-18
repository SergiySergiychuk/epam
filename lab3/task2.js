let triangle = document.getElementsByClassName("triangle")[0];
let p = document.createElement('p');
triangle.appendChild(p);
let arr = [50];
let i, j;
let size = 25;
for (i = 1; i <= size; i++) {
    arr[i] = 0;
}

arr[0] = 1;
for (j = 1; j <= size; j++) {
    let p = document.createElement('p');
    triangle.appendChild(p);
    for (i = j; i >= 1; i--) {
        p.innerHTML = p.innerHTML + arr[i - 1] + ' ';
        arr[i] = arr[i - 1] + arr[i];
    }
}
const main = document.querySelector('.main');
const loadingAnimation = document.querySelector('.main__animation');
const url = 'https://randomuser.me/api';

const loadNewData = async function loadNewData(numberOfResults) {
    const http = new XMLHttpRequest();
    http.open("GET", url + `/?results=${numberOfResults}`);
    http.responseType = 'json';
    http.send();
    return new Promise((resolve, reject) => {
        http.onloadend = () => {
            if (http.status == 200) {
                resolve(http.response.results);
            } else {
                reject(http.status);
            }
        }
    })
}
const appendDataToDocument = function(data) {
    let fragment = document.createDocumentFragment();
    data.forEach(element => {
        console.log(element.picture.large);
        let img = document.createElement('img');
        img.setAttribute('src', element.picture.large);
        fragment.appendChild(img);
    });
    loadingAnimation.setAttribute('hidden', true);
    main.appendChild(fragment);
}
const showLoadingAnimation = function showLoadingAnimation() {

    loadingAnimation.style.top = document.documentElement.scrollHeight + 'px';
    loadingAnimation.removeAttribute('hidden');
    document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
}
const startDataPromise = loadNewData(50);
startDataPromise.then(appendDataToDocument);

window.addEventListener('scroll', function() {
    if (document.documentElement.clientHeight == document.documentElement.getBoundingClientRect().bottom) {
        showLoadingAnimation();
        setTimeout(() => {
            const newDataPromise = loadNewData(25);
            newDataPromise.then(appendDataToDocument);
        }, 1000);
    }
});
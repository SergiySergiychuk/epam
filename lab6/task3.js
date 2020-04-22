const format = 'mm:ss'

let currentMoment = moment(0);
let lever = false;
let interval;
$('.go-stop-button').click((e) => {
    e.preventDefault();
    if (lever) {
        lever = false;
        clearInterval(interval);
    } else {
        lever = true;
        interval = setInterval(() => {
            $('.screen')[0].innerText = currentMoment.format(format);
            currentMoment.add(1, 'seconds');
        }, 1000)
    }
});
$('.reset-button').click((e) => {
    e.preventDefault();
    clearInterval(interval);
    lever = false;
    currentMoment = moment(0);
    $('.screen')[0].innerText = '00:00';

})
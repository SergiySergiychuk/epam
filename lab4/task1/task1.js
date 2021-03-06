const img = document.getElementById('main-img');
const button = document.getElementById('submit-button');
const width = document.getElementById('img-width');
const height = document.getElementById('img-height');
const thickness = document.getElementById('img-thickness');
const colour = document.getElementById('img-colour');
const alterText = document.getElementById('img-alterText');
const regex = /[^a-zA-Z]/;

alterText.addEventListener('keyup', () => {
    alterText.value = alterText.value.replace(regex, '');
});
button.addEventListener('click', () => {
    if (width.value && height.value && thickness.value && colour.value && alterText.value) {
        if (Number(width.value) && Number(height.value) && Number(thickness.value)) {
            if (Number(thickness.value) < 500) {
                if (regex.test(alterText.value)) {
                    alert('Only latin letters');
                } else {
                    if (isColor(colour.value)) {
                        img.style.width = `${width.value}px`;
                        img.style.height = `${height.value}px`;
                        img.style.border = `solid ${thickness.value}px ${colour.value}`;
                        img.attributes.alt = alterText.value;
                    } else {
                        alert('Incorrect colour');
                    }
                }
            } else {
                alert('Too big thickness');
            }

        } else {
            alert('Incorrect values');
        }
    } else {
        alert('Fill all fields');
    }
})

function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    var test1 = s.color == strColor;
    var test2 = /^#[0-9A-F]{6}$/i.test(strColor);
    if (test1 == true || test2 == true) {
        return true;
    } else {
        return false;
    }
}
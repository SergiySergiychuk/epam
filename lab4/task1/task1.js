const img = document.getElementById('main-img');
const button = document.getElementById('submit-button');
const width = document.getElementById('img-width');
const height = document.getElementById('img-height');
const thickness = document.getElementById('img-thickness');
const colour = document.getElementById('img-colour');
const alterText = document.getElementById('img-alterText');

alterText.addEventListener('keyup', () => {
    alterText.value = alterText.value.replace(/[^a-zA-Z]/, '');
});
button.addEventListener('click', () => {
    if (width.value && height.value && thickness.value && colour.value && alterText.value) {
        if (Number(width.value) && Number(height.value) && Number(thickness.value)) {
            if (/[^a-zA-Z]/.test(alterText.value)) {
                alert('Only latin letters');
            } else {
                console.log(true);
                img.style.width = `${width.value}px`;
                img.style.height = `${height.value}px`;
                img.style.border = `solid ${thickness.value}px ${colour.value}`;
                img.attributes.alt = alterText.value;
            }
        } else {
            alert('Incorrect values');
        }
    } else {
        alert('Fill all fields');
    }
})
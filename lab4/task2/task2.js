const tbody = document.getElementById('main-tbody');
const addButton = document.getElementById('addButton');
const deleteLinks = tbody.querySelectorAll('.delete-link');
const diagram = document.getElementById('main-diagram');

const deleteButtonEvent = (element) => {
    tbody.removeChild(element.toElement.parentElement.parentElement);
    buildDiagma();
}
const showAlterTextEvent = (element) => {
    element.target.parentElement.getElementsByClassName('main__alterText')[0].removeAttribute('hidden');
}
const hideAlterTextEvent = (element) => {
    element.target.parentElement.getElementsByClassName('main__alterText')[0].setAttribute('hidden', '');
}
deleteLinks.forEach(element => {
    element.addEventListener('click', deleteButtonEvent)
});
addButton.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const deleteLink = document.createElement('a');
    deleteLink.setAttribute('class', 'text-primary delete-link');
    deleteLink.setAttribute('type', 'button');
    deleteLink.insertAdjacentText('afterbegin', 'Видалити');
    deleteLink.addEventListener('click', deleteButtonEvent);
    td1.appendChild(deleteLink);
    const td2 = document.createElement('td');
    td2.setAttribute('class', 'company-name');
    td2.setAttribute('contenteditable', true);
    td2.innerText = 'Нова компанія';
    const td3 = document.createElement('td');
    td3.setAttribute('contenteditable', true);
    td3.setAttribute('class', 'company-value');
    td3.innerText = '10';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);

    buildDiagma();
})
tbody.addEventListener('keyup', (element) => {

    if (Number(element.target.innerText) || element.target.innerText == 0 ||
        element.target.attributes.class.value == 'company-name') {
        buildDiagma();
    } else {
        alert('Incorect values');
    }
})
const buildDiagma = function() {
    const allWidth = 800;
    const margin = 10;
    const columnNumber = tbody.getElementsByTagName('tr').length;
    const oneRowWidth = (allWidth - (columnNumber + 1) * margin) / columnNumber;
    let fragment = document.createDocumentFragment();
    const allValues = tbody.querySelectorAll('.company-value');
    let colour = 99999;
    allValues.forEach(element => {
        const diagramElement = document.createElement('div');
        const colourBlock = document.createElement('div');
        const p = document.createElement('p');
        diagramElement.setAttribute('class', 'main__diagram-element');
        diagramElement.style.cssText = `width:${oneRowWidth}px;height:${element.innerText*4 + 40}px;`;
        colourBlock.setAttribute('class', 'main__diagram-clourBlock');
        colourBlock.style.cssText = `width:${oneRowWidth}px;height:${element.innerText*4}px;`;
        p.innerText = element.parentElement.getElementsByClassName('company-name')[0].innerText;
        ////
        const alterText = document.createElement('div');
        alterText.innerText = element.parentElement.getElementsByClassName('company-value')[0].innerText;
        alterText.setAttribute('class', 'main__alterText');
        alterText.setAttribute('hidden', '');
        colourBlock.appendChild(alterText);
        colourBlock.addEventListener('mouseenter', showAlterTextEvent)
        colourBlock.addEventListener('mouseleave', hideAlterTextEvent)
            ////
        diagramElement.appendChild(colourBlock);
        diagramElement.appendChild(p);
        diagram.appendChild(diagramElement);
        if (!colourBlock.style.backgroundColor) {
            colourBlock.style.backgroundColor = '#' + (colour.toString(16) + '000000').substring(2, 8).toUpperCase();
        }
        fragment.appendChild(diagramElement);
        colour = colour * 9;
    });
    while (diagram.firstChild) {
        diagram.removeChild(diagram.lastChild);
    }
    diagram.appendChild(fragment);
}
buildDiagma();
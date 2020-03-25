const tbody = document.getElementById('main-tbody');
const addButton = document.getElementById('addButton');
const deleteLinks = tbody.querySelectorAll('.delete-link');
const diagram = document.getElementById('main-diagram');

const deleteButtonEvent = (element) => {
    tbody.removeChild(element.toElement.parentElement.parentElement);
    buildDiagma();
}
const showAlterTextEvent = (element) => {
    element.target.getElementsByClassName('main__alterText')[0].removeAttribute('hidden');
}
const hideAlterTextEvent = (element) => {
    element.target.getElementsByClassName('main__alterText')[0].setAttribute('hidden', '');
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
    const innerText = element.target.innerText;
    if (Number(innerText) || innerText == 0 ||
        element.target.attributes.class.value == 'company-name') {
        buildDiagma();
    } else {
        alert('Incorect values');
    }
})

function createAlterTextEvents(element, colourBlock) {
    const alterText = document.createElement('div');
    alterText.innerText = element.innerText;
    alterText.setAttribute('class', 'main__alterText');
    alterText.setAttribute('hidden', '');
    colourBlock.appendChild(alterText);
    colourBlock.addEventListener('mouseenter', showAlterTextEvent)
    colourBlock.addEventListener('mouseleave', hideAlterTextEvent)
}

function insertContentInDiagramElement(element, diagramElement, colour) {
    //default values
    const allWidth = 800;
    const margin = 10;
    const columnNumber = tbody.getElementsByTagName('tr').length;
    const oneRowWidth = (allWidth - (columnNumber + 1) * margin) / columnNumber;
    //diagram element settings
    diagramElement.setAttribute('class', 'main__diagram-element');
    diagramElement.style.cssText = `width:${oneRowWidth}px;height:${element.innerText*4 + 40}px;`;
    //colour block settings
    const colourBlock = document.createElement('div');
    colourBlock.setAttribute('class', 'main__diagram-colourBlock');
    colourBlock.style.cssText = `width:${oneRowWidth}px;height:${element.innerText*4}px;`;
    colourBlock.style.backgroundColor = `#${(`${colour.toString(16)}000000`).substring(2, 8).toUpperCase()}`;
    createAlterTextEvents(element, colourBlock);
    const p = document.createElement('p');
    p.innerText = element.parentElement.getElementsByClassName('company-name')[0].innerText;
    //append all to diagram elment
    diagramElement.appendChild(colourBlock);
    diagramElement.appendChild(p);
    diagram.appendChild(diagramElement);
}
const buildDiagma = function() {
    let fragment = document.createDocumentFragment();
    const allValues = tbody.querySelectorAll('.company-value');
    let colour = 99999; //because ...
    allValues.forEach(element => {
        const diagramElement = document.createElement('div');
        insertContentInDiagramElement(element, diagramElement, colour);
        fragment.appendChild(diagramElement);
        colour = colour * 9;
    });
    while (diagram.firstChild) {
        diagram.removeChild(diagram.lastChild);
    }
    diagram.appendChild(fragment);
}
buildDiagma();
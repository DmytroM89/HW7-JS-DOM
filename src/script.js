const shape = document.querySelector('.shape');
const shapeSelect = document.querySelector('#shapeSelect');
const inputColor = document.querySelector('#inputColor');
const applyColorBtn = document.querySelector('#applyColor');
const resetBtn = document.querySelector('#reset');
let color = '#000000';
let selectedShape = '';

shapeSelect.addEventListener('change', (e) => {
    selectedShape = e.target.value;
    shape.innerText = '';
    shape.className = selectedShape;
    changeShapeColor();
});

applyColorBtn.addEventListener('click', () => {
    color = inputColor.value;
    changeShapeColor();
});

resetBtn.addEventListener('click', () => {
    shape.innerText = 'shape';
    shape.removeAttribute('style');
    shape.className = 'shape';
    shapeSelect.selectedIndex = 0;
    inputColor.value = '#000000';
    color = '';
});

function changeShapeColor() {
    if (selectedShape === 'triangle') {
        shape.style.background = 'transparent';
        shape.style.borderBottomColor = color;
    } else {
        shape.style.background = color;
        shape.style.borderBottomColor = '';
    }
}


const badgeElement = document.getElementById('badge');
const inputElement = document.getElementById('input');
const buttonElement = document.getElementById('button');

initBadge();
initInputListener();

function onButtonClick() {
    badgeElement.color = badgeElement.color === '#b3e5fc' ? '#cfd8dc' : '#b3e5fc';
}

function initBadge() {
    badgeElement.fallbackValue = 'Web components are cool';
}

function initInputListener() {
    inputElement.addEventListener('valueChange', ({detail}) => {
        badgeElement.value = detail;
    });
}

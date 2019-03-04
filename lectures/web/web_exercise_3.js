window.addEventListener('DOMContentLoaded', init, false);

function init() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0, length = buttons.length; i < length; i++) {
        buttons[i].addEventListener('click', toggleColor, false);
    }
}
function toggleColor() {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0, length = paragraphs.length; i < length; i++) {
        paragraphs[i].style.color = this.value;
    }
}
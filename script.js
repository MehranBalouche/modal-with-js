let $ = document;

let openModalButton = $.getElementById('openModalButton');
let closeModalButton = $.getElementById('closeModalButton');
let mainSection = $.getElementById('mainSection');
let modal = $.getElementById('modal');

function _log(value) {
    console.log(value);
}

function openModalHandler () {
    mainSection.style.filter = 'blur(6px)';
    modal.style.display = 'block';
    openModalButton.blur();
}
function closeModalHandler () {
    mainSection.style.filter = 'blur(0)';
    modal.style.display = 'none';
}
function closeModalByEscap (event) {
    if (event.keyCode ===  27) {
        mainSection.style.filter = 'blur(0)';
        modal.style.display = 'none';
    }
}


openModalButton.addEventListener('click', openModalHandler);
closeModalButton.addEventListener('click', closeModalHandler);
$.addEventListener('keydown', closeModalByEscap);
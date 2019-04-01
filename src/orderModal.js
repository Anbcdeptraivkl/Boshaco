var modal = document.getElementById('orderModal');

var button = document.getElementById('orderButton');

var close = document.getElementsByClassName('close')[0];

button.onclick = function () {
    modal.style.display = 'block';
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
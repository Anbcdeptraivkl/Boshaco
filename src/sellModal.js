var sellModal = document.getElementById('sellModal');

var sellPanel = document.getElementById('sellPanel');

var sellClose = document.getElementsByClassName('close')[1];

sellPanel.addEventListener('click', function () {
    sellModal.style.display = 'block';
});

sellClose.onclick = function () {
    sellModal.style.display = 'none';
};

window.onclick = function () {
    sellModal.style.display = 'none';
};
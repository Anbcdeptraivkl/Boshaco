var loginModal = document.getElementById('loginModal');

var loginButton = document.getElementById('loginButton');

var loginClose = document.getElementsByClassName('close')[1];

loginButton.onclick = function () {
    loginModal.style.display = 'block';
};

loginClose.onclick = function () {
    loginModal.style.display = 'none';
};

window.onclick = function () {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
};
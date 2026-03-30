console.log('It works!');

const userNameTarget = document.getElementById('userName');
const form = document.getElementById('mainForm');
const logoutBtn = document.getElementById('logout');
const nameInput = document.getElementById('nameField');



window.onload = function () {
    const savedUser = getFromStorage('user');

    if (savedUser) {
        userNameTarget.textContent = savedUser;
        toggleSections(true);
    } else {
        toggleSections(false);
    }
};



function formHandler(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (!name) return;


    localStorage.setItem('user', name);

    userNameTarget.textContent = name;

    toggleSections(true);
}



function logoutHandler(event) {
    localStorage.removeItem('user');

    toggleSections(false);

}


function toggleSections(hasUser = false) {
    const userInfo = document.getElementById('userInfo');
    const formSection = document.getElementById('mainForm');

    if (hasUser) {
        userInfo.style.display = 'block';
        formSection.style.display = 'none';
    } else {
        userInfo.style.display = 'none';
        formSection.style.display = 'block';
    }
}


function getFromStorage(name) {
    return localStorage.getItem(name);
}


form.addEventListener('submit', formHandler);
logoutBtn.addEventListener('click', logoutHandler);
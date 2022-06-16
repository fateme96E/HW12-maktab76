let main = document.querySelector('main');
let form = main.getElementsByClassName('form-container')[0];

function makeStyle(element, className, name) {
    element.className = className;
    element.textContent = 'Hello ' + name.value;
    element.style.backgroundColor = '#61e161';
    element.style.color = '#ffffff';
    element.style.padding = '10px';
    element.style.textAlign = 'center';
    element.style.width = '70%';
    element.style.margin = '0 auto';
}

function showName() {
    let nameContainer = form.getElementsByClassName('nInput-container');
    let name = nameContainer[0].getElementsByTagName('input')[0];
    if (name.value !== '') {
        let body = document.getElementsByTagName('body')[0];
        let alertMsg = document.createElement('div');
        makeStyle(alertMsg, 'alert-msg', name);
        body.prepend(alertMsg);
    }
}

function showEmail() {
    let emailContainer = form.getElementsByClassName('eInput-container');
    let email = emailContainer[0].getElementsByTagName('input')[0];
    if (email.value !== '') {
        let emailInfo = document.getElementsByClassName('eInfo-container')[0];
        let p = emailInfo.getElementsByTagName('p')[0];
        p.textContent = email.value;
    }
}

function stop(event) {
    event.preventDefault(); 
}

let ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
    let text = e.target.textContent;
    e.target.textContent = '';
    let del = document.createElement('del');
    del.textContent = text;
    e.target.append(del);
})
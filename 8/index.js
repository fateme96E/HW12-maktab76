let elem = document.createElement('script');
elem.setAttribute('src', 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js');
console.log(`The version is: ${elem.src.split('@')[1].split('/')[0]}`);
document.body.appendChild(elem);




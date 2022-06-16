let parent = document.querySelector('body').firstElementChild;
parent.addEventListener('click', function(e){
    if (e.target.tagName.toLowerCase() === 'button') {
        let res = e.target.className === 'buttonClass' ? 'buttonClass' : 'click!';
        console.log(res);
    }
})

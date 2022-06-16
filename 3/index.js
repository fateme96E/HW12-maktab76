let div = document.querySelector('.cta_container');
div.addEventListener('click', function(e){
    console.log(`You clicked: ${e.target.tagName}    from: div's listener`);
})

let btn = div.querySelector('.cta_button');
btn.addEventListener('click', function(e){
    console.log(`You clicked: ${e.target.tagName}    from: buttons's listener`);
})


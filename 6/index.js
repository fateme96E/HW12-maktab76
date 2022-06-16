document.addEventListener('goodbye', function(event) {
    alert('Goodbye!');
});

let event = new Event('goodbye', { bubbles: true });
let elem = document.getElementsByTagName('h1')[0];
elem.dispatchEvent(event);
elem.addEventListener('mousemove', function(event) {
    if (event.x >= 5 && event.x <= 123) {
        let posX = event.clientX;
        let posY = event.clientY;
        console.log(`X: ${posX} ,  Y: ${posY}`);
    }
})







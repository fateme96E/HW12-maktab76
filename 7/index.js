function event_function(event) {
    if (event.x >= 8 && event.x <= 47) {
        let spanTag = document.getElementById("show_position");
        spanTag.textContent = `X: ${event.pageX} ,  Y: ${event.pageY}`;
    }
}
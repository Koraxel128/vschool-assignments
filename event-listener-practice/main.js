const box = document.getElementById("box");

if(box.addEventListener("mousedown", function () {
    box.style.backgroundColor = "red"    
}));

else if (box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "blue"
}));

else if (box.addEventListener("mouseup", function () {
    box.style.backgroundColor = "yellow"
}));

else if (box.addEventListener("dblclick", function () {
    box.style.backgroundColor = "green"
}));

else if (box.addEventListener("wheel", function () {
    box.style.backgroundColor = "orange"

}));

window.addEventListener("keydown",  function(event) {
    let unicode = event.key;

    if (unicode === "r") {
        box.style.backgroundColor = "red"

    } else if (unicode === "b"){
        box.style.backgroundColor = "blue"

    } else if (unicode === "y"){
        box.style.backgroundColor = "yellow"

    } else if (unicode === "g"){
        box.style.backgroundColor = "green"

    } else if (unicode === "o"){
        box.style.backgroundColor = "orange"
    }
});

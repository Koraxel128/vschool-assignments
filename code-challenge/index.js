var button = document.getElementById("button")

button.addEventListener("click", function(){
    if(button.style.backgroundColor === "black"){
        button.style.backgroundColor = "blue"
        console.log("Color is now blue")
    }else if (button.style.backgroundColor === "blue"){
        button.style.backgroundColor = "black"
        console.log("Color is now black")
    }
})


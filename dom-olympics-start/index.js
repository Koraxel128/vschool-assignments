const h2 = document.createElement("h2");
h2.textContent = "Javascript Made This!!"
document.getElementById("header").appendChild(h2);
h2.className = "header";

const authorName = document.createElement("authorName");
authorName.innerHTML = `<span class = "name">Kevin Buff </span>
wrote the Javascript`;
document.getElementById("header").appendChild(authorName);
authorName.style.display = "flex"
authorName.style.justifyContent = "center"



const messages = document.getElementsByClassName("message");
messages[0].textContent = "There has never been an experience so sour that it can't be made sweeter with a positive attitude";
messages[1].textContent = "Well thank you for that, it really changed my perspective"
messages[2].textContent = "I appreciate you!";
messages[3].textContent = "I appreciate you too!!";

let messageErase= document.getElementById("clear-button")
messageErase.onclick = function(){myFunction()};

function myFunction(){
    const messages = document.getElementById("mainMessages").children;
    messages[0].remove()
    messages[1].remove()
    messages[2].remove()
    messages[3].remove()
}


const messageLeft = document.getElementsByClassName("message left")
const messageRight = document.getElementsByClassName("message right")
const dropDown = document.getElementById("theme-drop-down")
const dropDown1 = document.getElementById("theme-drop-down"[0])
const dropDown2 = document.getElementById("theme-drop-down"[1])
dropDown.addEventListener("change", function(){
    for(i = 0; i < "theme-drop-down".length; i++)
        if (dropDown.value === "theme-one"){
            messageLeft[0].style.backgroundColor = "lightblue"
            messageRight[0].style.backgroundColor = "burlywood"
            messageLeft[1].style.backgroundColor = "lightblue"
            messageRight[1].style.backgroundColor = "burlywood"
            messageRight[0].style.color = "black"
            messageRight[1].style.color = "black"
        }else if (dropDown.value === "theme-two"){
            messageLeft[0].style.backgroundColor = "red"
            messageRight[0].style.backgroundColor = "black"
            messageLeft[1].style.backgroundColor = "red"
            messageRight[1].style.backgroundColor = "black"
            messageRight[0].style.color = "white"
            messageRight[1].style.color = "white"
        }
      
})
var inputBox = document.getElementById("text-input")
var myMessages = document.getElementById("mainMessages")
var add = document.getElementById("add")
var form = document.getElementById("message")

form.addEventListener("submit", function(e){
    e.preventDefault()
    var newMessage = document.createElement("div")
    newMessage.textContent = inputBox.value
    myMessages.append(newMessage)
    console.log(newMessage)

})


 
 
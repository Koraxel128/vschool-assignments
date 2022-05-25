const form = document.addItem
const list = document.getElementById("list")
const addTodo = document.getElementById("addTodo")
const input = document.getElementById("title")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    var newItem = document.createElement("li")
    newItem.textContent = input.value

    var newButtonOne = document.createElement("button")
    newButtonOne.textContent = "Edit"

    var newButtonTwo = document.createElement("button")
    newButtonTwo.textContent = "X"
    
    

    newButtonOne.onclick = function editItem(){
        var newInput = document.createElement("prompt")
            console.log("This is working")
        
    }
    newButtonTwo.onclick = function removeItem(){
        newItem.remove()
        
        
    }
    

    newItem.prepend(newButtonOne, newButtonTwo)
    
    list.appendChild(newItem)
    console.log(list)
})

// form.addEventListener("onclick", (event) =>{
//     for (i = 0; i < newItem.length; i++){
//         if (newButtonOne === "onclick"){
//             var newInput = document.createElement("alert")
//             newItem.textcontent = newInput.value
//             console.log("this is working")
            
//         } else if (newButtonTwo === "onclick"){
//             newItem.textContent = ""
//         }
//     }
// })
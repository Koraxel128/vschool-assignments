var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
// var fruitIndex = fruit.indexOf("orange")
// console.log(fruitIndex)
fruit.push("1")
// console.log(vegetables.length)
vegetables.push("3")

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
var joinedFood = food.join(",")

console.log(joinedFood)

let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"
// var alphabetArr = alphabet.slice(0,26)
// alphabetArr.join


for(var i = 0; i < people.length; i++){
    
    console.log(people[i])

    for( var j = 0 ; j < alphabet.length; j++){
    let alphabetArr2 = function(str){
        return [...str]
    };
    console.log(alphabetArr2(alphabet[j]))
    
   }
}

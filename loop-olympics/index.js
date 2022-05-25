for( var i = -1; i < 9; i++){
    console.log(i + 1)
}

for(var i = 10; i > 0; i--){
    console.log(i - 1)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
const numArray = []
for(var i = 0; i <= 9; i++){
    for(var j = 0; j < 1; j++)
    numArray.push([i][j])
    console.log(numArray)
}

for(var i = -2; i <= 100; i++)
    while(i < 100){
        console.log(i+=2)
    }

const otherFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var temporaryArray = []
    for (var i = 0; i < otherFruit.length; i += 2){ 
        temporaryArray.push(otherFruit[i]) 
        temporaryArray.join(", ")
        console.log(temporaryArray) 
    }

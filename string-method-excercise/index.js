
function capitalizeToLowercase (string) {
    var allCap = string.toUpperCase()
    var allLow = string.toLowerCase()
    return allCap + allLow
  
}
console.log(capitalizeToLowercase("hello"));

function roundDown (string){
    
    return Math.floor(string.length/2)
}
    console.log(roundDown("Hello"))
    console.log(roundDown("Hello World"))

function returnFirstHalf(name1){
    return name1.slice(0, name1.length/2) 
    }
    console.log(returnFirstHalf("Hello"))
    console.log(returnFirstHalf("Hello World"))

function capitalAndLower(string){
    var string1 = string;
    var string1_len = string1.length;
    var firstHalf = "";
    var secondHalf = "";
 
    for(var i=0 ; i<Math.ceil(string1_len/2) ; i++)
        {
        firstHalf+=string1[i];
        }
 
    for(var i=Math.ceil(string1_len/2) ; i<string1_len ; i++)
        {
        secondHalf+=string1[i];
        }
 
    var newFirstHalf = firstHalf.toUpperCase();
 
    var changedString = newFirstHalf + secondHalf;
 
    console.log(changedString);
    
}
    console.log(capitalAndLower("hello"))
    console.log(capitalAndLower("hello world"))
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
n = 0
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        console.log(n + 1)
    }
}






var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for(i = 0; i = peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if([i].age <= 17){
      console.log("Not old enough")
    } else if([i].age >= 18){
      console.log("Old enough")
    }
}
  
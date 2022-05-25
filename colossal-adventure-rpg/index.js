const readline = require("readline-sync")
var userName = readline.question("What is your name? Don't feel like talking thats fine you don't really need a name to continue...: " )


var welcome = readline.question("Welcome to the game " + userName + ". Would you like to play? type yes or no: ")
if (welcome == "yes"){
    var walking = readline.question("Please press enter 'w' to begin walking.")
    if(walking === "w"){
        console.log("Your begin to walk")
        var whilewalking = true
    } else if (walking !== "w"){
        console.log("that's not 'w'")
        var whileWalking = false
            while(whileWalking == false){
                var walking = readline.question("Please press enter 'w' to begin walking.")
                if(walking === "w"){
                    console.log("There we go thats more like it. ")
                    whileWalking === true
                    break
                } else {
                    console.log("Still not the correct letter...: ")
                    console.log("You begin walking.")
             
            }
    }
}
    

    
}else {
    console.log("You have chosen poorly...")
    userName = readline.question("What is your name? Don't feel like talking thats find you don't really need a name to continue...: ")
    welcome = readline.question("Welcome to the game " + userName + ". Would you like to play? type yes or no: ")
    if (welcome == "yes"){
        console.log("You begin walking")
    }else {
        console.log("Such a failure")
        
}
}

var player = {
    name: userName,
    health: 75,
    attack: 30,
    inventory: [""],

}
var enemyList = [
        {
            name: "Lion",
            health: 30,
            atk: 15,
            item: ["Lion Mane"],
            itemInfo: "A shiny piece of armor that will increase users Health by 20."
        },{
            name: "Tiger",
            health: 25,
            atk: 20,
            item: ["Tiger Fang"],
            itemInfo:"A dagger that definitely doesnt have the power to one-shot anything...and everything.",
            
        },{
            name: "Bear",
            health: 30,
            atk: 30,
            item: ["Bear Heart"],
            itemInfo: "Gives you a sick title!?"
}]
var end = false
while(player.health > 0){
    var hasLionMane = false
    var hasTigerFang = false
    var hasBearHeart = false
        for(var i = 0; i < 1; i ++){
                while(whileWalking = true && welcome == "yes" && player.health > 0){
                    if(hasLionMane == false || hasTigerFang == false || hasBearHeart == false){
                        for(var i =0; i < player.health; i ++){
                            var animalEncounter = Math.floor(Math.random() * 4) +1
                            if(animalEncounter !== 4){
                                console.log("You continue walking...")
                                
                            } else if(animalEncounter === 4 || hasLionMane == false || hasTigerFang == false || hasBearHeart == false && player.health > 0){
                                while(player.health > 0 && hasLionMane == false || hasTigerFang == false || hasBearHeart == false ){
                                    var animalEncountered = Math.floor(Math.random() * 3) +1
                                    // LION
                                    if (animalEncountered === 1){
                                        var attackedByLion = true
                                        while(enemyList[0].health > 0 && attackedByLion == true && player.health > 0){
                                            console.log("You are being attacked by a " + enemyList[0].name + "!")
                                            while(attackedByLion = true && enemyList[0].health > 0 && player.health > 0){
                                                var encounterChoice = readline.question("A Lion has attacked! Will you 'a' attack, or 'r' run or 'p' print character sheet?" )
                                                if (encounterChoice === 'a'){
                                                    while(player.health > 0){
                                                        console.log("You attack the Lion!")
                                                        if(hasTigerFang == true){
                                                            enemyList[0].health = enemyList[0].health - Math.floor(Math.random() * 1000) +1
                                                            player.health = player.health - Math.floor(Math.random() * 15) +1
                                                            console.log(player.name + ": " +player.health+ " health, " +enemyList[0].name + ": " +enemyList[0].health + " health")
                                                        }else {
                                                            enemyList[0].health = enemyList[0].health - Math.floor(Math.random() * 30) +1
                                                            player.health = player.health - Math.floor(Math.random() * 15) +1
                                                            console.log(player.name + ": " +player.health+ " health, " +enemyList[0].name + ": " +enemyList[0].health + " health")
                                                        }
                                                            if(player.health > 0 && enemyList[0].health > 0){
                                                            break
                                                        }else if (player.health > 0 && enemyList[0].health <= 0){
                                                            console.log("You have slain the Lion and have claimed it's mane")
                                                            hasLionMane = true
                                                            player.inventory.push(["Lion Mane, "])
                                                            // player.health = player.health + 50
                                                            attackedByLion = false
                                                            break
                                                        } else if (player.health <= 0) {
                                                            console.log("You have been slain by such a small animal, in the words of Greta Thunberg 'HOW DARE YOU'!")
                                                            attackedByLion = false
                                                            player.health === 0
                                                            console.log("Better luck next time")
                                                            break
                                                    }}

                                                }else if (encounterChoice === 'r'){
                                                    console.log("You attempt to run!")
                                                    var runChance = Math.floor(Math.random() * 2) +1
                                                    if (runChance === 1){
                                                        console.log("You fail to escape.")
                                                        attackedByLion = true
                                                        
                                                    } else if (runChance === 2){
                                                        player.health = player.health - Math.floor(Math.random() * 15) +1
                                                        console.log("You take some damage from the Lion while running. you now have " + player.health + " health!")
                                                        attackedByLion = false
                                                        console.log("Better luck next time.")
                                                        if(player.health <= 0){
                                                            console.log("You have been slain by such a small animal, in the words of Greta Thunberg 'HOW DARE YOU'!")
                                                        }
                                                        break
                                                        
                                                    }
                                                    break

                                                }else if (encounterChoice === 'p'){
                                                    console.log("Player: " + player.name)
                                                    console.log("Health: " + player.health)
                                                    console.log("Attack: " + player.attack)
                                                    console.log("Inventory: " + player.inventory)
                                                }
                                                
                                            }
                                            
                                        }
                                    //TIGER
                                    }else if (animalEncountered === 2){
                                        var attackedByTiger = true
                                        while(enemyList[1].health > 0 && attackedByTiger == true && player.health > 0){
                                            console.log("You are being attacked by a " + enemyList[1].name + "!")
                                            while(attackedByTiger = true && enemyList[1].health > 0 && player.health > 0){
                                                var encounterChoice = readline.question("A Tiger has attacked. Will you 'a' attack, or 'r' run or 'p' print character sheet?" )
                                                if (encounterChoice === 'a'){
                                                    while(player.health > 0){
                                                        console.log("You attack the Tiger!")
                                                        enemyList[1].health = enemyList[1].health - Math.floor(Math.random() * 30) +1
                                                        player.health = player.health - Math.floor(Math.random() * 20) +1
                                                        console.log(player.name + ": " +player.health+ " health, " +enemyList[1].name + ": " +enemyList[1].health + " health!")
                                                        if(player.health > 0 && enemyList[1].health > 0){
                                                            break
                                                        }else if (player.health > 0 && enemyList[1].health <= 0){
                                                            console.log("You have slain the Tiger and have claimed it's fang!")
                                                            hasTigerFang = true
                                                            player.inventory.push(["Tiger Fang, "])
                                                            player.attack = 1000
                                                            attackedByTiger = false
                                                            break
                                                        } else if (player.health <= 0) {
                                                            console.log("You have been slain by such a small animal, in the words of Greta Thunberg 'HOW DARE YOU'!")
                                                            attackedByTiger = false
                                                            player.health === 0
                                                            break
                                                        }
                                                    }

                                                }else if (encounterChoice === 'r'){
                                                    console.log("You attempt to run!")
                                                    var runChance = Math.floor(Math.random() * 2) +1
                                                    if (runChance === 1){
                                                        console.log("You fail to escape.")
                                                        attackedByTiger = true
                                                        
                                                    } else if (runChance === 2){
                                                        player.health = player.health - Math.floor(Math.random() * 20) +1
                                                        console.log("You take some damage from the Tiger while running. you now have " + player.health + " health!")
                                                        attackedByTiger = false
                                                        console.log("Better luck next time.")
                                                        if(player.health  <= 0){
                                                            console.log("You have been slain by such a small animal, in the words of Greta Thunberg 'HOW DARE YOU'!")
                                                        }
                                                        break
                                                        
                                                    }
                                                    break

                                                }else if (encounterChoice === 'p'){
                                                    console.log("Player: " + player.name)
                                                    console.log("Health: " + player.health)
                                                    console.log("Attack: " + player.attack)
                                                    console.log("Inventory: " + player.inventory)
                                                    
                                                }
                                                
                                            }
                                            
                                        }
                                    //BEAR   
                                    }else if (animalEncountered === 3){
                                        var attackedByBear = true
                                        while(enemyList[2].health > 0 && attackedByBear == true && player.health > 0){
                                            console.log("You are being attacked by a " + enemyList[2].name + "!")
                                            while(attackedByBear = true && enemyList[2].health > 0 && player.health > 0){
                                                var encounterChoice = readline.question("A Bear has attacked. Will you 'a' attack, or 'r' run or 'p' print character sheet?" )
                                                if (encounterChoice === 'a'){
                                                    while(player.health > 0){
                                                        console.log("You attack the Bear!")
                                                        if(hasTigerFang == true){
                                                            enemyList[2].health = enemyList[2].health - Math.floor(Math.random() * 1000) +1
                                                            player.health = player.health - Math.floor(Math.random() * 30) +1
                                                            console.log(player.name + ": " +player.health+ " health, " +enemyList[2].name + ": " +enemyList[2].health + " health!")
                                                        }else { 
                                                            enemyList[2].health = enemyList[2].health - Math.floor(Math.random() * 30) +1
                                                            player.health = player.health - Math.floor(Math.random() * 30) +1
                                                            console.log(player.name + ": " +player.health+ " health, " +enemyList[2].name + ": " +enemyList[2].health + " health!")
                                                        }
                                                        if(player.health > 0 && enemyList[2].health > 0){
                                                            break
                                                        }else if (player.health > 0 && enemyList[2].health <= 0){
                                                            console.log("You have slain the Bear and have claimed it's heart!")
                                                            hasBearHeart = true
                                                            player.inventory.push(["Bear Heart, "])
                                                            player.name = player.name + " The Bear Devourer"
                                                            attackedByBear == false
                                                            break
                                                        } else if (player.health <= 0) {
                                                            console.log("You have been slain by such a small animal, in the words of Greta Thunberg 'HOW DARE YOU'!")
                                                            attackedByBear == false
                                                            player.health === 0
                                                            console.log("Better luck next time.")
                                                            break
                                                    }
                                                }break

                                                }else if (encounterChoice === 'r'){
                                                    console.log("You attempt to run!")
                                                    var runChance = Math.floor(Math.random() * 2) +1
                                                    if (runChance === 1){
                                                        console.log("You fail to escape.")
                                                        attackedByBear = true
                                                        
                                                    } else if (runChance === 2){
                                                        player.health = player.health - Math.floor(Math.random() * 30) +1
                                                        console.log("You take some damage from the Bear while running. you now have " + player.health + " health")
                                                        attackedByBear = false
                                                        console.log("Better luck next time.")
                                                        if(player.health <= 0){
                                                            console.log("You have been slain by such a small animal, in the words of Greta Thunberg 'HOW DARE YOU'!")
                                                        }
                                                        break
                                                        
                                                    }

                                                }else if (encounterChoice === 'p'){
                                                    console.log("Player: " + player.name)
                                                    console.log("Health: " + player.health)
                                                    console.log("Attack: " + player.attack)
                                                    console.log("Inventory: " + player.inventory)
                                                    
                                                }
                                    
                                            }
                                            
                                    }
                                        
                                    }
                                
                                break
                                }
                                break
                                
                            
                            
                            }
                        }

                    }  else if(hasLionMane == true && hasBearHeart == true && hasTigerFang){
                            player.health === 0
                            console.log("You have finished the game")
                            console.log("Congratulations!!!")
                            console.log("...")
                            console.log("Oh your still here?")
                            console.log("What do you think this is a Marvel movie?")
                            console.log("Your not like expecting a post game scene or something are you?")
                            console.log("Oh you are?")
                            console.log("Well to bad, aint nobody got time for that!")
                            console.log("Go away!")
                            break
                            
                            
                }
                    
                
            
                

            }
        }break
    
}
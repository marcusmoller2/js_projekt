current_player = "player1"
points1 = 0
points2 = 0
current1 = 0
current2 = 0
// Poängen för spelare 1 och 2
// Tillfälliga poäng (rundan) för spelare 1 och 2

document.querySelector("p#roll").addEventListener("click",function(){
    roll_dice()
    // Visa rätt tillfälliga poäng beroende på vilken spelare som spelar
    if(current_player == "player1"){
        document.getElementById("current1").innerHTML = current1
    }
    else if(current_player == "player2"){
        document.getElementById("current2").innerHTML = current2
    }
})
// När man klickar på "keep"-knappen i (p taggen med id #keep)
document.querySelector("p#keep").addEventListener("click",function(){
    if(current_player == "player1"){
        // Lägg till current1 till totalpoängen för player1
        points1 = points1 + current1
        document.getElementById("point1").innerHTML = points1
        // Nollställ tillfälliga poängen
        current1 = 0
        document.getElementById("current1").innerHTML = current1
        if(points1>=50){
            document.getElementById("player1").style.backgroundColor = "green";
        }
        else if(points1<50){
            current_player = "player2"
            document.getElementById("player1").style.backgroundColor = "rgb(239, 63, 116)"
            document.getElementById("player2").style.backgroundColor = "rgb(255, 120, 150)"
        }

    }
    else if(current_player == "player2"){
        points2 = points2 + current2
        document.getElementById("point2").innerHTML = points2
        current2 = 0
        document.getElementById("current2").innerHTML = current2
        if(points2>=50){
            document.getElementById("player2").style.backgroundColor = "green";
        }
        else if(points2<50){
            current_player = "player1"
            document.getElementById("player1").style.backgroundColor = "rgb(255, 120, 150)"
            document.getElementById("player2").style.backgroundColor = "rgb(239, 63, 116)"
        }

    }
})
function change_image(dice_value){
    const images = ["../bilder/dice-1.256x256.png", "../bilder/dice-2.256x256.png",
        "../bilder/dice-3.256x256.png", "../bilder/dice-4.256x256.png","../bilder/dice-5.256x256.png", "../bilder/dice-6.256x256.png"]
    document.getElementById("result").src=images[dice_value]


}

function roll_dice(){
    let dice_result = document.getElementById("result");
    const dice_images = document.getElementById("dice_image");
    let value = Math.floor(Math.random() * 6) + 1;
    change_image(value-1)
    if (current_player == "player1"){
        current1 = current1 + value;
    }
    else if(current_player == "player2"){
        current2 = current2 + value
    }



    
    


}

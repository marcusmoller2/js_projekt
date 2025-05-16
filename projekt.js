current_player = "player1"
points1 = 0
points2 = 0
current1 = 0
current2 = 0

document.querySelector("p#roll").addEventListener("click",function(){
    roll_dice()
    document.getElementById("current11").innerHTML = current1
})
document.querySelector("p#keep").addEventListener("click",function(){
    if(current_player == "player1"){
        points1 = points1 + current1
        document.getElementById("point1").innerHTML = points1
        current1 = 0
        document.getElementById("current11").innerHTML = current1
        if(points1>=50){
            document.getElementById("player1").style.backgroundColor = "green";
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
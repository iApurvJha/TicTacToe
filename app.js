
const element1 = document.querySelectorAll(".item")
const res = document.querySelector("#result")
const reset = document.querySelector("button")
let gif=document.querySelector(".gif")
let count = 0
let resColour="#FDFF00"
let xColor="#FF6037"
let yColor="#FF9933"
let clickSound= new Audio("./utilities/ting.mp3")
let gameSound= new Audio("./utilities/music.mp3")
let drawSound=new Audio("./utilities/gameover.mp3")


//fucntion to reset the values of the TicTacToe Game
function start(){
    count=0
    gameSoundPause()
    drawSoundPause()
    hideGif()
    element1.forEach((element) => {
        element.innerHTML=""
    })
    res.style.display="none"
}
//fucntion to get the charachter at ecah block of grid(x or o)
function getChar(event) {
    clickSound.play()
    count++
    if (event.currentTarget.innerHTML != "X" && event.currentTarget.innerHTML != "O") {
        if (count % 2 != 0) {
            event.currentTarget.innerHTML = "X"
            event.currentTarget.style.color=xColor
            if (count == 9) {
                draw()
                count = 0
            }

        } else {
            event.currentTarget.innerHTML = "O"
            event.currentTarget.style.color=yColor
        }
        let val = []
        let i = 0
        element1.forEach((element) => {
            console.log(element.innerHTML)
            if (element.innerHTML != "X" &&
                element.innerHTML != "O") {
                val.push(i++)

            } else {
                val.push(element.innerHTML)

            }
        })
        win(val)
    }
}
//In Case of draw below fucntion get's activated
function draw(){
    res.innerHTML = "MATCH DRAW"
    res.style.display = "block"
    res.style.color=resColour
    drawSoundPlay()
    setTimeout(start,5000)

}
//Below function declare the result of the game and also annouce the winner
function win(val) {
    if (val[0] == val[1] && val[1] == val[2] && val) {
        res.innerHTML = "Congratulations "+val[0] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(0,1,2)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(0, 1, 2);
          }, 5000);
    } else if (val[0] == val[3] && val[3] == val[6] && val[0] == val[6]) {
        res.innerHTML = "Congratulations "+val[0] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(0,3,6)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(0, 3, 6);
          }, 5000);
    } else if (val[1] == val[4] && val[4] == val[7] && val[1] == val[7]) {
        res.innerHTML = "Congratulations "+val[1] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(1,4,7)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(1, 4, 7);
          }, 5000);
    } else if (val[2] == val[5] && val[5] == val[8] && val[2] == val[8]) {
        res.innerHTML = "Congratulations "+val[2] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(2,5,8)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(2, 5, 8);
          }, 5000);
    } else if (val[3] == val[4] && val[4] == val[5] && val[3] == val[5]) {
        res.innerHTML = "Congratulations "+val[3] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(3,4,5)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(3, 4, 5);
          }, 5000);
    } else if (val[6] == val[7] && val[7] == val[8] && val[6] == val[8]) {
        res.innerHTML = "Congratulations "+val[6] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(6,7,8)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(6, 7, 8);
          }, 5000);
    } else if (val[0] == val[4] && val[4] == val[8] && val[0] == val[8]) {
        res.innerHTML = "Congratulations "+val[0] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(0,4,8)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(0, 4, 8);
          }, 5000);
    } else if (val[2] == val[4] && val[4] == val[6] && val[2] == val[6]) {
        res.innerHTML = "Congratulations "+val[2] + " WON"
        res.style.display = "block"
        res.style.color=resColour
        gameSoundPlay()
        showGif()
        winAnimation(2,4,6)
        setTimeout(start,5000)
        setTimeout(function() {
            winAnimationStop(2, 4, 6);
          }, 5000);
    }


}
//Sound Play's whensomeone win's the game
function gameSoundPlay(){
    gameSound.play()
}

function showGif(){
    gif.style.display="block"
}
//Sound stops automatically after 5 sec
function gameSoundPause(){
    gameSound.pause()
} 
//Sound play's when match is draw    
function drawSoundPlay(){
    drawSound.play()

}
//Draw Sound Pause after 5 sec
function drawSoundPause(){
    drawSound.pause()
}
//Hide the gif after 5 sec
function hideGif(){
    gif.style.display="none"
}
function winAnimation(ind1,ind2,ind3){
    console.log("hello");
    element1[ind1].style.backgroundColor="yellow"
    element1[ind2].style.backgroundColor="yellow"
    element1[ind3].style.backgroundColor="yellow"
}
function winAnimationStop(ind1,ind2,ind3){
    console.log("hello");
    element1[ind1].style.backgroundColor="transparent"
    element1[ind2].style.backgroundColor="transparent"
    element1[ind3].style.backgroundColor="transparent"
}





//Getting the refrence of each block within the grid
reset.addEventListener("click",start)
element1.forEach((element) => {
    element.addEventListener("click", getChar)
})
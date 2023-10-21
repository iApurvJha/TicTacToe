const element1 = document.querySelectorAll(".item")
const res = document.querySelector("#result")
const reset = document.querySelector("button")
let count = 0

//fucntion to reset the values of the TicTacToe Game
function start(){
    element1.forEach((element) => {
        element.innerHTML=""
    })
    res.style.display="none"
}
//fucntion to get the charachter at ecah block of grid(x or o)
function getChar(event) {
    count++
    if (event.currentTarget.innerHTML != "X" && event.currentTarget.innerHTML != "O") {
        if (count % 2 != 0) {
            event.currentTarget.innerHTML = "X"
            if (count == 9) {
                draw(count)
                count = 0
            }

        } else {
            event.currentTarget.innerHTML = "O"
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
function draw(count){
    if(count==9){
        res.innerHTML = "MATCH DRAW"
        res.style.display = "block"
        setTimeout(start,1000)
    }
}
//Below function declare the result of the game and also annouce the winner
function win(val) {
    if (val[0] == val[1] && val[1] == val[2] && val) {
        res.innerHTML = val[0] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[0] == val[3] && val[3] == val[6] && val[0] == val[6]) {
        res.innerHTML = val[0] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[1] == val[4] && val[4] == val[7] && val[1] == val[7]) {
        res.innerHTML = val[1] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[2] == val[5] && val[5] == val[8] && val[2] == val[8]) {
        res.innerHTML = val[2] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[3] == val[4] && val[4] == val[5] && val[3] == val[5]) {
        res.innerHTML = val[3] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[6] == val[7] && val[7] == val[8] && val[6] == val[8]) {
        res.innerHTML = val[6] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[0] == val[4] && val[4] == val[8] && val[0] == val[8]) {
        res.innerHTML = val[0] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    } else if (val[2] == val[4] && val[4] == val[6] && val[2] == val[6]) {
        res.innerHTML = val[2] + " WON"
        res.style.display = "block"
        setTimeout(start,1000)
    }


}




//Getting the refrence of each block within the grid
reset.addEventListener("click",start)
element1.forEach((element) => {
    element.addEventListener("click", getChar)
})
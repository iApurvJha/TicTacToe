const element1 = document.querySelectorAll(".item")
const res = document.querySelector("#result")
let count = 0

function win(val) {
    if (val[0] == val[1] && val[1] == val[2] && val) {
        res.innerHTML = val[0] + " WON"
        res.style.display = "block"
    } else if (val[0] == val[3] && val[3] == val[6] && val[0] == val[6]) {
        res.innerHTML = val[0] + " WON"
        res.style.display = "block"
    } else if (val[1] == val[4] && val[4] == val[7] && val[1] == val[7]) {
        res.innerHTML = val[1] + " WON"
        res.style.display = "block"
    } else if (val[2] == val[5] && val[5] == val[8] && val[2] == val[8]) {
        res.innerHTML = val[2] + " WON"
        res.style.display = "block"
    } else if (val[3] == val[4] && val[4] == val[5] && val[3] == val[5]) {
        res.innerHTML = val[3] + " WON"
        res.style.display = "block"
    } else if (val[6] == val[7] && val[7] == val[8] && val[6] == val[8]) {
        res.innerHTML = val[6] + " WON"
        res.style.display = "block"
    } else if (val[0] == val[4] && val[4] == val[8] && val[0] == val[8]) {
        res.innerHTML = val[0] + " WON"
        res.style.display = "block"
    } else if (val[2] == val[4] && val[4] == val[6] && val[2] == val[6]) {
        res.innerHTML = val[2] + " WON"
        res.style.display = "block"
    }

}

function getChar(event) {
    count++
    if (event.currentTarget.innerHTML != "X" && event.currentTarget.innerHTML != "O") {
        if (count % 2 != 0) {
            event.currentTarget.innerHTML = "X"
            if (count == 9) {
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



element1.forEach((element) => {
    element.addEventListener("click", getChar)
})
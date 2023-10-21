// var element1=document.querySelector(".item")
// var box=document.getElementsByClassName("item")
const element1=document.querySelectorAll(".item")
let count=0

function getChar(event){
    count++
    if(count%2!=0 ){
        console.log(count);
        event.currentTarget.innerHTML="X"
        if(count==9){
            count=0
        }

    }
    else{
        console.log(count);
        event.currentTarget.innerHTML="Y"

    }
}

element1.forEach((element)=>{
    element.addEventListener("click",getChar)
})

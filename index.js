// Your code here
let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"
let velocity = 10

document.addEventListener("keydown", function(e){
    // rightNumbers = dodger.style.right.replace("px","")
    // right = parseInt(rightNumbers,10)
    // upNumbers = dodger.style.up.replace("px","")
    // up = parseInt(upNumbers,10)
    // downNumbers = dodger.style.down.replace("px","")
    // down = parseInt(downNumbers,10)
//    moveDodger(e.key)  
    moveDodgerRight()
    moveDodgerLeft()
})

function moveDodger(key) {
    let leftNumbers = dodger.style.left.replace("px",""); 
    let left = parseInt(leftNumbers,10); 
    let upNumbers = dodger.style.bottom.replace("px","")
    let up = parseInt(upNumbers,10);
    if (key === "ArrowRight"){
        dodger.style.left = `${left + velocity}px`
    }
    if (key === "ArrowLeft"){
        dodger.style.left = `${left - velocity}px`
    }
    if (key === "ArrowUp"){
        dodger.style.bottom = `${up + velocity}px`
    }
    if (key === "ArrowDown"){
        dodger.style.bottom = `${up - velocity}px`
    }
}

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px",""); 
    let left = parseInt(leftNumbers,10);
    dodger.style.left = `${left + velocity}px`
}

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px",""); 
    let left = parseInt(leftNumbers,10);
    dodger.style.left = `${left - velocity}px`
}
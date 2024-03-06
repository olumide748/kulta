let errorParagraph = document.getElementById("error")

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "WEBSITE IS CURRENLY GOING THROUGH UPGRADES CHECK BACK IN FEW MINUTES"
}

let countEl = document.getElementById("count-el")
console.log (countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0

function increment(){
    count +=  1
    countEl.textContent = count
}  


function decrement(){
    if (count > 0)  // Check if count is greater than 0
    count -=  1
    countEl.textContent = count
}  



function save(){
    let countstr = count + " - " + "👍"
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}
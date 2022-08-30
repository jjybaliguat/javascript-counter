let count = 0;
let countEl = document.getElementById("countEl")
let saveEl = document.getElementById("saveEl")

function increment(){
    count += 1
    countEl.textContent = count
}
function decrement(){
    if(countEl.textContent > 0){
        count -= 1
        countEl.textContent = count
    }
}

function save() {
    if(countEl.textContent > 0){
        let savedStr = count + " - "
        saveEl.textContent += savedStr
        countEl.textContent = 0
        count = 0
    }
}

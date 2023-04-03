
let emojiArr = ['☕','🏕️','🦖']
const frontAddBtn = document.getElementById("add-front")
const frontMinusBtn = document.getElementById("mi-front")
const backAddBtn = document.getElementById("add-back")
const backMinusBtn = document.getElementById("mi-back")
const inputElm = document.getElementById("input-elm")
let pElm = document.getElementById("emoji-p")

for(let i = 0 ; i < emojiArr.length; i++)
    pElm.textContent += emojiArr[i]


frontAddBtn.addEventListener('click',function(){
    let elm = inputElm.value
    inputElm.value = ""
    if(elm){
        emojiArr.unshift(elm)
        pElm.textContent = ""
        for(let i = 0 ; i < emojiArr.length; i++)
            pElm.textContent  +=  emojiArr[i]
    }
    
    
})

frontMinusBtn.addEventListener('click',function(){
    emojiArr.shift()
    pElm.textContent = ""
    for(let i = 0 ; i < emojiArr.length; i++)
        pElm.textContent  +=  emojiArr[i]
})

backAddBtn.addEventListener('click',function(){
    let elm = inputElm.value
    inputElm.value = ""
    if(elm){
        emojiArr.push(elm)
        pElm.textContent = ""
        for(let i = 0 ; i < emojiArr.length; i++)
            pElm.textContent  +=  emojiArr[i]
    }
})

backMinusBtn.addEventListener('click',function(){
    emojiArr.pop()
    pElm.textContent = ""
    for(let i = 0 ; i < emojiArr.length; i++)
        pElm.textContent  +=  emojiArr[i]
})
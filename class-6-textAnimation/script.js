let breakText = ()=>{
    let h1 = document.querySelector("h1")
let h1Text = h1.textContent;

let splittedText = h1Text.split("")
let clutter = ""
let halfValue = splittedText.length/2

splittedText.forEach((elem,idx)=>{
    if(halfValue > idx){
        clutter += `<span class = "a">${elem}</span>`
    }
    else{
       clutter += `<span class = "b">${elem}</span>`
    }
})
h1.innerHTML = clutter
}

breakText()

gsap.from("h1 .a",{
    y:50,
    duration:1,
    delay:0.3,
    stagger:0.15,
    opacity:0
})

gsap.from("h1 .b",{
    y:50,
    duration:1,
    delay:0.3,
    stagger:-0.15,
    opacity:0
})
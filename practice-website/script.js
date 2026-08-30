function page1Animation(){
    let tl = gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.3,
    duration:0.8,
    stagger:0.2
})

tl.from(".center-part1 h1",{
    opacity:0,
    x:-300,
    duration:1
})
tl.from(".center-part1 p",{
    opacity:0,
    x:-100,
    duration:0.5
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=1")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.3,
    duration:0.6
})
}


function page2Animation(){
    
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 40%",
        end:"top 0%",
        scrub:2,
    }
})

tl2.from(".services",{
    y:-30,
    opacity:0,
    duration:0.5
})

tl2.from(".elem-1",{
    x:-300,
    opacity:0,
    duration:1
},"topRow")
tl2.from(".elem-2",{
    x:300,
    opacity:0,
    duration:1
},"topRow")

tl2.from(".elem-3",{
    x:-300,
    opacity:0,
    duration:1
},"bottomRow")
tl2.from(".elem-4",{
    x:300,
    opacity:0,
    duration:1
},"bottomRow")


}


page1Animation()
page2Animation()
// gsap.from("#page1 #box",{
//     scale:0,
//     duration:2,
//     delay:1,
//     rotate:360
// })


//SCROLL TRIGGER

// gsap.from("#page2 h1",{
//     duration:2,
//     x:-500,
//     opacity:0,
//     scrollTrigger:{
//         trigger: "#page2 h1",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 h2",{
//     duration:2,
//     x:500,
//     opacity:0,
//     scrollTrigger:{
//         triggrs:true,
//         start:"top 20%",
//         scrub: "#page2 h2",
//         scroller:body,
//         markers:true
//     }
// })


// gsap.from("#page2 #box",{
//     duration:1,
//     scale:0,
//     opacity:0,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 ",
//         markers:true,
//         start:"top 40%",
//         end:"top 2%",
//         scroller:"body",
//         scrub:5
//     }
// })


gsap.to('#page2 h1',{
    Transform:"translate(-200%)",
    scrollTrigger:{
        trigger:"#page2",
        markers:true,
        scroller:"body",
        start:"top 0%",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})
import './style.css'
import {gsap} from 'gsap'


// gsap.to(".box",{
//   x:400,
//   rotation:720,
//   duration:3,
//   ease:"bounce.out"
// })


// gsap.from(".box",{
//   x:400,
//   rotation:720,
//   duration:3,
//   ease:"bounce.out"
// })


// gsap.fromTo(".box",{
//   x:400,
//   rotation:360,
//   duration:1,
//   scale:0.5,
//   opacity:0
// },{
//   x:800,
//   rotation:360,
//   duration:1,
//   scale:1,
//   opacity:1
// })



// let target = {
//   score : 0
// }

// gsap.to(target,{
//   score:500,
//   ease:'none',
//   duration:3,
//   onUpdate:()=>{
//     console.log(Math.round(target.score));
//   }
// })




//TIMELINE

let tl = gsap.timeline()

// tl.to('.box1',{
//   x:800,
//   duration:2,
//   rotate:360,
//   delay:1
// })
// tl.to('.box2',{
//   x:800,
//   duration:2
// })
// tl.to('.box3',{
//   x:800,
//   duration:2,

// })


tl.from('h2',{
  y:-20,
  duration:0.6,
  opacity:0
})

tl.from('h4',{
  y:-20,
  duration:0.5,
    opacity:0,
  stagger:0.3
}
)

tl.from("h1",{
  opacity:0,
  scale:0.2,
  duration:0.5,
  
})
gsap.registerPlugin(AttrPlugin);
let path = `M 10 100 Q 750 100 1490 100`

let finalPath = `M 10 100 Q 750 100 1490 100`

const string = document.querySelector('#string')

string.addEventListener("mousemove",(dets)=>{
    path = `M 10 100 Q ${dets.x} ${dets.y} 1490 100`

    gsap.to('svg path',{
        attr:{d : path},
        duration:0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave",()=>{
  gsap.to('svg path',{
    attr:{d:finalPath},
    duration:1.5,
    ease: "elastic.out(2,0.2)",
  })
})
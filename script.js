var t1 = gsap.timeline();

t1.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
})

t1.from("#main h1",{
    y:200,
    opacity:0,
    stagger:0.2,    
})

t1.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.2
})

t1.from("#main h5",{
    scale:0,
    opacity:0
})

t1.to("#main h5",{
    y:40,
    repeat:-1,
    duration:1,
    yoyo:true 
})
// // gsap.to("#box",{
// //     x:200,
// //     duration:2,
// //     delay:1,
// //     backgroundColor:"green",
// //     rotate:360,
// //     scale:0.5,
// // })

// // gsap.from("#box",{
// //     x:900,
// //     duration:2,
// //     delay:2,
// //     backgroundColor:"yellow"
// // })

// var t1 = gsap.timeline();

// t1.to("h1",{
//     x:600,
//     duration:1
// })

// t1.to("h2",{
//     x: 700,
//     duration:
// })

// gsap.to("h1",{
//     x:600,
//     color:"orange",
//     delay:1,
//     duration:1,
//     stagger:1,
//     repeat:1,
//     yoyo:true
// })

// // gsap.to("h2",{
// //     x:600,
// //     color:"salmon",
// //     delay:3,
// //     duration:2,
// // })


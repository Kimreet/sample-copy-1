
gsap.registerPlugin(ScrollTrigger) 
let t1 = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".banner",
    pin:true,
    start:"top top",
    end:"+=200%",
    scrub:0.1,  
    markers:true,
    ease:"none",
    onUpdate: (self)=>{
if(self.progress>=0.3){
  gsap.to("#img2",{
    autoAlpha:1,
    zIndex:"9999",
  })
  gsap.to("#img1",{
    autoAlpha:0,
    zIndex:"-1",
  })
}
    }
  },
});


t1.to(".bannertext",{
  y:-400,
    scale:0.6,
},"abc")
t1.to(".bannertext",{
  x:-100,
  
})
.to(".bannerimg",{
scale:0.2
},"abc")



function openGlass() {
  gsap.to(".circle2", {boxShadow: "inset 8px 8px 21px #1f2529, inset -8px -8px 21px #293337"})
  gsap.to(".glassLeft", {duration: 5, x: "-100%", delay: 1, ease: "bounce"});
  gsap.to(".glassRight", {duration: 5, x: "100%", delay: 1, ease: "bounce"});  
}
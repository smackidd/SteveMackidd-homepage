

function openGlass() {
  gsap.to(".circle2", {boxShadow: "inset 8px 8px 21px #1f2529, inset -8px -8px 21px #293337"});
  gsap.to(".blocks", {opacity: 1, delay: 0.5, stagger: 0.05, repeat: 1, yoyo: true});
  gsap.to(".title", {duration: 1, height: "115px", delay: 2, ease: "power1"});
  gsap.to(".title", {duration: 1.5, rotate: "90deg", right: "-160px", delay: 3, ease: "power1"});
  gsap.to("i", {duration: 1.5, rotate: "-90deg", delay: 3.5, ease: "bounce"});
  gsap.to(".glassLeft", {duration: 4, x: "-100%", delay: 2, ease: "bounce"});
  gsap.to(".glassRight", {duration: 4, x: "100%", delay: 2, ease: "bounce"});
  gsap.to(".circle1, .circle2", {duration: 0.5, opacity: 0, delay: 3.5});
  gsap.to(".glass", {duration: 0.5, display: "none", opacity: 0, delay: 6}); 
}
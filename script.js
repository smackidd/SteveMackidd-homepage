gsap.registerPlugin(ScrollTrigger);
const tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutCard",
    start: "top 25%",
    end: "+=500",
  },
});
// const tlAbout2 = gsap.timeline({
//   trigger: ".about",
//   start: "top 10%",
//   end: "top 10%",
//   pin: true,
//   scrub: true
//   });

function openGlass() {
  gsap.to(".circle2", {boxShadow: "inset 8px 8px 21px #1f2529, inset -8px -8px 21px #293337"});
  gsap.to(".blocks", {opacity: 1, delay: 0.5, stagger: 0.05});
  gsap.to(".title", {duration: 1, height: "115px", delay: 2, ease: "power1.inOut"});
  gsap.to(".title", {duration: 1.5, rotate: "90deg", right: "-160px", position: "fixed", delay: 3, ease: "power1.inOut"});
  gsap.to("i", {duration: 1.5, rotate: "-90deg", delay: 3.5, ease: "bounce"});
  gsap.to(".glassLeft", {duration: 4, x: "-100%", delay: 2, ease: "power1"});
  gsap.to(".glassRight", {duration: 4, x: "100%", delay: 2, ease: "power1"});
  gsap.to(".circle1, .circle2", {duration: 0.5, opacity: 0, delay: 2});
  gsap.to(".glass", {duration: 0.5, display: "none", opacity: 0, delay: 6});
  gsap.to(".about", {display: "block", delay: 6.5}); 
  gsap.to(".projects", {display: "block", delay: 6.5});
  gsap.to(".contact", {display: "flex", delay: 6.5});
}


// tlAbout.from(".aboutLines div", {
//   duration: 1, width: 0, ease: "back"
// });
tlAbout.from(".aboutCard", {
  //duration: 1.2, 
  height: 0, 
  opacity: 0, 
  //ease: "power2"
});

tlAbout.from(".aboutCardInfo", {
  
  //duration: 1.5,
  height: 0, 
  opacity: 0, 
  //ease: "power4"
});


////
// email form
////
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var name = document.getElementById("contact-name");
  var email = document.getElementById("contact-email");
  var message = document.getElementById("contact-message");
  var data = new FormData(event.target);

  if (!name || !email || !message) {
    status.innerHTML = "Please complete all fields in the form";
    return;
  }
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit);

////
// input label move
////
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
  
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})
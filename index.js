var myNav = document.getElementById('menu-bar');
window.onscroll = function () { 
    "use strict";
    
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1 ) {
      console.log('here');
        myNav.classList.add("nav-colored");
        myNav.classList.add("sticky");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav.classList.remove("sticky");
    }
};

/////
//landing page fade in
/////

//fade in the boxes in experience.html
// const landingPageFadeIn = ()=>{
  
//   const content = document.querySelectorAll('.landing-page-column');
  
  
//   window.addEventListener('load', () => {
    
//     //animate boxes
//     content.forEach((content, index) => {
      
//       content.style.animation = `boxFadeIn 2.0s ease forwards`;
//       content.style.display = `initial`;
//     });
    
    
//   });
// }

/////
//Email Form
/////

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

/* Navbar JavaScript animation has been adapted from this Youtube tutorial
https://www.youtube.com/watch?v=gXkqy0b4M5g */

const navbarSlide = ()=>{
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar li');
  
  
  burger.addEventListener('click', () => {
    //toggle navbar
    navbar.classList.toggle('burger-active');
    burger.classList.toggle('toggle');
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.3}s`;
      }
    });
    
    
  });
}

navbarSlide();

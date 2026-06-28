// ==========================
// EXTRA MILE WINDOW CLEANING
// Website Interactions
// ==========================



// Add shadow to navigation after scrolling

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.18)";

    } else {

        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.12)";

    }


});






// ==========================
// SCROLL REVEAL ANIMATION
// ==========================


const revealElements = document.querySelectorAll(

".card, .trust div, .about-image, .about-text, .video-section video, .areas, .contact"

);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},

{

threshold:0.15

}



);



revealElements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


});






// ==========================
// MOBILE MENU PREPARATION
// ==========================
//
// This leaves room for adding
// a hamburger menu later
// if needed.
//



console.log(
"Extra Mile Window Cleaning website loaded successfully."
);
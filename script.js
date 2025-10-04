
function changeText(){
    const bio2 = document.getElementById('bio2');
    bio2.innerText = (bio2.innerText === "Aspiring Web Developer, Cloud Specialist." ? "Actually a Beginner." : "Aspiring Web Developer, Cloud Specialist.");
}

function toggleDarkMode(){
    const bodyColor = document.body;
    const nav = document.querySelector("nav");
    bodyColor.classList.toggle("dark-mode")
    nav.classList.toggle("dark-nav")
}


let images = ["images/home.png", "images/envelope.png", "images/phone-call.png", "images/user.png" ];

let index = 0;

function previewSlide(){
    index = (index - 1)% images.length;
    document.getElementById('project-image').src = images[index];
}

function nextSlide(){
    index = (index + 1)% images.length;
    document.getElementById('project-image').src = images[index];
}
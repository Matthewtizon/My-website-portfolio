
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


const form = document.getElementById('myform')

console.log(form)

let savedName = '';
let savedEmail = '';
let savedMessage = '';



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    savedName = formData.get('name');
    savedEmail = formData.get('email');
    savedMessage = formData.get('message');

    submitHandler();
})

function submitHandler() {
    console.log(`Name: ${savedName}
Email: ${savedEmail}
Message: ${savedMessage}`)
}

function changeText(){
    const bio2 = document.getElementById('bio2');
    bio2.innerText = (bio2.innerText === "Aspiring Web Developer, Cloud Specialist." ? "Actually a Beginner." : "Aspiring Web Developer, Cloud Specialist.");
}

function toggleDarkMode(){
    const bodyColor = document.body;
    bodyColor.classList.toggle("dark-mode")
}
const hambugerMenu = document.querySelector(".hambuger-menu")
const navMenu = document.querySelector(".nav-menu") 
const closeBtn = document.querySelector(".close-button")

hambugerMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("active")
})

closeBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})


const questions = document.querySelectorAll(".the-questions")

    questions.forEach(questions => {
        questions.addEventListener("click", () => {
            questions.classList.toggle("active");
    })
})
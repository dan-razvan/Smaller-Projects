const openit = document.getElementById("open")
const closeit=document.getElementById("close")
const container = document.querySelector(".container")

openit.addEventListener("click", () => {
    container.classList.add("show-nav")
})

closeit.addEventListener("click", () => {
    container.classList.remove("show-nav")
})
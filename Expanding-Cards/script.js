let panels = document.querySelectorAll(".panel")

panels.forEach((element) => {
    element.addEventListener("click", ()=> {
        panels.forEach((item) => {
            item.classList.remove("active")
        })
        element.classList.add("active")
    })
})


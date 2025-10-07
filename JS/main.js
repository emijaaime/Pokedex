document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section")
    const links = document.querySelectorAll(".navbar .ancla")
    
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                links.forEach((link) => {
                    link.classList.remove("active")
                })
                const sectionId = entry.target.getAttribute("id")
                const activeLink = document.querySelector(`.navbar .ancla[href="#${sectionId}"]`)
                activeLink.classList.add("active")
            }
        })
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    })

    sections.forEach( (section) => {
        observer.observe(section)
    })
})


let sections = document.querySelectorAll(".sections");

sections.forEach(section => {
    section.addEventListener("mouseover", () => {
        section.style.backgroundColor = "rgb(0, 0, 65)";
    });
    section.addEventListener("mouseout", () => {
        section.style.backgroundColor = "rgb(0, 0, 32)";
    });
});



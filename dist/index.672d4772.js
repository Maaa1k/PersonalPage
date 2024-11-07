const links = document.querySelectorAll(".nav-link");
function showSection(targetId) {
    const allSections = document.querySelectorAll(".seccion");
    allSections.forEach((section)=>section.classList.remove("activa"));
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add("activa");
    const footer = document.querySelector("footer");
    footer.classList.remove("visible");
}
links.forEach((link)=>{
    link.addEventListener("click", function(event) {
        const targetId = link.getAttribute("data-target");
        showSection(targetId);
    });
});
window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight - 50) footer.classList.add("visible");
    else footer.classList.remove("visible");
});

//# sourceMappingURL=index.672d4772.js.map

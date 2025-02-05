document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a");

    function showSection(sectionId) {
        sections.forEach((section) => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });

        navLinks.forEach((link) => {
            link.classList.toggle("text-yellow-400", link.getAttribute("href").substring(1) === sectionId);
            link.classList.toggle("text-gray-300", link.getAttribute("href").substring(1) !== sectionId);
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    showSection("about"); // Garante que "About Me" aparece ao carregar
});

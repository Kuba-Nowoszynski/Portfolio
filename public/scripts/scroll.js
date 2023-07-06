document.getElementById("aboutLink").addEventListener("click", scrollToTop);
document
  .getElementById("projectsLink")
  .addEventListener("click", scrollToSection);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToSection() {
  const targetSection = document.getElementById("projects");
  targetSection.scrollIntoView({ behavior: "smooth" });
}

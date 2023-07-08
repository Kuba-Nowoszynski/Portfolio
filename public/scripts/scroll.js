document
  .getElementById("aboutLink")
  .addEventListener("click", () => scrollToTarget("about"));
document
  .getElementById("projectsLink")
  .addEventListener("click", () => scrollToTarget("projects"));

function scrollToTarget(target) {
  const targetElement = document.getElementById(target);
  const scrollOffset = -100;

  const targetPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = targetPosition + window.pageYOffset + scrollOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

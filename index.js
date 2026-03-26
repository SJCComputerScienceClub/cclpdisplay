document.querySelectorAll(".quad").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("href");
    const logo = document.querySelector(".center-logo");

    // animate expansion from center (SAFE)
    logo.style.transition = "all 0.6s ease";
    logo.style.transform = "scale(6)";   // grows from center
    logo.style.opacity = "0.9";

    // fade out grid
    document.querySelector(".grid").style.opacity = "0";

    setTimeout(() => {
      window.location.href = link;
    }, 600);
  });
});
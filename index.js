
document.querySelectorAll(".quad").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("href");
    const logo = document.querySelector(".center-logo");

    // expand logo
    logo.style.transition = "all 0.5s ease";
    logo.style.width = "100vw";
    logo.style.height = "100vh";
    logo.style.borderRadius = "0";
    logo.style.top = "0";
    logo.style.left = "0";
    logo.style.transform = "none";

    // delay page load
    setTimeout(() => {
      window.location.href = link;
    }, 500);
  });
});

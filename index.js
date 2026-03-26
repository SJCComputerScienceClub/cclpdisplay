document.querySelectorAll(".quad").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("href");
    const logo = document.querySelector(".center-logo");
    const grid = document.querySelector(".grid");

    // lock current size first (important for iPad Safari)
    const rect = logo.getBoundingClientRect();
    logo.style.position = "absolute";
    logo.style.top = rect.top + "px";
    logo.style.left = rect.left + "px";
    logo.style.width = rect.width + "px";
    logo.style.height = rect.height + "px";

    // animate EXPANSION of container (not image)
    requestAnimationFrame(() => {
      logo.style.transition = "all 0.6s ease";
      logo.style.top = "0";
      logo.style.left = "0";
      logo.style.width = "100vw";
      logo.style.height = "100vh";
    });

    // fade grid
    grid.style.opacity = "0";

    setTimeout(() => {
      window.location.href = link;
    }, 600);
  });
});

document.querySelectorAll(".quad").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("href");
    const logo = document.querySelector(".center-logo");

    // lock center
    logo.style.top = "50%";
    logo.style.left = "50%";
    logo.style.transform = "translate(-50%, -50%)";

    // animate expansion (NOT scale)
    logo.style.width = getComputedStyle(logo).width;
    logo.style.height = getComputedStyle(logo).height;
    logo.style.transition = "all 0.6s ease";
    logo.style.width = "120vw";
    logo.style.height = "120vh";
    logo.style.borderRadius = "0";
    logo.style.opacity = "0.9";

    // optional: fade out background grid
    document.querySelector(".grid").style.opacity = "0";

    setTimeout(() => {
      window.location.href = link;
    }, 600);
  });
});


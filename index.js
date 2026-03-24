document.querySelectorAll(".quad").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("href");
    const logo = document.querySelector(".center-logo");

    // lock center positioning
    logo.style.top = "50%";
    logo.style.left = "50%";

    // animate from center
    logo.style.transition = "all 0.5s ease";
    logo.style.transform = "translate(-50%, -50%) scale(10)";
    logo.style.borderRadius = "0";

    // OPTIONAL: fade grid out
    document.querySelector(".grid").style.opacity = "0";

    setTimeout(() => {
      window.location.href = link;
    }, 500);
  });
});


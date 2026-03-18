<script>
const detailView = document.getElementById("detailView");
const detailContent = document.getElementById("detailContent");

// CONTENT FOR EACH TRADITION
const traditionData = {
  gonzaga: {
    title: "Gonzaga March On",
    text: "Description about this tradition goes here.",
    img: "images/gonzaga.jpg"
  },
  cadetscare: {
    title: "Operations Cadets Care",
    text: "Students support the community through service.",
    img: "images/cadetscare.jpg"
  },
  christmas: {
    title: "Christmas Dinner",
    text: "A formal holiday gathering celebrating community.",
    img: "images/christmas.jpg"
  },
  turkey: {
    title: "Turkey Bowl",
    text: "Annual football tradition bringing cadets together.",
    img: "images/turkeybowl.jpg"
  },
  ball: {
    title: "Regimental Ball",
    text: "A formal evening celebrating leadership and tradition.",
    img: "images/ball.jpg"
  },
  march: {
    title: "March Madness",
    text: "Competitive and fun basketball tournament event.",
    img: "images/marchmadness.jpg"
  }
};

// CLICK HANDLER
document.querySelectorAll(".tradition-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const data = traditionData[id];

    detailContent.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.text}</p>
      <img src="${data.img}" alt="">
    `;

    detailView.classList.add("active");
  });
});

// CLOSE FUNCTION
function closeDetail() {
  const card = document.querySelector(".detail-card");
  
  // flip out animation
  card.style.transform = "scale(0.6) rotateY(90deg)";
  
  setTimeout(() => {
    detailView.classList.remove("active");
    card.style.transform = ""; // reset
  }, 300);
}
</script>
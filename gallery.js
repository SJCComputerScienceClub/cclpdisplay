const items = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDescription = document.getElementById("modal-description");

items.forEach(item => {
  item.addEventListener("click", () => {

    const img = item.querySelector("img");

    modal.style.display = "block";
    modalImg.src = img.src;

    modalTitle.textContent = item.dataset.title;
    modalYear.textContent = item.dataset.year;
    modalDescription.textContent = item.dataset.description;
  });
});

function closeModal() {
  modal.style.display = "none";
}

/* Close if click outside */
window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
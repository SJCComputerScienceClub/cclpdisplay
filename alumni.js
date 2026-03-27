function openAlumni(card) {
  const img = card.querySelector("img").src;
  const name = card.querySelector("p").innerText;
  const bio = card.querySelector(".bio").innerHTML;

  document.getElementById("detailImg").src = img;
  document.getElementById("detailName").innerText = name;
  document.getElementById("detailBio").innerHTML = bio;

  document.getElementById("detailView").classList.add("active");
}

function closeAlumni() {
  document.getElementById("detailView").classList.remove("active");
}
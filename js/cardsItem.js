import carsArr from "./cards.js";

const listEl = document.createElement("ul");
listEl.classList.add("cars-list");

console.log(document.body);
document.body.prepend(listEl);

const modalImgRef = document.querySelector(".modal-img");
const modalRef = document.querySelector(".modal");

const markup = carsArr
  .map(
    ({ name, url, id, description }) =>
      `<li><p>${name}</p><img src='${url}' alt='${description}' id='${id}' width='320'></img></li>`
  )
  .join(" ");

listEl.insertAdjacentHTML("afterbegin", markup);

listEl.addEventListener("click", (e) => {
  console.log("hello");
  if (e.target.localName === "img") {
    modalRef.style.display = "block";
    modalImgRef.src = e.target.src;
  }
});

modalRef.addEventListener("click", (e) => {
  console.log("hello");
  if (e.target.localName !== "img") {
    modalRef.style.display = "none";
    modalImgRef.src = "";
  }
});

window.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  if (e.key === "Escape") {
    modalRef.style.display = "none";
    modalImgRef.src = "";
  }
});

modalRef.addEventListener("click");

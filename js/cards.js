import gallery from "./gallery-items.js";

const listEl = document.createElement("ul");
listEl.classList.add("cars-list");
document.body.prepend(listEl);

const modalImgRef = document.querySelector(".modal-img");
const modalRef = document.querySelector(".modal");

const markup = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </li>`
  )
  .join("");

listEl.innerHTML = markup;

const cardRef = document.querySelector(".gallery__item");
const imgRef = document.querySelector(".gallery__image");

cardRef.addEventListener("click", (e) => {
  e.preventDefault();

  modalImgRef.src = imgRef.dataset.source;
  modalImgRef.alt = imgRef.alt;
  console.dir(e);
  if (e.currentTarget === cardRef) {
    // imgRef.src = imgRef.dataset.source;

    modalRef.style.display = "block";

    console.log(e.target);
  }
});
modalRef.addEventListener("keypress", function (e) {
  console.dir(e.target);
  if (e.keydown === 27) document.getElementById("modal_id").hidden = 1;
});

// imgRef.src = "https://cdn0.wideopenpets.com/wp-content/uploads/2019/08/Pet-Raccoons.png";

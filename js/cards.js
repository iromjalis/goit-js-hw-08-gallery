import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery");
// const galleryItemRef = document.querySelector(".gallery__item");

const modalImgRef = document.querySelector(".lightbox__image");
const modalRef = document.querySelector(".lightbox__overlay");

const buttonRef = document.querySelector(".lightbox__button");

const markup = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </li>`
  )
  .join("");

galleryListRef.innerHTML = markup;

galleryListRef.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.localName === "img") {
    modalImgRef.src = e.target.dataset.source;
    modalImgRef.alt = e.target.alt;

    modalRef.style.display = "block";
    modalImgRef.style.display = "block";
    buttonRef.style.display = "block";
  }
});

window.addEventListener("keyup", (e) => {
  if (
    e.key === "Escape" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown"
  ) {
    modalRef.style.display = "none";
    modalImgRef.style.display = "none";
    buttonRef.style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  if (e.target.localName !== "img") {
    modalRef.style.display = "none";
    modalImgRef.style.display = "none";
    buttonRef.style.display = "none";
  }
});

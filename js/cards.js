import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery");
const modalImgRef = document.querySelector(".lightbox__image");
const modalRef = document.querySelector(".lightbox");
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

const onOpenModalClick = (e) => {
  e.preventDefault();

  if (e.target.localName === "img") {
    modalImgRef.src = e.target.dataset.source;
    modalImgRef.alt = e.target.alt;

    modalRef.classList.add("is-open");
  }
};

const onKeyboardClick = (e) => {
  if (
    e.key === "Escape" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown"
  ) {
    modalRef.classList.remove("is-open");
  }
};

const onCloseModalClick = (e) => {
  if (e.target.localName !== "img") {
    modalRef.classList.remove("is-open");
  }
};

galleryListRef.addEventListener("click", onOpenModalClick);
window.addEventListener("keyup", onKeyboardClick);
window.addEventListener("click", onCloseModalClick);
buttonRef.addEventListener("click", onCloseModalClick);
// buttonRef.addEventListener("click", (e) => {
//   modalRef.classList.remove("is-open");
// });

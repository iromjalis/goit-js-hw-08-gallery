import gallery from "./gallery-items.js";

const listEl = document.createElement("ul");
listEl.classList.add("js-gallery");
document.body.prepend(listEl);

const modalImgRef = document.querySelector(".modal-img");
const modalRef = document.querySelector(".modal");
let closeBtn = ` <button type="button" class="closeBtn" > x
<svg class=""  width="24" height="18" aria-label="Закрытие модального окна">
  <use class="closeBtnSvg" width="24" height="16" href="./images/icon-close.svg"></use></svg></button>`;
modalRef.insertAdjacentHTML("beforebegin", closeBtn);
// const galleryItemRef = document.querySelector(".gallery__item");
// const galleryImgRef = document.querySelector(".gallery__image");
const buttonRef = document.getElementsByTagName("button");
buttonRef.hidden = "true";

const markup = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </li>`
  )
  .join("");

listEl.innerHTML = markup;

listEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.localName === "img") {
    modalImgRef.src = e.target.dataset.source;
    modalImgRef.alt = e.target.alt;

    modalRef.style.display = "block";
    document.querySelector(".closeBtn").style.display = "block";
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
    document.querySelector(".closeBtn").style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  if (e.target.localName !== "img") {
    modalRef.style.display = "none";
    document.querySelector(".closeBtn").style.display = "none";
  }
});

import itemList from "./gallery-items.js";
const galleryRef = document.querySelector(".js-gallery");
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector(".js-lightbox > .lightbox__overlay");
const bodyRef = document.querySelector("body");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxImageRef = document.querySelector(".lightbox__content > .lightbox__image");

const createGalleryItem = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a
    class="gallery__link"
    href='${original}'
  >
  <img
  class="gallery__image"
  src='${preview}'
  data-source="${original}"
  alt="${description}"
  width = 480
  height = 240
  loading = "lazy"
  />
  </a>
  </li>`;
    })
    .join(" ");
};

const changeSettings = (e) => {
  lightboxImageRef.src = e.target.dataset.source;
  lightboxImageRef.alt = e.target.alt;
};

const onOpenModalBtnCLick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  lightboxRef.classList.add("is-open");
  changeSettings(e);
};
const onCloseModalBtnClick = (e) => {
  lightboxRef.classList.remove("is-open");
  changeSettings(e);
};
const onEscKeydown = (e) => {
  if (e.keyCode !== 27) {
    return;
  }
  lightboxRef.classList.remove("is-open");
  changeSettings(e);
};

const createMarkup = createGalleryItem(itemList);
galleryRef.insertAdjacentHTML("beforeend", createMarkup);

bodyRef.addEventListener("keydown", onEscKeydown);

galleryRef.addEventListener("click", onOpenModalBtnCLick);
closeModalBtnRef.addEventListener("click", onCloseModalBtnClick);
lightboxOverlayRef.addEventListener("click", onCloseModalBtnClick);

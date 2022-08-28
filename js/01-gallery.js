import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
function createGalleryItem(galleryItem) {
  const { preview, original, description } = galleryItem;
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
          class="gallery__image"
          src="${preview}"
          data-sourse="${original}"
          alt="${description}"
  />
  </a>
  </div>`;
}

const createGalleryItems = galleryItems.map(createGalleryItem).join("");

gallery.insertAdjacentHTML("beforeend", createGalleryItems);

function onGalleryImegeClick(event) {
  event.preventDefault();

  const sourseImg = event.target.dataset.sourse;
  const instance = basicLightbox.create(
    `<img src='${sourseImg}' width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", onEscPress);

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}

gallery.addEventListener("click", onGalleryImegeClick);

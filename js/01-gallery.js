import { galleryItems } from "./gallery-items.js";
const onGallery = document.querySelector(".gallery");
console.log(galleryItems);

onGallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href='${original}'>
        <img
          class="gallery__image"
          src="${preview}"
          data-source='${original}'
          alt="${description}"
        />
      </a>
    </div>`
    )
    .join("")
);

onGallery.addEventListener("click", onClickImg);
function onClickImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height = "600" >`
  );

  instance.show();

  onGallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

import { galleryItems } from './gallery-items.js';


console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    }).join('');
};

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    galleryItems.map((item) => {
        if (item.original === event.target.dataset.source) {
            const instance = basicLightbox.create(`
    <img src="${item.original}" width="800" height="600">
`);
            instance.show();
        };

    });
};
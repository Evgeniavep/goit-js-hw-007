import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);


const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`)



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
    instance.show()

};
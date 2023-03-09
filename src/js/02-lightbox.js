import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryEl = document.querySelector('ul');
const galleryContainerEl = document.createElement("div");
galleryContainerEl.classList.add('gallery');
galleryEl.before(galleryContainerEl);
galleryEl.remove();

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return  `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    `}).join('');
}

var gallery = new SimpleLightbox('.gallery a', {  
     captionsData: 'alt',
     captionDelay: 250,
     });


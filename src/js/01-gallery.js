import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');
galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return  `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `}).join('');
}

galleryContainerEl.addEventListener('click', handleImageClick);

function handleImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
   
    const instance = basicLightbox.create(`
    <div class="modal">
        <img
        src="${event.target.dataset.source}"
    </div>
    `)
    instance.show()
    // console.log(event.target.dataset.source);
   
    document.addEventListener('keydown', handleImageClose);

    function handleImageClose(event) {
        if (event.key === 'Escape') {
            instance.close();
           document.removeEventListener('keydown', handleImageClose); 
        }
    }
}

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const photoList = document.querySelector('.gallery')

const markupGalery = galleryItems.map(({ preview, original, description }) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
)
    .join("");
  
photoList.insertAdjacentHTML('afterbegin', markupGalery);

let lightbox = new SimpleLightbox('.gallery a', { 
    navText: ['←', '→'],
    captionsData: 'alt',
    captionDelay:	250,
 });

console.log(lightbox);
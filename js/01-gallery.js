import { galleryItems } from './gallery-items.js';
// Change code below this line

const photoList = document.querySelector('.gallery')

const markupGalery = galleryItems.map(({ preview, original, description }) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)
  .join("");

photoList.insertAdjacentHTML('afterbegin', markupGalery);
photoList.addEventListener('click', handlePictureClick);

function handlePictureClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  
  const currentPic = event.target.closest('.gallery__image')
  const sourcePic = currentPic.dataset.source

    const instance = basicLightbox.create(`
    <img src="${sourcePic}"
  />
  `);
  instance.show();
  }
  
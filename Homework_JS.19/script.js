const galleriesList = document.getElementById("gallery-list");
const photosList = document.getElementById("photos-list");

const galleryItemTemplate = document.getElementById("gallery-item-template")
  .innerHTML;

const photoItemTemplate = document.getElementById("photo-item-template")
  .innerHTML;

galleriesList.addEventListener("click", onGalleryClick);

let arrayGalleries = [];
let arrayPhotos = [];
let activeGallery;

init();

function init() {
  getGalleries();
}

function onGalleryClick(e) {
  selectGallery = e.target.dataset.galleryId;

  if (!missClick(selectGallery)) {
    activeGallery = selectGallery;
    clearPhotosList();
    getPhotos(activeGallery);
  }
}

function missClick(id) {
  return id == null || id === activeGallery;
}
function clearPhotosList() {
  photosList.innerHTML = "";
}

function getPhotos(id) {
  let galleryUrl = "https://jsonplaceholder.typicode.com/photos?albumId=" + id;
  fetch(galleryUrl)
    .then((resPhoto) => resPhoto.json())
    .then((photoData) => {
      arrayPhotos = photoData;
      renderPhotoList();
    });
}

function getGalleries() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((resGallery) => resGallery.json())
    .then((dataGallery) => {
      arrayGalleries = dataGallery;

      renderGalleryList();
      setDefaultGallery(arrayGalleries[0].id);
      getPhotos(activeGallery);
    });
}

function setDefaultGallery(id) {
  activeGallery = id;
}

function renderPhotoList() {
  arrayPhotos.forEach((photoItem) => renderPhotoItem(photoItem));
}

function renderGalleryList() {
  arrayGalleries.forEach((gallaryItem) => renderGalleryItem(gallaryItem));
}

function renderGalleryItem(galleryItem) {
  const htmlGallary = galleryItemTemplate
    .replace("{{id}}", galleryItem.id)
    .replace("{{gallery-title}}", galleryItem.title);

  galleriesList.insertAdjacentHTML("beforeend", htmlGallary);
}

function renderPhotoItem(photoItem) {
  const htmlPhoto = photoItemTemplate
    .replace("{{id}}", photoItem.id)
    .replace("{{id}}", photoItem.id)
    .replace("{{photo-url}}", photoItem.url);

  photosList.insertAdjacentHTML("beforeend", htmlPhoto);
}

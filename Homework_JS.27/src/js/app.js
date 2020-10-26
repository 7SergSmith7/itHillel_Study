$(() => {
  const $galleryList = $(".gallery");
  const galleryItemTemplate = $("#gallery-item-template").html();

  let arrayGalleryList = [];

  init();

  function init() {
    getGalleryList();
  }

  function getGalleryList() {
    // $galleryList.html("");
    API.getPhotos()
      .then((data) => (arrayGalleryList = data.slice(0, 30)))
      .then(renderGallery);
  }
  function renderGallery() {
    arrayGalleryList.forEach((galleryItem) => renderGalleryItem(galleryItem));
  }

  function renderGalleryItem(galleryItem) {
    const html = galleryItemTemplate
      .replace("{{id}}", galleryItem.id)
      .replace("{{urlImage}}", galleryItem.url)
      .replace("{{thumbUrlImage}}", galleryItem.thumbnailUrl)
      .replace("{{titleImage}}", galleryItem.title);
    $(html).appendTo($galleryList);
  }
  // ===
});

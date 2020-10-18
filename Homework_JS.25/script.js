$(() => {
  const CONTACTS_URL = "https://jsonplaceholder.typicode.com/photos/";

  const $galleryList = $(".gallery");
  const galleryItemTemplate = $("#gallery-item-template").html();

  arrayGalleryList = getGalleryList();

  init();

  function init() {
    getGalleryList();
  }

  function getGalleryList() {
    // $galleryList.html("");
    return fetch(CONTACTS_URL)
      .then((res) => res.json())
      .then((data) => (arrayGalleryList = data.slice(0, 30)))
      .then(renderGallery);
  }
  function renderGallery() {
    arrayGalleryList.forEach((gallaryItem) => renderContact(gallaryItem));
  }

  function renderContact(gallaryItem) {
    const html = galleryItemTemplate
      .replace("{{id}}", gallaryItem.id)
      .replace("{{urlImage}}", gallaryItem.url)
      .replace("{{thumbUrlImage}}", gallaryItem.thumbnailUrl)
      .replace("{{titleImage}}", gallaryItem.title);
    $(html).appendTo($galleryList);
  }
  // ===
});

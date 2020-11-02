export default class GalleryImagesView {
  constructor(config) {
    this.config = config;
    this.$el = this.initView();
    this.$imageContainer = this.$el.find(".photos-list");
  }

  initView() {
    return $(`<div class="photos eight columns">
    <div class="gallery-item gallery-photos-header">Photos</div>

    <div id="photos-list" class="photos-list"></div>`);
  }
  renderImages(list) {
    this.$imageContainer.html(list.map(this.getImageTemplate).join("\n"));
  }
  getImageTemplate(imageItem) {
    return `<div class="photo-item" data-photo-id="${imageItem.id}"><img src="${imageItem.url}" alt="photo-${imageItem.id}"></div>`;
  }
}

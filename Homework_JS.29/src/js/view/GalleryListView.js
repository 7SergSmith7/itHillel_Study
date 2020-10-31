export default class GalleryImagesView {
  constructor(config) {
    this.config = config;
    this.$el = this.initView();
  }

  initView() {
    return $(`  <div class="gallery four columns">
    <div class="gallery-list-header gallery-item">Gallery</div>

    <div id="gallery-list" class="gallery-list"></div>
  </div>`).on("click", ".gallery-item", (e) => this.onGalleryItemClick(e));
  }

  renderGallery(list) {
    this.$galleryContainer = $(".gallery-list");
    this.$galleryContainer.html(list.map(this.getGalleryTemplate).join("\n"));
  }
  getGalleryTemplate(galleryItem) {
    return `<div class="gallery-item" data-gallery-id="${galleryItem.id}">${galleryItem.title}</div>`;
  }

  onGalleryItemClick(e) {
    const id = $(e.target).data("galleryId");
    if (id != undefined) this.config.setGalleryId(id);
  }
}

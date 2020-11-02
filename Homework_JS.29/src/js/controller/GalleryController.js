import GalleryListView from "../view/GalleryListView";
import GalleryImagesView from "../view/GalleryImagesView";
import GalleryCollection from "../model/GalleryCollection";
import ImageCollection from "../model/ImageCollection";

export default class GalleryController {
  constructor() {
    this.$container = $(".container");
    this.listView = new GalleryListView({
      setGalleryId: (id) => this.setGalleryId(id),
    });
    this.$container.append(this.listView.$el);

    this.imageView = new GalleryImagesView();
    this.$container.append(this.imageView.$el);
    this.imageCollection = new ImageCollection();

    // this.imageCollection.getImageList().then(() => {
    //   this.imageView.renderImages(this.imageCollection.imageList);
    // });
    this.collection = new GalleryCollection();

    this.collection.getGalleryList().then(() => {
      this.listView.renderGallery(this.collection.galleryList);

      this.imageCollection
        .getImageList(this.collection.galleryList[0].id)
        .then(() => {
          this.imageView.renderImages(this.imageCollection.imageList);
        });
    });
  }
  setGalleryId(id) {
    this.imageCollection.getImageList(id).then(() => {
      this.imageView.renderImages(this.imageCollection.imageList);
    });
  }
}

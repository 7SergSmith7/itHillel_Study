import { GALLERY_LIST_URL } from "../config";
export default class GalleryCollection {
  constructor() {
    this.galleryList = [];
  }

  getGalleryList() {
    return fetch(GALLERY_LIST_URL)
      .then((res) => res.json())
      .then((data) => (this.galleryList = data));
  }
}

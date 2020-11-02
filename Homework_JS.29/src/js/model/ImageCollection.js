import { IMAGE_LIST_URL } from "../config";
export default class ImageCollection {
  constructor() {
    this.imageList = [];
  }
  getImageList(id) {
    return fetch(IMAGE_LIST_URL + id)
      .then((res) => res.json())
      .then((data) => (this.imageList = data));
  }
}

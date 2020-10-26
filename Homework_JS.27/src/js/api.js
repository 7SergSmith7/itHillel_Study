const CONTACTS_URL = "https://jsonplaceholder.typicode.com/photos/";

const API = {
  getPhotos: () => {
    return fetch(CONTACTS_URL).then((res) => res.json());
  },
};

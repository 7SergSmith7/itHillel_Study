const CONTACTS_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/";
const CONTACT_ITEM_CLASS = "contact-item";
const DELETE_BTN_CLASS = "delete-btn";
const EDIT_BTN_CLASS = "edit-btn";

const addContactForm = document.getElementById("add-contact-form");
const contactNameInput = document.getElementById("contact-name-input");
const contactPhoneInput = document.getElementById("contact-phone-input");
const contactSurnameInput = document.getElementById("contact-surname-input");
const contactsList = document.getElementById("contacts-list");

const contactItemTemplate = document.getElementById("contact-item-template")
  .innerHTML;

let arrayContactsList = [];
let editContactId = "";

addContactForm.addEventListener("submit", onAddContactFormSubmit);
contactsList.addEventListener("click", onContactListClick);

init();

function onAddContactFormSubmit(event) {
  event.preventDefault();

  submitForm();
}

function onContactListClick(event) {
  let idContact = event.target.parentElement.parentElement.dataset.contactsId;
  switch (true) {
    case event.target.classList.contains(DELETE_BTN_CLASS):
      deleteContact(idContact);

      break;
    case event.target.classList.contains(EDIT_BTN_CLASS):
      editContactId = idContact;
      scrollDown();
      editContact(editContactId);
      break;
  }
}

function init() {
  getContactsList();
}

function scrollDown() {
  addContactForm.scrollIntoView({ behavior: "smooth" });
}
function getContactsList() {
  contactsList.innerHTML = "";
  return fetch(CONTACTS_URL)
    .then((res) => res.json())
    .then((data) => (arrayContactsList = data))
    .then(renderList);
}

function submitForm() {
  const contactItem = {
    name: contactNameInput.value,
    phone: contactPhoneInput.value,
    surname: contactSurnameInput.value,
  };
  if (isContactValid(contactItem)) {
    if (editContactId) {
      editContactOnServer(contactItem);
      editContactId = "";
    } else addContact(contactItem);
    contactNameInput.value = "";
    contactPhoneInput.value = "";
    contactSurnameInput.value = "";
  } else alert("Enter valid data contact.");
}

function isContactValid(contactItem) {
  return contactItem.name && contactItem.phone && contactItem.surname;
}

function addContact(contactItem) {
  fetch(CONTACTS_URL, {
    method: "POST",
    body: JSON.stringify(contactItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getContactsList);
}
function editContactOnServer(contactItem) {
  fetch(CONTACTS_URL + editContactId, {
    method: "PUT",
    body: JSON.stringify(contactItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getContactsList);
}
function renderList() {
  arrayContactsList.forEach((contactItem) => renderContact(contactItem));
}

function renderContact(contactItem) {
  const html = contactItemTemplate
    .replace("{{id}}", contactItem.id)
    .replace("{{name}}", contactItem.name)
    .replace("{{phone}}", contactItem.phone)
    .replace("{{surname}}", contactItem.surname);
  contactsList.insertAdjacentHTML("beforeend", html);
}

/// ===
function deleteContact(id) {
  fetch(CONTACTS_URL + id, {
    method: "DELETE",
  }).then(getContactsList);
}

function editContact(id) {
  let contactItem = findContactItem(id);

  contactNameInput.value = contactItem.name;
  contactSurnameInput.value = contactItem.surname;
  contactPhoneInput.value = contactItem.phone;
}

function findContactItem(id) {
  return arrayContactsList.find((contactItem) => contactItem.id == id);
}
// ===

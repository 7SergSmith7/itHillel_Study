const CONTACT_ITEM_CLASS = "contact-item";
const DELETE_BTN_CLASS = "delete-btn";
const CONTACT_DONE_CLASS = "done";

const addContactForm = document.getElementById("add-contact-form");
const contactNameInput = document.getElementById("contact-name-input");
const contactPhoneInput = document.getElementById("contact-phone-input");
const contactEmailInput = document.getElementById("contact-email-input");
const contactsList = document.getElementById("contacts-list");

const contactItemTemplate = document.getElementById("contact-item-template")
  .innerHTML;

let arrayContactsList = [];

addContactForm.addEventListener("submit", onAddContactFormSubmit);
contactsList.addEventListener("click", onContactListClick);

init();

function onAddContactFormSubmit(event) {
  event.preventDefault();

  submitForm();
}

function onContactListClick(event) {
  switch (true) {
    case event.target.classList.contains(DELETE_BTN_CLASS):
      deleteContact(event.target.parentElement);
      break;
  }
}

function init() {
  restoreData();
  renderList();
}

function submitForm() {
  const contactItem = {
    id: Date.now(),
    name: contactNameInput.value,
    phone: contactPhoneInput.value,
    email: contactEmailInput.value,
  };
  if (contactItem.name && contactItem.phone && contactItem.email) {
    addContact(contactItem);
    contactNameInput.value = "";
    contactPhoneInput.value = "";
    contactEmailInput.value = "";
  } else alert("Enter valid data contact.");
}

function addContact(contactItem) {
  arrayContactsList.push(contactItem);

  saveData();

  renderContact(contactItem);
}

function renderList() {
  arrayContactsList.forEach((contactItem) => renderContact(contactItem));
}

function renderContact(contactItem) {
  const html = contactItemTemplate
    .replace("{{id}}", contactItem.id)
    .replace("{{name}}", contactItem.name)
    .replace("{{phone}}", contactItem.phone)
    .replace("{{email}}", contactItem.email);
  contactsList.insertAdjacentHTML("beforeend", html);
}

/// ===
function deleteContact(el) {
  const contactsId = +el.dataset.contactsId;
  arrayContactsList = arrayContactsList.filter(
    (item) => item.id !== contactsId
  );

  saveData();

  el.remove();
}

// ===
function saveData() {
  localStorage.setItem("contactsList", JSON.stringify(arrayContactsList));
}

function restoreData() {
  const data = localStorage.getItem("contactsList");
  arrayContactsList = data ? JSON.parse(data) : [];
}

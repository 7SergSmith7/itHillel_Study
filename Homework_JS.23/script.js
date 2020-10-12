const CONTACTS_URL = "http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/";
const CONTACT_ITEM_CLASS = "contact-item";
const DELETE_BTN_CLASS = "delete-btn";
const EDIT_BTN_CLASS = "edit-btn";

const $addContactForm = $(".submit-btn");
const $contactNameInput = $("#name");
const $contactPhoneInput = $("#phone");
const $contactSurnameInput = $("#surname");
const $contactsList = $("#contacts-list");
const $dialog = $("#dialog-form");
const сontactItemTemplate = $("#contact-item-template").html();

let arrayContactsList = [];
let editContactId = 0;

$dialog.dialog({
  autoOpen: false,

  modal: true,
  buttons: {
    save: () => {
      submitForm();
    },
    Cancel: () => {
      $dialog.dialog("close");
    },
  },
});

$addContactForm.on("click", onAddContactBtn);

function onAddContactBtn() {
  openModal();
}
function openModal() {
  $dialog.dialog("open");
}
//$addContactForm.on("click", onAddContactFormSubmit);
$contactsList
  .on("click", "." + DELETE_BTN_CLASS, onDeleteBtnClick)
  .on("click", "." + EDIT_BTN_CLASS, onEditBtnClick);

init();

//function onAddContactFormSubmit() {
// console.log("Enter");
// submitForm();
//}

function onDeleteBtnClick() {
  let $contactItem = $(this).parent().parent();
  let $idContact = $contactItem.data("id");
  $contactItem.remove();

  deleteContact($idContact);
}
function onEditBtnClick() {
  let $contactItem = $(this).parent().parent();
  editContactId = $contactItem.data("id");
  editContact(editContactId);
}

function init() {
  getContactsList();
}

function getContactsList() {
  return fetch(CONTACTS_URL)
    .then((res) => res.json())
    .then((data) => (arrayContactsList = data))
    .then(renderList);
}

function submitForm() {
  const contactItem = {
    name: $contactNameInput.val(),
    phone: $contactPhoneInput.val(),
    surname: $contactSurnameInput.val(),
  };
  console.log(contactItem);
  if (isContactValid(contactItem)) {
    if (editContactId) {
      editContactOnServer(contactItem);
      editContactId = 0;
    } else {
      addContact(contactItem);
    }
    $contactNameInput.val("");
    $contactPhoneInput.val("");
    $contactSurnameInput.val("");
    $dialog.dialog("close");
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
  $contactsList.empty();
  arrayContactsList.forEach((contactItem) => renderContact(contactItem));
}

function renderContact(contactItem) {
  const html = сontactItemTemplate
    .replace("{{id}}", contactItem.id)
    .replace("{{name}}", contactItem.name)
    .replace("{{phone}}", contactItem.phone)
    .replace("{{surname}}", contactItem.surname);
  $(html).appendTo($contactsList);
}

/// ===
function deleteContact(id) {
  fetch(CONTACTS_URL + id, {
    method: "DELETE",
  });
}

function editContact(id) {
  let contactItem = findContactItem(id);
  openModal();
  $contactNameInput.val(contactItem.name);
  $contactSurnameInput.val(contactItem.surname);
  $contactPhoneInput.val(contactItem.phone);
}

function findContactItem(id) {
  return arrayContactsList.find((contactItem) => contactItem.id == id);
}
// ===

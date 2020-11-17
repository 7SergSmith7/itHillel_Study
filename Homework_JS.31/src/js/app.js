import "../css/vendor/normalize.css";
import "../css/vendor/skeleton.css";
import "../css/vendor/dark-theme.css";
import "../css/styles.css";
$(() => {
  const DELETE_BTN_CLASS = "delete-btn";
  const EDIT_BTN_CLASS = "edit-btn";

  const $addContactBtn = $(".submit-btn");
  const $contactNameInput = $("#name");
  const $contactPhoneInput = $("#phone");

  const $contactSurnameInput = $("#surname");
  const $contactsList = $("#contacts-list");
  const $dialog = $("#dialog-form");
  const сontactItemTemplate = $("#contact-item-template").html();
  const additionalPhoneTemplate = $("#aditional-phone-template").html();
  const $phonesArea = $(".phones");
  const $addPhoneBtn = $(".add-phone-btn");

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
  $addPhoneBtn.on("click", onAddPhoneBtn);
  $addContactBtn.on("click", onAddContactBtn);

  function onAddContactBtn() {
    openModal();
  }
  function openModal() {
    $dialog.dialog("open");
  }

  $contactsList
    .on("click", "." + DELETE_BTN_CLASS, onDeleteBtnClick)
    .on("click", "." + EDIT_BTN_CLASS, onEditBtnClick);

  init();

  function onAddPhoneBtn() {
    const html = additionalPhoneTemplate;
    $(html).appendTo($phonesArea);
  }

  function onDeleteBtnClick() {
    let $contactItem = $(this).parent().parent();
    let idContact = $contactItem.data("id");
    $contactItem.remove();

    deleteContact(idContact);
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
    restoreData();
    renderList();
  }

  function submitForm() {
    const phonesInput = $(".phone")
      .get()
      .map((n) => n.value);
    let contactItem = {
      name: $contactNameInput.val(),
      phone: phonesInput,
      surname: $contactSurnameInput.val(),
    };
    if (isContactValid(contactItem)) {
      if (editContactId) {
        contactItem.id = editContactId;
        editContactOnLocal(contactItem);
        editContactId = 0;
      } else {
        contactItem.id = Date.now();
        addContact(contactItem);
      }
      clearInput();
      $dialog.dialog("close");
    } else alert("Enter valid data contact.");
  }

  function clearInput() {
    $contactNameInput.val("");
    $contactPhoneInput.val("");
    $contactSurnameInput.val("");
    $phonesArea.html("");
  }

  function isContactValid(contactItem) {
    return contactItem.name && contactItem.phone && contactItem.surname;
  }

  function addContact(contactItem) {
    arrayContactsList.push(contactItem);
    renderContact(contactItem);
    saveData();
  }

  function editContactOnLocal(contactItem) {
    arrayContactsList = arrayContactsList.map((contact) => {
      if (contact.id === contactItem.id) {
        return contactItem;
      }
      return contact;
    });
    saveData();
    getContactsList();
  }

  function renderList() {
    $contactsList.empty();
    arrayContactsList.forEach((contactItem) => renderContact(contactItem));
  }

  function renderContact(contactItem) {
    const html = сontactItemTemplate
      .replace("{{id}}", contactItem.id)
      .replace("{{name}}", contactItem.name)
      .replace("{{phone}}", contactItem.phone[0])
      .replace("{{surname}}", contactItem.surname);
    $(html).appendTo($contactsList);
  }

  function deleteContact(id) {
    console.log(id);
    arrayContactsList = arrayContactsList.filter((item) => item.id != id);
    saveData();
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

  function saveData() {
    localStorage.setItem("contactsList", JSON.stringify(arrayContactsList));
  }

  function restoreData() {
    const data = localStorage.getItem("contactsList");
    arrayContactsList = data ? JSON.parse(data) : [];
  }
});

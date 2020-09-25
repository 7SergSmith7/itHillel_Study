const STUDENT_ITEM_CLASS = "student-item";
const DELETE_BTN_CLASS = "delete-btn";
const STUDENT_DONE_CLASS = "done";

const addStudentForm = document.getElementById("add-student-form");
const studentNameInput = document.getElementById("student-name-input");
const studentMarksInput = document.getElementById("student-marks-input");
const avrgGroupMark = document.getElementById("avrgGroupMark");
const studentsList = document.getElementById("students-list");

const studentItemTemplate = document.getElementById("student-item-template")
  .innerHTML;

let arrayStudentsList = [];

addStudentForm.addEventListener("submit", onAddStudentFormSubmit);
studentsList.addEventListener("click", onStudentListClick);

init();

function onAddStudentFormSubmit(event) {
  event.preventDefault();

  submitForm();
}

function onStudentListClick(event) {
  switch (true) {
    case event.target.classList.contains(DELETE_BTN_CLASS):
      deleteStudent(event.target.parentElement);

      break;
  }
}

function init() {
  restoreData();
  renderList();
}

function submitForm() {
  const studentItem = {
    id: Date.now(),
    name: studentNameInput.value,
    marks: studentMarksInput.value,
    arrayMarks: splitMarksInput(studentMarksInput.value),
    avrgMark: calculateAvrgMark(splitMarksInput(studentMarksInput.value)),
  };

  if (isValid(studentItem)) {
    addStudent(studentItem);
    studentNameInput.value = "";
    studentMarksInput.value = "";
  } else alert("Enter valid data student.");
}

function splitMarksInput(marksInput) {
  return marksInput.split(",");
}

function calculateAvrgMark(arrayMarks) {
  return (arrayMarks.reduce((a, b) => +a + +b) / arrayMarks.length).toFixed(2);
}

function calculateAvrGroupegMark() {
  let arrayGroupMarks = [];
  if (arrayStudentsList.length == 0) avrgGroupMark.textContent = 0;
  else {
    for (let i = 0; i < arrayStudentsList.length; i++) {
      arrayGroupMarks = arrayGroupMarks.concat(arrayStudentsList[i].arrayMarks);
    }

    avrgGroupMark.textContent = calculateAvrgMark(arrayGroupMarks);
  }
}

function isValid(studentItem) {
  if (studentItem.name) {
    for (let i = 0; i < studentItem.arrayMarks.length; i++) {
      console.log(studentItem.arrayMarks[i]);
      if (isNaN(studentItem.arrayMarks[i])) return false;
    }
    return true;
  } else return false;
}

function addStudent(studentItem) {
  arrayStudentsList.push(studentItem);

  saveData();

  renderStudent(studentItem);
  calculateAvrGroupegMark();
}

function renderList() {
  arrayStudentsList.forEach((studentItem) => renderStudent(studentItem));
  calculateAvrGroupegMark();
}

function renderStudent(studentItem) {
  const html = studentItemTemplate
    .replace("{{id}}", studentItem.id)
    .replace("{{name}}", studentItem.name)
    .replace("{{marks}}", studentItem.marks)
    .replace("{{avrg}}", studentItem.avrgMark);
  studentsList.insertAdjacentHTML("beforeend", html);
}

/// ===
function deleteStudent(el) {
  const studentsId = +el.dataset.studentsId;

  arrayStudentsList = arrayStudentsList.filter(
    (item) => item.id !== studentsId
  );

  saveData();

  el.remove();
  calculateAvrGroupegMark();
}

// ===
function saveData() {
  localStorage.setItem("studentsList", JSON.stringify(arrayStudentsList));
}

function restoreData() {
  const data = localStorage.getItem("studentsList");
  arrayStudentsList = data ? JSON.parse(data) : [];
}

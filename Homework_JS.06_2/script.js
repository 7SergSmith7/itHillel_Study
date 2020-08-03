const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];
const reducer = (a, b) => a + b;
function averageGroupMark(arrayStudents) {
  let outputAverageReport = "Средние оценки студентов: \n";
  let arrayAverageList = [];
  for (let i = 0; i < arrayStudents.length; i++) {
    arrayAverageList[i] = averageInArray(arrayStudents[i].marks);
    outputAverageReport += averageStudentMark(arrayStudents[i]);
  }
  outputAverageReport +=
    "Общая успеваемость группы: " + averageInArray(arrayAverageList);
  return outputAverageReport;
}

function averageInArray(arrayNumber) {
  return +(arrayNumber.reduce(reducer) / arrayNumber.length).toFixed(2);
}

function averageStudentMark(student) {
  return student.name + ": " + averageInArray(student.marks) + "\n";
}

alert(averageGroupMark(students));
alert(averageStudentMark(students[2]));

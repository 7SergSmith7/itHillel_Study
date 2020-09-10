function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype = {
  averageMark: function () {
    return (
      this.name + " - " + this.marks.reduce((a, b) => a + b) / this.marks.length
    );
  },
};

const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]), // имя, оценки
  new Student("Student 12", [10, 0, 8, 0, 3, 4]),
];
console.log(students[0].averageMark());

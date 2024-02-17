const tableContainer = document.getElementById("studentsContainer");
const submitButton = document.getElementById("submitButton");

const studentsForm = document.forms["marks"];

let students = localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students"))
  : [];

studentsForm.addEventListener("submit", (event) => {
  saveMarks(event);
});

function saveMarks(event) {
  event.preventDefault();

  let name = studentsForm.name.value;
  let marks = {
    Java: parseFloat(studentsForm.m1.value),
    PHP: parseFloat(studentsForm.m2.value),
    JavaScript: parseFloat(studentsForm.m3.value),
  };

  let student = {
    name: name,
    marks: marks,
  };

  students = localStorage.getItem("students")
    ? JSON.parse(localStorage.getItem("students"))
    : [];
  students.push(student);
  console.log(students);
  localStorage.setItem("students", JSON.stringify(students));
  console.log(JSON.parse(localStorage.getItem("students")));
  displayStudents();
  studentsForm.reset();
}

function displayStudents() {
  tableContainer.innerHTML = "";

  if (students.length) {
    students.forEach(function (student) {
      let row = "<tr>";
      row += "<td>" + student.name + "</td>";
      row += "<td>" + student.marks.Java + "</td>";
      row += "<td>" + student.marks.PHP + "</td>";
      row += "<td>" + student.marks.JavaScript + "</td>";
      row += "<td>" + calculateAverage(student.marks) + "</td>";
      row += "</tr>";
      tableContainer.innerHTML += row;
    });
  }
}

function calculateAverage(marks) {
  let sum = Object.values(marks).reduce((acc, val) => acc + val, 0);
  return (sum / Object.keys(marks).length).toFixed(2);
}

displayStudents();

let marks = "[4, 5, 2, 3]";
marks = JSON.parse(marks);
console.log(marks); // 5

let student =
  '{"name": "John", "age": 25, "isStudent": false, "marks": [4, 5, 2, 3]}';
student = JSON.parse(student);
console.log(
  student.marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
); // 14

let str = '{"title":"Экзамен","date":"2024-02-03T12:00:00.000Z"}';

let test = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(test.date.getTime());

let tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
document.cookie = "user=Joan; path=/; expires=" + tomorrow.toUTCString();

let objStud = { "name": "John", "marks": [3, 4, 5] };
let serStud = JSON.stringify(objStud);
localStorage.setItem("stud", serStud);
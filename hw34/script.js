class Student {
  constructor(name, lastName, ageBirthday, marks) {
    this.name = name;
    this.lastName = lastName;
    this.ageBirthday = ageBirthday;
    this.marks = marks;
    this.attends = new Array(25).fill(null);
  }
  getAge() {
    const year = new Date().getFullYear() - this.ageBirthday;
    console.log(year);
  }
  getAverageMark() {
    const averageMark = this.marks.reduce((a, b) => a + b) / this.marks.length;
    console.log(averageMark);
  }
  present() {
    const arr = this.attends;
    const index = arr.indexOf(null);
    this.attends[index] = true;
  }
  absent() {
    const arr = this.attends;
    const index = arr.indexOf(null);
    this.attends[index] = false;
  }
  summary() {
    const averageMark = this.marks.reduce((a, b) => a + b) / this.marks.length;
    const amountOfAttend = this.attends.filter((a) => a == true).length;
    const amountOfLessons = this.attends.length;
    const averageAttend = amountOfAttend / amountOfLessons;
    if (averageMark > 90 && averageAttend > 0.9) {
      console.log("Молодець!");
    } else if (averageMark > 90 || averageAttend > 0.9) {
      console.log("Добре, але можна краще");
    } else if (averageMark < 90 && averageAttend < 0.9) {
      console.log("Редиска!");
    }
    console.log(averageMark, averageAttend);
  }
}
const student1 = new Student(
  "Vadym",
  "Morvaniuk",
  2001,
  [100, 81, 65, 99, 90, 100, 100]
);
const student2 = new Student(
  "Mark",
  "Zuckerberg",
  1984,
  [100, 99, 99, 95, 95, 92, 67]
);
const student3 = new Student(
  "Elon",
  "Musk",
  1971,
  [80, 81, 65, 90, 62, 82, 35, 84]
);

const present = (student, amount) => {
  for (let i = 0; i < amount; i++) {
    student.present();
  }
};
const absent = (student, amount) => {
  for (let i = 0; i < amount; i++) {
    student.absent();
  }
};
present(student1, 23);
absent(student1,2)
student1.summary();

present(student2, 17);
absent(student2,8)
student2.summary();

present(student3, 11);
absent(student3,14)
student3.summary();



function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Василиса', 'женский', 19);
let student2 = new Student('Петр', 'мужской', 20);
let student3 = new Student('Артем', 'мужской', 21);
let student4 = new Student('Светлана', 'женский', 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || this.marks.length == 0) {
        return 0;
    } else {
        const sumMarks = this.marks.reduce((sum, item) => sum + item, 0);
        return sumMarks / this.marks.length;
    }

}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

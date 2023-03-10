class SchoolMember {
    constructor(name, age, startDate) {
        this.name = name;
        this.age = age;
        this.startDate = startDate;
    }
}

class Student extends SchoolMember {
    constructor(name, age, startDate) {
        super(name, age, startDate);

        this.grades = [];
        this.classes = [];
    }

    get studentGrades() {
        return this.grades;
    }

    set studentGrades(grades) {
        this.grades = grades;
    }

    get studentClasses() {
        return this.grades;
    }

    set studentClasses(classes) {
        this.classes = classes;
    }

    classesAndGrades() {
        for (let i = 0; i < this.classes.length; i++) {
            console.log(`${this.name} attends ${this.classes[i]} and ${this.grades[i]} is their grade in the class`)
        }
    }
}

class Teacher extends SchoolMember {
    constructor(name, age, startDate) {
        super(name, age, startDate);

        this.classes = [];
        this.students = [];
    }

    get studentsInClass() {
        return this.students;
    }

    set studentsInClass(students) {
        this.students = students;
    }

    get teachesClasses() {
        return this.classes;
    }

    set teachesClasses(classes) {
        this.classes = classes;
    }

    classesAndStudents() {
        for (let i = 0; i < this.classes.length; i++) {
            console.log(`${this.name} teaches ${this.classes[i]} and ${this.students[i]} are in the class.`)
        }
    }
}

const student = new Student("Tyler", 25, "1-31-2023");
const studentOne = new Student("Jack", 27, "1-31-2023");
const studentTwo = new Student("John", 24, "1-31-2023");
const studentThree = new Student("Sarah", 28, "1-31-2023");
const studentFour = new Student("Michael", 23, "1-31-2023");
const studentFive = new Student("Brittney", 29, "1-31-2023");
const studentSix = new Student("Victoria", 22, "1-31-2023");
const studentSeven = new Student("Andrew", 21, "1-31-2023");

const teacherOne = new Teacher("Jeff", 42, "8-28-2004");
const teacherTwo = new Teacher("James", 37, "2-11-2011");

teacherOne.studentsInClass = [["Tyler", " Jack", " Sarah", " Andrew"], ["John", " Michael", " Brittney", " Victoria"]];
teacherTwo.studentsInClass = [["Jack", " John", " Victoria"], ["Sarah", " Michael", " Brittney"]];

teacherOne.teachesClasses = ["Math", "Science"];
teacherTwo.teachesClasses = ["Art", "History"];

student.studentClasses = ["Math"];
studentOne.studentClasses = ["Math", "Art"];
studentTwo.studentClasses = ["Science", "Art"];
studentThree.studentClasses = ["Math", "History"];
studentFour.studentClasses = ["Science", "History"];
studentFive.studentClasses = ["Science", "History"];
studentSix.studentClasses = ["Science", "Art"];
studentSeven.studentClasses = ["Math"];

student.studentGrades = ["A"];
studentOne.studentGrades = ["A", "B"];
studentTwo.studentGrades = ["B", "B"];
studentThree.studentGrades = ["C", "A"];
studentFour.studentGrades = ["F", "B"];
studentFive.studentGrades = ["A", "B"];
studentSix.studentGrades = ["A", "C"];
studentSeven.studentGrades = ["C"];

teacherOne.classesAndStudents();
teacherTwo.classesAndStudents();

student.classesAndGrades();
studentTwo.classesAndGrades();
studentThree.classesAndGrades();
studentFour.classesAndGrades();
studentFive.classesAndGrades();
studentSix.classesAndGrades();
studentSeven.classesAndGrades();
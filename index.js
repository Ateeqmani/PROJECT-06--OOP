#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
;
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcom Guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Whom do you want to talk?",
            name: "select",
            choices: ["self", "sudents"]
        });
        if (ans.select == "self") {
            console.log("Hellow I am talking to myself");
            console.log("I am very Handsome boy");
        }
        if (ans.select == "sudents") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "with whom student do you want to talk?",
                name: "student"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hellow i am ${name.name}, and i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hellow i am ${student.name}, and i am fine.....Student is here`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);

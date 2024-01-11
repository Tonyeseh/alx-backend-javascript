interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director {
    workFromHome () {
        return "Working from home";
    }
    getCoffeeBreak () {
        return "Getting a coffee break"
    }
    workDirectorTasks () {
        return "Getting to director tasks"
    }
}

class Teacher {
    workFromHome () {
        return "Cannot work from home"
    }
    getCoffeeBreak () {
        return "Cannot have a break"
    }
    workTeacherTasks() {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    let worker: DirectorInterface | TeacherInterface;

    if (typeof salary === 'string') {
        if (isNaN(parseInt(salary.charAt(0)))) {
            salary = salary.slice(1, salary.length)
        }
        salary = parseInt(salary)
    }

    if (salary < 500) {
        worker = new Teacher()
    }
    else{
        worker = new Director()
    }
    return worker
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}

function executeWork(employee:Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks()
    }
    else {
        return employee.workTeacherTasks()
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee('$600')));
console.log(executeWork(createEmployee('$300')));

type Subjects = "Math" | "History"

function teachClass(todayClass:Subjects) {
    if (todayClass === "History") {
        return "Teaching History"
    }
    return "Teaching Math"
}

console.log(teachClass('Math'))
console.log(teachClass('History'))

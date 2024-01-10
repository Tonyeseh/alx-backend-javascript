interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let studentList: Array<Student>

studentList = [
    {
        firstName: "Student",
        lastName: "One",
        age: 23,
        location: "California",
    },
    {
        firstName: "Student",
        lastName: "Two",
        age: 21,
        location: "Los Angeles"
    }
]

const table = document.createElement('table', )
const tHead = table.createTHead();
const headerRow = tHead.insertRow();
headerRow.insertCell().innerText = "First Name";
headerRow.insertCell().innerText = "Location";
const tBody = table.createTBody();


for (const student of studentList) {
    const bodyRow = tBody.insertRow();
    bodyRow.insertCell().innerText = student.firstName
    bodyRow.insertCell().innerText = student.location
}
document.body.appendChild(table)

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Daniel",
  lastName: "Yawson",
  age: 24,
  location: "Accra",
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Boateng",
  age: 22,
  location: "Kumasi",
};

// Add them to an array
const studentsList: Student[] = [student1, student2];

// Render a table showing firstName and location
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

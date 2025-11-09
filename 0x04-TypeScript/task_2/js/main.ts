// ===============================
// Interfaces for Employees
// ===============================
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ===============================
// Classes implementing interfaces
// ===============================
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// ===============================
// Function: createEmployee
// Returns a Director or Teacher
// ===============================
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// ===============================
// Function: isDirector
// Type predicate to check if employee is a Director
// ===============================
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ===============================
// Function: executeWork
// Calls the appropriate method based on employee type
// ===============================
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// ===============================
// Example usage (for testing)
// ===============================
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks

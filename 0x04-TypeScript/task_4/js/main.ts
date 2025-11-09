/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};
["cTeacher: Teacher"];
// C++
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
["const java = new Java()"];
// Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
["const cpp = new Cpp()"];
// React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//

["const react = new React()"];

// ## Expected Output

// When you compile and run this, you should see:

// C++
// Here is the list of requirements for Cpp
// Available Teacher: John
// Java
// Here is the list of requirements for Java
// No available teacher
// React
// Here is the list of requirements for React
// No available teacher

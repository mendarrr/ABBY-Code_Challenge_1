// Prompt the user for the student's name
function getStudentName() {
 
  const name = prompt("Enter the student's name:");
  return name;
}
// Prompt the user for the student's mark
function getStudentMark() {
 
  let mark;
  // Ensure the input is a number and is within the range 0-100
  do {
    // variable declared automatically
    mark = prompt("Enter the student's mark (0-100):");
    mark = parseInt(mark);
  } while (isNaN(mark) || mark < 0 || mark > 100);
  return mark;
}

// Display the name and mark for the student
function displayResults(name, mark) {
  alert(`Name: ${name}\nMark: ${mark}`);
}

// The Main function
function getStudentGrade() { 
  // Call the functions above
  let studentName = getStudentName(); 
  let studentMark = getStudentMark();

  let grade;
  if (studentMark >= 79) {
    grade = "A";
  } else if (studentMark >= 60) {
    grade = "B";
  } else if (studentMark >= 49) {
    grade = "C";
  } else if (studentMark >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  //Results to be displayed after the program runs
  console.log(`Student Name: ${studentName}`);
  console.log(`Student Mark: ${studentMark}`);
  console.log(`Grade: ${grade}`);
  // Output displayed to the user 
  window.alert(`The student ${studentName} scored ${studentMark} marks which is a grade of ${grade}`);
}

// To use the program, call the function:
getStudentGrade();


function calculateDemeritPoints() {
// Prompt the user for the car's speed
  const speed = prompt("Enter the car's speed (km/h):");
  
// 70 is the speed limit so beyond this a consequence is determined
  if (speed <= 70) { 
    console.log("Ok");
    window.alert("Ok")
  } else { 

// Calculates the number of demerit points and returns a whole number
    const numberOfDemeritPoints = Math.floor((speed - 70) / 5);
   
// Consequences from the number of demerit points calculated
    if (numberOfDemeritPoints < 12 ) {
      console.log(`Speeding by ${speed - 70} km/h, resulting in ${numberOfDemeritPoints} demerit points.`);
      window.alert(`Speeding by ${speed - 70} km/h, resulting in ${numberOfDemeritPoints} demerit points.`);

    } else {
      console.log("License Suspended")
      window.alert("License Suspended")
    }
 }
}
// To use the program, call the function => calculateDemeritPoints()
  calculateDemeritPoints()

 
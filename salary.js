// Constants:
// This is an array which contains objects 
const KRA_TAX_RATES = [ 
    { amount: 0, rate: 0 },               // I used an object variable to represent the values on the table 
    { amount: 24000, rate: 0.1 },         // for the tax rate, NHIF and NSSF
    { amount: 32333, rate: 0.25 },
    { amount: 500000, rate: 0.3 },
    { amount: 800000, rate: 0.325 },
    { amount: Infinity, rate: 0.35 }
  ];
  
  //This is an array which contains objects
  const NHIF_RATES = [
    { amount: 0, rate: 0 },
    { amount: 5999, rate: 150 },      // Follow the simple syntax which is: 
    { amount: 7999, rate: 300 },         // Key : value, if there's another attribute
    { amount: 11999, rate: 400 },
    { amount: 14999, rate: 500 },
    { amount: 19999, rate: 600 },
    { amount: 24999, rate: 750 },
    { amount: 29999, rate: 850 },
    { amount: 34999, rate: 900 },
    { amount: 39999, rate: 950 },
    { amount: 44999, rate: 1000 },
    { amount: 49999, rate: 1100 },
    { amount: 59999, rate: 1200 },
    { amount: 69999, rate: 1300 },
    { amount: 79999, rate: 1400 },
    { amount: 89999, rate: 1500 },
    { amount: 99999, rate: 1600 },
    { amount: Infinity, rate: 1700 }
  ];
  
   // A deduction during calculation bur depends on one's salary
  const NSSF_RATE = 0.06 
  

  // calculate Gross Tax depending on the individual's salary
  function calculateTax(basicSalary, benefits) {
    let taxableSalary = basicSalary + benefits;
    let tax = 0; //The tax is a placeholder for the KRA_TAX_RATE object
    
    // This is used to iterate between the key values of the object in question which are *amount* and *rate*
    for (let i = 0; i < KRA_TAX_RATES.length; i++) { // Looping through the key values of the object
      const rate = KRA_TAX_RATES[i];                       
  
      if (taxableSalary <= rate.amount) {
        break;
      }
  
      tax += (rate.amount - (i > 0 ? KRA_TAX_RATES[i - 1].amount : 0)) * rate.rate;
    }
  
    tax += (taxableSalary - tax) * KRA_TAX_RATES[KRA_TAX_RATES.length - 1].rate;
  
    return tax;
  }
  
  // calculate NHIF deductions using the object 
  function calculateNHIFDeductions(basicSalary) {
    let rate = 0; //The rate is a placeholder for the NHIF object
  
    for (let i = 0; i < NHIF_RATES.length; i++) {    // Looping through the key values of the object
      const nhifRate = NHIF_RATES[i];
  
      if (basicSalary <= nhifRate.amount) {
        rate = nhifRate.rate;
        break;
      }
    }
  
    return rate;
  }
  
  // calculate NSSF deductions
  function calculateNSSFDeductions(basicSalary) { 
     if (basicSalary > 36000) {
     return 36000 * NSSF_RATE             //The calculation is determined by the basic salary hence the need for a loop
     } else {
       return basicSalary * NSSF_RATE
     }
  }
  
  // calculate Gross Salary => GS = BS + All Allowances(Benefits)
  function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
  }
  
  // THIS IS THE MAIN FUNCTION OF THE PROGRAM btw
  // calculate Net Salary => NS = GS - (Rate + Tax + NSSF)
  function calculateNetSalary() {
   // Prompt the user for their basic salary and allowances
    const basicSalaryString = prompt("Enter your basic salary:"); 
    const basicSalary = parseFloat(basicSalaryString);
    const benefitsString = prompt("Enter your total Allowances:"); 
    const benefits = parseFloat(benefitsString);
// Number required for the program to run
    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter a number.");
      return;
    }
  
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const tax = calculateTax(grossSalary, 0);
    const nhifDeductions = calculateNHIFDeductions(basicSalary);
    const nssfDeductions = calculateNSSFDeductions(basicSalary);
  
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
     console.log('Gross Salary:', grossSalary);
     console.log('Net Salary:', netSalary);
    window.alert(`Your Gross Salary of Ksh${grossSalary} gives a net salary of Ksh${netSalary}`)
  }
  
  // To use the program, call the function:
  calculateNetSalary();
  

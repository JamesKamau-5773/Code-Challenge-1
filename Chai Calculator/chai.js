// Define a function to calculate ingridients(currently just logs a message)
function calaculateChaiIngridients(){
  console.log("Karibu! Let's make some chai!")
}
// Get user input for transaction amount and convert it to a number
const numberofCups = Number(prompt("How many cups of chai do you want to make?"));

// Define ingredient measurements per cup (in ml or teaspoons)
const milkperCup = 50 ;// 50ml milk per cup
const TeaLeavesperCup = 1 ; // 1 teaspoon per cup
const sugarpercup = 2 ; // 2 teaspoons of sugar per cup
const waterpercup = 200;

// Calculate total required ingredients
const totalWater = numberofCups * waterpercup; 
const totalMilk = numberofCups * milkperCup;
const totalteaLeaves = numberofCups * TeaLeavesperCup;
const totalsugar = numberofCups * sugarpercup;

// Display the results using  (backticks ` `)
  console.log(`for ${numberofCups} cup(s) of chai  you need:`);
  console.log(`- water: ${totalWater} ml`);
  console.log(`- milk: ${totalMilk} ml`);
  console.log(`- Tea Leaves (Majani): ${totalteaLeaves} teaspoon`);
  console.log(`- Sugar (Sukari): ${totalsugar} teaspoon`);

function calaculateChaiIngridients(){
  console.log("Karibu! Let's make some chai!")
}

const numberofCups = Number(prompt("How many cups of chai do you want to make?"));

const waterperCup = 200 ;
const milkperCup = 50 ;
const TeaLeavesperCup = 1 ;
const sugarperCup = 2 ;
let userInput = numberofCups;

const totalWater = numberofCups * waterperCup;
const totalMilk = numberofCups * milkperCup;
const totalteaLeaves = numberofCups * TeaLeavesperCup;
const totalsugar = numberofCups * sugarperCup;


  console.log('for ${numberofCups} cup(s) of chai  you need:');
  console.log('- water: ${totalWater} ml');
  console.log('- milk: ${totalMilk} ml');
  console.log('- Tea Leaves (Majani): ${totalteaLeaves} teaspoon');
  console.log('- Sugar (Sukari): ${totalSugar} teaspoon');

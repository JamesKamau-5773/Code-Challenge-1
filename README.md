# Chai Ingredient Calculator ☕

A simple JavaScript program that calculates the ingredients needed to make multiple cups of Kenyan chai (tea).

## Features

- Calculates exact quantities of water, milk, tea leaves, and sugar needed
- Interactive prompt for user input
- Clear output showing all required ingredients
- Authentic Kenyan chai recipe measurements

## How It Works

1. The program asks how many cups of chai you want to make
2. It calculates the total amounts needed for each ingredient based on:
   - 200ml water per cup
   - 50ml milk per cup
   - 1 teaspoon tea leaves per cup
   - 2 teaspoons sugar per cup
3. Displays a formatted list of required ingredients

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/JamesKamau-5773/Code-Challenge-1.git

2.Open index.html in your browser

3.Enter the number of cups when prompted

4.View the results in the browser console

Code Structure

// Main calculation logic
const numberofCups = Number(prompt("How many cups of chai do you want to make?"));

// Ingredient measurements per cup
const waterperCup = 200;
const milkperCup = 50;
const TeaLeavesperCup = 1;
const sugarperCup = 2;

// Calculate totals
const totalWater = numberofCups * waterperCup;
const totalMilk = numberofCups * milkperCup;
const totalteaLeaves = numberofCups * TeaLeavesperCup;
const totalsugar = numberofCups * sugarperCup;

// Display results
console.log(`For ${numberofCups} cup(s) of chai you need:`);
// ... more output

Author
James Kamau

License
This project is open source and available under the MIT License.

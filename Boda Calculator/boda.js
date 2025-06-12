// Define a function to calculate boda fare (welcomes the passenger)
function calaculateBodafare(){
  console.log("Unafika wapi kiongozi? KM ngapi?")
}

// Get user input for trip distance and convert it to a number
const tripDistance = Number(prompt("Unafika wapi kiongozi? KM ngapi?"));

// Define fare structure
const baseFare = 50; // Base fare in KES
const perKilometerCharge = 15;  // Charge per kilometer in KES

// Calculate total charges
const totalperKilometerCharge = tripDistance * perKilometerCharge;
const totalFare = baseFare + totalperKilometerCharge;

// Display fare breakdown using  (backticks ` `)
console.log(`for ${tripDistance} KM ya safari`);
console.log(`- Kukalia Bike ${baseFare} KES (Base fare)`);
console.log(`- kufika base ${totalperKilometerCharge} KES`);
console.log(`- Total fare ${totalFare} KES`);
console.log("Enjoy Ride Yako!!")



function calaculateBodafare(){
  console.log("Unafika wapi kiongozi? KM ngapi?")
}

const tripDistance = Number(prompt("Unafika wapi kiongozi? KM ngapi?"));

const baseFare = 50;
const perKilometerCharge = 15;
let userInput = tripDistance;

const totalperKilometerCharge = userInput * perKilometerCharge;
const totalFare = baseFare + totalperKilometerCharge;

console.log('for ${tripDistance} KM ya safari');
console.log('- Kukalia Bike ${baseFare} KES (Base fare)');
console.log('- kufika base ${totalperKilometerCharge} KES');
console.log('- Total fare ${totalFare} KES');
console.log("Enjoy Ride Yako!!")


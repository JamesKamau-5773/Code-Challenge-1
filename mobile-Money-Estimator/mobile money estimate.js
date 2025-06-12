// Define a function to estimate transaction fees (currently just logs a message)
function estimateTransactionFee(){
  console.log("How much would you like to send?")
}
// Get user input for transaction amount and convert it to a number
const transactionAmount = Number(prompt("how much would you like to send?"))

// Define fee structure constants
const minimumFee = 10;// Minimum fee charged (floor)
const maximumFee = 70;  // Maximum fee charged (cap) 
const feePercantage = 0.015;// 1.5% fee rate

// Calculate initial fee based on percentage of transaction amount
let transactionFee = feePercantage * transactionAmount;

// If calculated fee is below minimum, use minimum fee
if (feePercantage * transactionAmount < minimumFee){
  transactionFee = minimumFee;
}
// If calculated fee exceeds maximum, use maximum fee
else if (feePercantage * transactionAmount > maximumFee){
  transactionFee = maximumFee;
}

// Calculate total amount (original amount + fee)
const totalAmount = transactionAmount + transactionFee;

// Display transaction details to user
console.log(`- Sending ${transactionAmount} KES`);  // Original amount
console.log(`- Transfer Fee ${transactionFee} KES`);// Calculated fee
console.log(`- Total Amount Debited ${totalAmount} KES`); // Total to be charged
console.log("Send Money Safeley!!") // Closing message
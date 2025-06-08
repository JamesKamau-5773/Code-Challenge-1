function estimateTransactionFee(){
  console.log("How much would you like to send?")
}

const transactionAmount = Number(prompt("how much would you like to send?"))

const minimumFee = 10;
const maximumFee = 70; 
const feePercantage = 0.015;


let basictransactionFee = feePercantage * transactionAmount;

if (feePercantage * transactionAmount < minimumFee){
  transactionFee = minimumFee;
}
else if (feePercantage * transactionAmount > maximumFee){
  transactionFee = maximumFee;
}

const totalAmount = transactionAmount + transactionFee;

console.log('- Sending ${transactionAmount} KES');
console.log('- Transfer Fee ${transactionFee} KES');
console.log('- Total Amount Debited ${totalAmount} KES');
console.log("Send Money Safley!!")
function paymentStatus(amount) {
    if (amount > 0) {
        return "Payment Successful";
    } else {
        return "Payment Failed";
    }
}
module.exports= paymentStatus;
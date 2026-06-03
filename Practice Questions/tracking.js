function orderStatus(status) {
    if (status === "pending") {
        return "Your order is pending.";
    } else if (status === "shipped") {
        return "Your order has been shipped.";
    } else if (status === "delivered") {
        return "Your order has been delivered.";
    } else {
        return "Invalid status.";
    }
}
module.exports= orderStatus;
const getTotal = cart => cart.reduce((total, item) => total + item.price * item.quantity, 0);

module.exports = getTotal;
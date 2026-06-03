function checkStock(stock) {
    if (stock >0) {
        return "In Stock";
    } else {
        return "Out of Stock";
    }

}
module.exports= checkStock;
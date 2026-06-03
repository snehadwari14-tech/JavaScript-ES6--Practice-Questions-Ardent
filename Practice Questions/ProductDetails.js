const findProduct = (products, productName) => products.find(product => product.name === productName);

module.exports = findProduct;
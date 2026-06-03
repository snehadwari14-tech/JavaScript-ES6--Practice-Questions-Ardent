const validateUser = require("./validation");
const calculateTotalPrice= require("./product");
const Grades= require("./result");
const checkStock= require("./shopping");
const orderStatus= require("./tracking");
const arr = require('./arr');
const registerUser= require("./User");
const paymentStatus= require("./onlinePayment");
const ticketPrice= require("./MovieTicket");
const saveFeedback= require("./Customer");
const cardMap = require("./cardMap");
const products = [
    { name: "Laptop"},
    { name: "TV"},
    { name: "Mobile"}
];
const getUserInfo = require("./DAshboard");
const getTotal = require("./CartTotal");
const filterCourses = require("./Course");
const findProduct = require("./ProductDetails");
const welcomeMessage = require("./Message");
const getUser = require("./Fetching");
const mergeProfile = require("./MergeProfile");
const { add, sub } = require("./Utility");
const apilogin = require("./API");



console.log(validateUser("snehadwari", "1234"));
console.log(calculateTotalPrice(100, 5));
console.log(Grades(95));
console.log(Grades(85));
console.log(Grades(75));
console.log(Grades(40));
console.log(checkStock(10));
console.log(checkStock(0));
console.log(orderStatus("shipped"));
console.log(orderStatus("delivered"));
console.log(orderStatus("pending"));
console.log(orderStatus("invalid"));
console.log(arr.addcourse("NodeJS"));
console.group(arr.addcourse("Python"));
console.log(arr.removecourse("CSS"));
console.log(registerUser("snehadwari", "snehadwari@example.com", "1234"));
console.log(registerUser("snehadwari", "snehadwari@gmail.com", "123456"));
console.log(paymentStatus(100));
console.log(paymentStatus(0));
console.log(ticketPrice(12, 3));
console.log(saveFeedback("SNEHA", "Great product!"));
console.log(cardMap(products));
console.log(getUserInfo("snehadwari"));
console.log(getUserInfo("neharoy"));
console.log(getTotal([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
    { price: 20, quantity: 1 }
]));
console.log(filterCourses([
    { name: "JavaScript Basics", category: "Programming" },
    { name: "Introduction to Design", category: "Design" },
    { name: "React Fundamentals", category: "Programming" }
]));
console.log(findProduct(products, "TV"));
console.log(findProduct(products, "Mobile"));
console.log(welcomeMessage);
console.log(getUser(1));
console.log(mergeProfile({ name: "SNEHA", age: 30 }, { email: "snehadwari@example.com" }));
console.log(add(5, 3));
console.log(sub(10, 7));
async function testApiLogin() {
    try {
        const result = await apilogin();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
testApiLogin();
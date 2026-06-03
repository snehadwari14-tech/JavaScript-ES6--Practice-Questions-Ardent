function validateUser(user, password) {
    if (user === "snehadwari" && password === "1234") {
        return "validation successful";
    } else {
        return "validation failed";
    }
}
module.exports= validateUser;
function registerUser(username, email, password) {
   if (username === "snehadwari" && email === "snehadwari@example.com" && password === "1234") {
        return "Registration successful";
    } else {
        return "Registration failed";
    }
}
module.exports= registerUser;
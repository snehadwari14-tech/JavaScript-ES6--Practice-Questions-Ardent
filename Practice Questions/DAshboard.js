const getUserInfo = user => {
   const users = {
        "snehadwari": { name: "SNEHA", age: 30, email: "snehadwari@example.com" },
        "neharoy": { name: "NEHA", age: 25, email: "neharoy@example.com" }
    };
    return users[user] || null;
};
module.exports = getUserInfo;
function saveFeedback(name, feedback) {
    if (name=== "SNEHA"&& feedback=== "Great product!") {
        return "Feedback submitted successfully";
    } else {
        return "Feedback submission failed";
}
}
module.exports = saveFeedback;
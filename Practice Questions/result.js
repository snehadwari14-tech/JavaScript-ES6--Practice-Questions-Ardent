function Grades(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else {
        return "C";
    }
}
module.exports= Grades;
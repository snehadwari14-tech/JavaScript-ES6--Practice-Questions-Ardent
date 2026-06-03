let courses = ["HTML", "CSS", "JS", "React"];

function addcourse(course) {
    courses.push(course);
    return courses;
}

function removecourse(course) {
    const index = courses.indexOf(course);
    if (index !== -1) {
        courses.splice(index, 1);
    }
    return courses;
}

module.exports= {addcourse, removecourse};
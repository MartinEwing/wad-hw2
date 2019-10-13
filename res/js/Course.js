class Course {

    constructor(title, semester, grade){
        this.title = title;
        this.semester = semester;
        this.grade = grade;
    }

}

var hidden = true;
function addCourse() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('add-course').style.display = 'inline';
    } else {
        document.getElementById('add-course').style.display = 'none';
    }
}
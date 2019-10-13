$(function(){

  let user = new User("Bob", "Last", "26.07.1999", "Software Engineering", 0);

  $("#profile #name").text(user.firstname + " " + user.lastname);
  $("#profile #birthdate").text(user.birthdate);
  $("#profile #faculty").text(user.faculty);

  let courses = [];
  let course = new Course("Agile software development", "1", 82);
  courses.push(course);
  course = new Course("Testing", "2", 90);
  courses.push(course);

  var i;
  let sum = 0;
  for (i = 0; i < courses.length; i++) {
    $("#courses").append("<tr><td>" + (i+1) + "</td><td>" + courses[i].title +"</td><td>" + courses[i].semester +"</td><td>" + courses[i].grade +"</td></tr>");
    sum = calGrade(courses[i].grade);
  }

  let gpa = sum / courses.length;

  $("#profile #gpa strong").text(gpa);

  $("#profile-button").click(function (){

    $("#courses-container").removeClass("active");
    $("#profile-container").addClass("active");

    $(this).addClass("active");
    $("#courses-button").removeClass("active");

  });

  $("#courses-button").click(function (){
    $("#profile-container").removeClass("active");
    $("#courses-container").addClass("active");


    $(this).addClass("active");
    $("#profile-button").removeClass("active");
  });

  var hidden = true;
  $('#add-course-button')
      .click(
          function ()
          {
            if(hidden){
              $("#add-course").css("display", "inline");
              hidden = false;
            } else{
              $("#add-course").css("display", "none");
              hidden = true;
            }

          }
      );

  $('#cancel-course')
      .click(
          function ()
          {
            $("#title").val('');
            $("#semester").val('');
            $("#grade").val('');
            $('#add-course-button').click();
          }
      );
  function calGrade(grade) {
    if (grade > 90) {
      return 4;
    } else if (grade > 80) {
      return 3;
    } else if (grade > 70) {
      return 2;
    } else if (grade > 60) {
      return 1;
    } else if (grade > 50) {
      return 0.5;
    } else {
      return 0;
    }

  }
});

$(function(){

  let user = new User("Bob", "Last", "26.07.1999", "Software Engineering", 0);

  $("#profile #name").text(user.firstname + " " + user.lastname);
  $("#profile #birthdate").text(user.birthdate);
  $("#profile #faculty").text(user.faculty);

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
});


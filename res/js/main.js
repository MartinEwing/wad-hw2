
$(function(){

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

});

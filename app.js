$(document).ready(function() {


  setTimeout(function() {
    $("#splash").fadeOut(500);
      }, 3000);
  setTimeout(function() {
    $("#main").fadeIn(500);
  }, 3000);

});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

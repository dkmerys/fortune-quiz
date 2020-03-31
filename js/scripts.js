$(document).ready(function(){
  // $("#goodbehavior").hide();
  // $("#okaybehavior").hide();
  // $("#badbehavior").hide();
  $("form#pastbehavior").submit(function(event){
    event.preventDefault();
    $("#goodbehavior").hide();
    $("#okaybehavior").hide();
    $("#badbehavior").hide();
    $("input:checkbox[name=behavior]:checked").each(function(){
        if ($("input[type:checkbox]:checked").length <= 2) {
          $("#goodbehavior").show()
          } else if ($("input[type:checkbox]:checked").length > 2 && $("input[type:checkbox]:checked").length <= 6) {
            $("#okaybehavior").show()
            } else if ($("input[type:checkbox]:checked").length > 6) {
              $("#badbehavior").show()
            }
            $("#pastbehavior").hide();
    });
  });
});
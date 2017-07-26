$(document).ready(function(){
  $(".chip").click(function(){
    $(".chip").removeClass("chip_select");
    $(this).addClass("chip_select");
  });
});

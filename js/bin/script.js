$(document).ready(function(){
  $(".chip").click(function(){
    $(".chip").removeClass("chip_select");
    $(this).addClass("chip_select");
  });
});

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

document.getElementById('my-age').innerHTML = getAge("1993/05/23");

function showList(str) { // str is the membertype
    var xhttp;
    if (str == "") {
      document.getElementById("table").innerHTML = "Table will be shown here...";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("table").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/functions/getuserstable.php?q="+str, true);
    xhttp.send();
}

function showPopUp(){
  let window = document.getElementById("popWindow");
  window.style.display = "block";
  let shadow = document.getElementById("opaque")
  shadow.style.display = "block";
}

function closePopUp(){
  let window = document.getElementById("popWindow")
  window.style.display = "none"
  let shadow = document.getElementById("opaque")
  shadow.style.display = "none"
}

$(function () {
  $('#adder').on("submit", function(e){
    var dataString = $(this).serialize();
    console.log(dataString)
    $.ajax({
      type: "POST",
      url: "/functions/createuser.php",
      data: dataString,
      statusCode: {
        200: function(){
          $("#confirm").show()
          $("#error").hide()
        },
        500: function(xhr) {
          $("#error").html("Something went wrong. Error: " + xhr.responseText)
        }
      }
    });
    $("#adder input").each(function(){
        $(this).val("")
    })
    $("#adder input[type^='submit']").val("Create User")
    $("#adder input[type^='password']").val("loremipsum")
    return false;
  
  })
});

function hide(what){
  $("#${what}").hide();
}
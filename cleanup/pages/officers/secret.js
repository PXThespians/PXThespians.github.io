import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";
import Navbar from "/components/Navbar"

// navBar init

const nav = ReactDOM.createRoot(document.getElementById('navigation'));
nav.render(<Navbar />);


function showList(str) { // str is the membertype
  let res;

  // send sql query, save data as "res"
  $.ajax({
    type : "GET",
    url : "/functions/getuserstable.php",
    data: {q: str},
    statusCode : {
      200: function(xhr){
        res = xhr.responseText
      },
      500: function(xhr){
        res = ""
      }
    }
  })

  console.log(res)

  // format as table with buttons, send to html
  document.getElementById("table") = function (res) {
    let result = 0;
    for (i in res){
      
    }
  }


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
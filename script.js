var myVar = setInterval(myTimer, 1000);
var hours = ["12",
"01","02","03","04","05","06","07","08","09","10","11","12",
"01","02","03","04","05","06","07","08","09","10","11"];
var months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];
function myTimer() {
var date = new Date();
document.getElementById("date").innerHTML =
date.getDate() +
"-" +
months[date.getMonth()] +
"-" +
date.getFullYear();
document.getElementById("hours").innerHTML = hours[date.getHours()];
document.getElementById("minutes").innerHTML = date.getMinutes()<10?"0"+date.getMinutes() :date.getMinutes();
document.getElementById("seconds").innerHTML = date.getSeconds()<10?"0"+date.getSeconds() :date.getSeconds();
document.getElementById("ampm").innerHTML = date.getHours()<12?"AM":"PM";

if (document.getElementById("colon1").innerHTML.includes(":"))
{

document.getElementById("colon2").innerHTML = "";
document.getElementById("colon1").innerHTML = "";
}
else
{

document.getElementById("colon2").innerHTML = ":";
document.getElementById("colon1").innerHTML = ":";
}

}
//when page is loaded
$(document).ready(function () {
  //accessibility enhancements
var h1size = $("h1").css("fontSize")
          $("h1").hover(
            function(){
            $(this).css("fontSize", "40px");
          }, 
          function(){
            $(this).css("fontSize", h1size);
  })
  
  var psize = $("p").css("fontSize")
          $("p").hover(
            function(){
            $(this).css("fontSize", "20px");
          }, 
          function(){
            $(this).css("fontSize", psize);
  })

var lisize = $(".paws li").css("fontSize")
          $("li").hover(
            function(){
            $(this).css("fontSize", "25px");
          }, 
          function(){
            $(this).css("fontSize", lisize);
  })

var logo = $(".logo a").css("opacity")
          $(".logo a").hover(
            function(){
            $(this).css("opacity", "0.5");
          }, 
          function(){
            $(this).css("opacity", logo);
  })

  var social = $(".social-media a").css("opacity")
          $(".social-media a").hover(
            function(){
            $(this).css("opacity", "0.5");
          }, 
          function(){
            $(this).css("opacity", social);
  })

  var links = $("p span, #main-menu a, .accessibility a").css("color")
          $("p span, #main-menu a").hover(
            function(){
            $(this).css("color", "#ff0000");
          }, 
          function(){
            $(this).css("color", links);
  })

});
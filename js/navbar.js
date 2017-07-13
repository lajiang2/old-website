// JavaScript Document

$(document).ready(function(){ 
  $.get("navbar.html", function(data) {
    $("#nav").html(data);
  });
}); 
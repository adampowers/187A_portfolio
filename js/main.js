$(document).ready(function() {

  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();


$(document).ready(sizeContent);
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() + "px";
    $("#sidebar").css("height", newHeight);
}

});

//Initial load of page


//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() + "px";
    $("#wrapper").css("height", newHeight);
}
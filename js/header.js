console.log("header")

$(document).ready(function () {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100 ) {
        $("header").addClass("header2");
        $(".cabecera").addClass("bloque-inicio2");
      } else {
        $("header").removeClass("header2");
        $(".cabecera").removeClass("bloque-inicio2");
      }
    });
  });
  
  
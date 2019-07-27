$("body").scroll(function() {
  $(".jumbotron").css({
    "background-position": "center " + $("body").scrollTop() * 0.65 + "px"
  });
});

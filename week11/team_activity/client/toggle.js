login_toggle = document.getElementById("log-in-toggle");
signup_toggle = document.getElementById("sign-up-toggle");

$(document).ready(function () {
  $("switch-sign-up").click(function () {
    $("sign-up-toggle").toggle();
  });
});

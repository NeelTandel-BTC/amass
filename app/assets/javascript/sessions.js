//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.validate
//= require bootstrap.min.js
//= require sessions/owl.carousel.min
//= require sessions/metisMenu.min
//= require sessions/jquery.slimscroll.min
//= require sessions/jquery.slicknav.min
//= require sessions/plugins
//= require sessions/scripts

$(document).on('turbolinks:load', function (e) {
  var requiredRule = {
    required: true
  };

  $('#signin_form').validate({
    errorElement: 'div',
    errorClass: 'is-invalid text-danger',
    rules: {
      "user[email]": requiredRule,
      "user[password]": requiredRule
    },

    messages: {
      "user[email]": "Please enter email.",
      "user[password]": "Please enter password."
    },
  });
});

$(document).on('turbolinks:load', function (e) {
  var requiredRule = {
    required: true
  };

  var confirmRules = {
    required: true,
    equalTo: '#user_password'
  };
 
  $('#registration-form').validate({
    errorElement: 'div',
    errorClass: 'is-invalid text-danger',
    rules: {
      "user[email]": {
        required: requiredRule,
      },
      "user[password]": {
        required: requiredRule,
      },
      "user[password_confirmation]": confirmRules
    },

    messages: {
      "user[email]": {
        required: "Please enter email.",
      },
      'user[password]': {
        required: 'Please enter password.',
      },
      'user[password_confirmation]': {
        required: 'Please enter confirmation password.',
        equalTo: 'Please enter the same password.'
      }
      },
  });

  $('.email_validate').on('change', function() {
    $('.email_validation').hide(); 
  });
  $('.pwd_validate').on('change', function() {
    $('.pwd_validation').hide(); 
  });
});

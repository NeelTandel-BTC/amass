$(window).on('load', function () {
  var preloader = $('#preloader');
  preloader.fadeOut('slow', function () { $(this).remove(); });
  $('.form-gp input').on('focus', function () {
    $(this).parent('.form-gp').addClass('focused');
  });
  $('.form-gp input').on('focusout', function () {
    if ($(this).val().length === 0) {
      $(this).parent('.form-gp').removeClass('focused');
    }
  });
});

(function($) {

  $(document).ready(function() {
  /* ---------------------------------------------- /*
   * E-mail validation
  /* ---------------------------------------------- */

  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };

  /* ---------------------------------------------- /*
   * Contact form ajax
  /* ---------------------------------------------- */

  $('#contact-form').submit(function(e) {

    e.preventDefault();

    var c_name = $('#name').val();
    var c_email = $('#email').val();
    var c_city = $('#city').val();
    var c_message = $('#message').val();
    var response = $('#contact-form .ajax-response');

    if (( c_name== '' || c_email == '' || c_city== '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
      response.fadeIn(500);
      response.html('<i class="fa fa-warning"></i> Por favor, arrume os erros e tente novamente.');
    } else {
      //$('#contact-form .ajax-hidden').ajax({url: 'https://docs.google.com/forms/d/1wjTYT6VUU6HM77z_eiRH1FDswrMhf4TEyRbo4o6PAwI/formResponse', type: 'POST'}).fadeOut(500);
      $('#contact-form .ajax-hidden').fadeOut(500);
      $.ajax({
        url: "https://docs.google.com/forms/d/1wjTYT6VUU6HM77z_eiRH1FDswrMhf4TEyRbo4o6PAwI/formResponse",
        data: {"entry.455131558" : c_name, "entry.114180875" : c_email, "entry.757366481": c_city, "entry.885042647": c_message},
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function (){
               response.html("<p class=\"sent\">Sua mensagem foi enviada. <br /> Entraremos em contato o mais rápido possível. <br /> Obrigado.</p>").fadeIn(500);
             },
          200: function (){
                 response.html("<p class=\"sent\">Sua mensagem foi enviada. <br /> Entraremos em contato o mais rápido possível. <br /> Obrigado.</p>").fadeIn(500);
             }
        }
      });

			}

      return false;
	});

	});

})(jQuery);

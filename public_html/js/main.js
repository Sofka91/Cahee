$(document).ready(function () {


//ANIMATIONS

    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });


//FORM VALIDATION

    if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    your_email: {
                        required: true,
                        email: true
                    },
                    your_phone_number: {
                        required: true
                    },
                    your_message: {
                        required: true
                    }
                },
                messages: {
                    your_email: {
                        required: 'Field is required',
                        email: 'Please enter a valid email address'
                    },
                    your_phone_number: {
                        required: 'Field is required'
                    },
                    your_message: {
                        required: 'Field is required'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }





}
)


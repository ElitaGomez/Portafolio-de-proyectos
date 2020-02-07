// CONTACT FORM
$(function() {

    // Validate the contact form
    $('#contact-form').validate({
        // Specify what the errors should look like
        // when they are dynamically added to the form
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter($(element).parent());
            error.wrap("<div class='error-msg'></div>");
        },

        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            website: {
                minlength: 5
            },
            subject: {
                minlength: 8
            },
            message: {
                required: true,
                minlength: 20
            }
        },

        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            subject: {
                required: "Subject is required.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            message: {
                required: "Message is required.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },

        // Use Ajax to send everything to send.php
        submitHandler: function(form) {
            $("#send").text("Sending...");
            $(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    $(form).slideUp("fast");
                    $("#response").html(responseText).hide().slideDown("fast");
                }
            });
            return false;
        }
    });
});
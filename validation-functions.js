$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'First Name': {
             message: 'First name is not valid.',
                validators: {
                    notEmpty: {
                        message: 'First name is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'First names can only consist of alphabetical characters.'
                    },
                }
            },
            'Last Name': {
                message: 'Last Name is not valid.',
                validators: {
                    notEmpty: {
                        message: 'Last name is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Last names can only consist of alphabetical characters.'
                    },
                }
            },
            'SID': {
                message: 'SID is not valid.',
                validators: {
                    notEmpty: {
                        message: 'SID is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 8,
                        max: 11,
                        message: 'Please enter a valid student ID number.'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: 'Student ID numbers can only consist of numbers.'
                    },
                }
            },
            'Team': {
                message: 'Team is not valid.',
                validators: {
                    notEmpty: {
                        message: 'Team is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: 'Please enter a team between 1 and 19.'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: 'Team number can only consist of numbers.'
                    },
                }
            },
            'Absent Members': {
                validators: {
                    stringLength: {
                        min: 0,
                        max: 100,
                        message: 'Exceeded maximum length.'
                    },
                }
            },
        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbwk7ww8JrinFfcG0Bc8b7HgdIsXQyGloeHtjK63O0VNQyl_964/exec';
        var redirectUrl = 'success-page.html';
        // show the loading
        $('#postForm').append($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        console.log($form.serialize());
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);
                }
            });
    });
});

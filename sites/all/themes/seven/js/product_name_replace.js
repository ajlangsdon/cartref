(function($) {
    $(function(){
        /*$('#field-integration-group-values .fieldset-title').each(function() {
            var value = $('.field-name-field-paypal-products .form-select option:selected').val();
            $("#field-integration-group-values .fieldset-title").html(value);
        });*/

        $('#field-integration-group-values fieldset').each(function() {
            var $fieldset = $(this);
            var value = $fieldset.find('.field-name-field-paypal-products option:selected').text();
            //var value = $fieldset.find('field-name-field-paypal-products option:selected').text();
            $fieldset.find('.fieldset-title').html(value);
        });
    });
})(jQuery);
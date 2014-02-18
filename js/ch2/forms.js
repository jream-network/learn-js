// Selecting Speeds:
//  #id
//  .class
//  attr (name=something)
//
//
$(function() {
    $("input[name=balloon]").hide();

    $("input[name=name]").val('Jesse');
    $("input[name=age]").val(50);
    $("select[name=gender] option[value=f]").attr('selected', true);

    $("select[name=gender]").change(function(evt) {
        evt.preventDefault();
        var selected = $(this).val();
        if (selected == 'f') {
            $("input[name=balloon]").show();
        } else {
            $("input[name=balloon]").hide();
        }

    })

    $("#user-form").submit(function(evt) {
        evt.preventDefault();
        // var self = this;
        var inputs = $('input[name], select[name]', this);
        for (var i = 0; i < inputs.length; i++)
        {
            // $('input[type=submit]', this).hide();
            var tmp = $(inputs[i]).val();
            // console.log(tmp);
        }

        $.each(inputs, function(key, input) {
            // $('input[type=submit]', self).hide();
            console.log(key);
            var tmp = $(input).val();
            console.log(tmp);
        });

        // var post_data = $(this).serialize();
        // console.log(post_data);


    });

});
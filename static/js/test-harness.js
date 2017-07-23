(function () {
    //"use strict";
    var th = {};
    var client; 

    th = {
        $loader: $("#hourglass"),
        $submit: $("#btn-call"),
        $reproUrl: $("#repro-url"),
        $form: $("form"),

        init: function () {
            th.$submit.click(th._onSubmitClick);
            $(document).on("click", ".page", function (e) {
                e.preventDefault();
            });

        },

        _onSubmitClick: function(e) {
            e.preventDefault();
            th.$loader.show();
            client = new Skyscanner.LivePricingClient();
            $formData = th.$form.serializeArray();
            var options = {};
            for (var i = 0; i < $formData.length; i++){
                options[$formData[i]['name']] = $formData[i]['value'];
            }
            //th.$reproUrl.text(th.$form.serializeArray());
            th.$reproUrl.show();
            client.getHotels(options);
        }

    };
    

    th.init();


    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
        $('.datepicker-container .input-group.date').datepicker({
            format: "yyyy-mm-dd",
            startDate: "today"
        });
    });


}());
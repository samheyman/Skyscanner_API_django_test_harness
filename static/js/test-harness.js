(function () {
    "use strict";

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
        $('.datepicker-container .input-group.date').datepicker({
        });
    });

    // $(document).ready(function () {
    //     $("#outbounddate, #checkindate").datepicker({
    //         showOn: "focus",
    //         dateFormat: "yy-mm-dd"
    //     }).datepicker("setDate", "+7");
    //     $("#inbounddate, #checkoutdate").datepicker({
    //         showOn: "focus",
    //         dateFormat: 'yy-mm-dd'
    //     }).datepicker("setDate", "+14");
    // });

}());
// $(document).ready(function() {
//     $("button").click(function() {
//         $("div").text($("form").serialize());
//     });
// });

// serialize method is used to get the value of the form elements

$(document).ready(function() {
    $("button").click(function() {
        $("div").text($("form").serializeArray());
    });
});
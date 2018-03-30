/**
 * Created by taks on 13/03/2017.
 */

$(document).ready(function () {
    $('#calculate').on('click', function() {
        var firstNum = $('#firstNumber').val();
        var secondNum = $('#secondNumber').val();
        var operation = $('#operation').find(':selected').val();
        var json = {};

        json["firstNumber"] = firstNum;
        json["secondNumber"] = secondNum;
        json["operation"] = operation;

        $.ajax({
            type: "POST",
            url: "/api/calculate",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(json),
            success: function (data) {
                $('.system-container').append('<div class="system-holder">'
                    + '<p>' + data.result + '</p>'
                    +'</div>');
                $('#firstNumber').val("");
                $('#secondNumber').val("");
                $('#operation').val("");
                $('#errorMessage').text("");

            },
            error: function (xhr, textStatus) {
                $('#errorMessage').text("");
                $('#errorMessage').text("Invalid Inputs");
            }
        });
    });
});

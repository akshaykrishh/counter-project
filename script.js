setInterval(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var date = dd + '-' + mm + '-' + yyyy;

    var hh = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    var time = hh + ":" + min + ":" + sec;

    document.getElementById("currentTime").innerHTML = time;
    document.getElementById("currentDate").innerHTML = date;
}, 100);

$(document).ready(function () {

    $("#form-submit-btn").click(function (e) {
        e.preventDefault();
        if ($("#form-edit-btn").css('display') === 'none') {
            $("#form-edit-btn").show()
        }
        $("form input").attr("disabled", true);
    });

    $("#form-edit-btn").click(function (e) {
        e.preventDefault();
        $("form input").attr("disabled", false);
    });
});
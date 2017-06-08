$(document).ready(function () {
    $("#get").click(function () {

        jQuery(function ($) {
            console.log("start")
            $.get("quran_quotes.txt", function (wholeTextFile) {
                console.log(wholeTextFile)
                var lines = wholeTextFile.split(/\n/),
                    randomIndex = Math.floor(Math.random() * lines.length),
                    randomLine = lines[randomIndex];
                console.log(randomIndex, randomLine);
                $("#quran_ref_quotes").hide();
                $.get("quran_ref_quotes.txt", function (wholeTextFile) {
                    var lines = wholeTextFile.split(/\n/),
                    random_ref = lines[randomIndex];
                    console.log(random_ref, randomLine);
                    var url = "https://quran.com/" + random_ref
                    var target = "_blank"
            
                    $("#quran_ref_quotes").html(" <a href ="+ url + " target=" + target + " > Quran " + random_ref.replace(/#/g, "<br>" + "</a>"));
                    $("#quran_ref_quotes").fadeIn(1000);
                });

                $("#quran_quotes").hide();
                $("#quran_quotes").html(randomLine.replace(/#/g, "<br>"));
                $("#quran_quotes").fadeIn(1000);

            });

        });
    });
});





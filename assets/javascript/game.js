$(document).ready(function() {

    var random;
    // console.log(random);

    //function to start board and reset board
    var startReset = function() {
        random = Math.floor(Math.random() * 101) + 19;
        $(".rand-num").text(random);
        for (i = 1; i < 5; i++) {
            // console.log("for loop ran");
            var crysNum = Math.floor(Math.random() * 12) + 1;
            // console.log(crysNum);
            $("#cry-" + i).attr("crysRandNum", crysNum);
            // console.log($("#cry-" + i).attr("crysRandNum"));
        }
        points = 0;
        $(".points").text(points);
    }
    startReset();


    var points = 0;

    //function to alert win or loss and call the reset function
    var winLose = function() {
        if (points === random) {
            alert("Win");
            startReset();
        }
        else if (points > random) {
            alert("Lose");
            startReset();
        }
    }

    $("#cry-1").on("click", function() {
        // console.log($("#cry-1").attr("crysRandNum"));
        points = points + parseInt($("#cry-1").attr("crysRandNum"));
        // console.log(points);
        $(".points").text(points);
        winLose();
    })

    $("#cry-2").on("click", function() {
        // console.log($("#cry-2").attr("crysRandNum"));
        points = points + parseInt($("#cry-2").attr("crysRandNum"));
        // console.log(points);
        $(".points").text(points);
        winLose();
    })

    $("#cry-3").on("click", function() {
        // console.log($("#cry-3").attr("crysRandNum"));
        points = points + parseInt($("#cry-3").attr("crysRandNum"));
        // console.log(points);
        $(".points").text(points);
        winLose();
    })

    $("#cry-4").on("click", function() {
        // console.log($("#cry-4").attr("crysRandNum"));
        points = points + parseInt($("#cry-4").attr("crysRandNum"));
        // console.log(points);
        $(".points").text(points);
        winLose();
    })

  });
// email capture box //

$(function() {
    $('#emailcapture').fadeIn(2000);
});

$('#xout').on('click', function() {
    $('#emailcapture').fadeOut(2000);

});

$('#submitbutton').on('click', function() {
    $('#emailcapture').fadeOut(2000);

});

// GIVING TRIP AT THE END //



var submission = function(e) {
    $('#submitted').click(function() {
        for (i = 0; i < trips.length; i++) {
            if (trips[i].distance !== e.distance) {
                continue;
            } else if (trips[i].remoteness !== e.remoteness) {
                continue;
            } else if (trips[i].landscape !== e.landscape) {
                continue;
            } else if (trips[i].price !== e.price) {
                continue;
            } else if (trips[i].rigor !== e.rigor) {
                continue;
            } else if (trips[i].tastes !== e.tastes) {
                continue;
            } else if (trips[i].interests !== e.interests) {
                continue;
            } else if (trips[i].climate !== e.climate) {
                continue;
            } else if (trips[i].companions !== e.companions) {
                continue;
            } else {
                alert("go to fucking " + trips[i].name + " already!");
            };
        };

    });

}


// SETTING NEW OBJECT UP //

var selections = function() {
    newobj = {};
    document.addEventListener("click", function(e) {
        if (e.target.id == "domestic" || e.target.id == "international") {
            newobj.distance = e.target.id

        } else if (e.target.id == "urban" || e.target.id == "rural") {
            newobj.remoteness = e.target.id
        } else if (e.target.id == "desert" || e.target.id == "beach" || e.target.id == "mountains" || e.target.id == "lake") {
            newobj.landscape = e.target.id
        } else if (e.target.id == "music" || e.target.id == "museums" || e.target.id == "historicalsites" || e.target.id == "restaurants") {
            newobj.landscape = e.target.id
        } else if (e.target.id == "low-cost" || e.target.id == "medium-cost" || e.target.id == "high-cost") {
            newobj.price = e.target.id
        } else if (e.target.id == "active" || e.target.id == "leisure") {
            newobj.rigor = e.target.id
        } else if (e.target.id == "foodie" || e.target.id == "beer" || e.target.id ==
            "wine") {
            newobj.tastes = e.target.id
        } else if (e.target.id == "culture" || e.target.id == "nature") {
            newobj.interests = e.target.id
        } else if (e.target.id == "hot" || e.target.id == "cold" || e.target.id == "mild") {
            newobj.climate = e.target.id
        } else if (e.target.id == "group" || e.target.id == "pair" || e.target.id == "solo") {
            newobj.companions = e.target.id
        } else if (e.target.id == "camping" || e.target.id == "hostel" || e.target.id == "rental" || e.target.id == "hotel") {
            newobj.lodging = e.target.id
        }
    });
    submission(newobj);

}
selections();







// DIMMING QUESTIONS THAT ARE NOT ACTIVE //
document.addEventListener("scroll", function() {
    var y = $('body').scrollTop();
    console.log(y);
    if (y < 300) {
        $('#question1').removeClass('open');
        $('#question2').removeClass('open');
    } else if (y > 300 && y < 600) {
        $('#question1').addClass('open');
        $('#question2').addClass('open');
        $('#question3').removeClass('open');
        $('#question32').removeClass('open');
    } else if (y > 700 && y < 1352) {
        $('#question3').addClass('open');
        $('#question32').addClass('open');
        $('#question2').removeClass('open');
        $('#question4').removeClass('open');
    } else if (y > 1452 && y < 2050) {
        $('#question4').addClass('open');
        $('#question3').removeClass('open');
        $('#question32').removeClass('open');
        $('#question5').removeClass('open');
    } else if (y > 2150 && y < 2380) {
        $('#question5').addClass('open');
        $('#question4').removeClass('open');
        $('#question6').removeClass('open');
    } else if (y > 2580 && y < 3043) {
        $('#question6').addClass('open');
        $('#question5').removeClass('open');
        $('#question7').removeClass('open');
    } else if (y > 3243 && y < 3620) {
        $('#question7').addClass('open');
        $('#question6').removeClass('open');
        $('#question8').removeClass('open');
    } else if (y > 3738 && y < 4310) {
        $('#question8').addClass('open');
        $('#question7').removeClass('open');
        $('#question9').removeClass('open');
    } else if (y > 4430 && y < 5100) {
        $('#question9').addClass('open');
        $('#question8').removeClass('open');
        $('#question10').removeClass('open');
    } else if (y > 5210) {
        $('#question10').addClass('open');
        $('#question9').removeClass('open');

    }

});

// AUTOSCROLL AFTER CLICK EACH QUESTION //


document.addEventListener("click", function(e) {
    if (e.target.id == "domestic" || e.target.id == "international") {
        $('body').animate({
            scrollTop: 400
        }, 1000)
    } else if (e.target.id == "urban") {
        $('#question3').addClass('hide');
        $('#question32').addClass('show');
        $('body').animate({
            scrollTop: 900
        }, 1000)
    } else if (e.target.id == "rural") {
        $('#question3').removeClass('hide');
        $('#question32').removeClass('show');
        $('body').animate({
            scrollTop: 900
        }, 1000)
    } else if (e.target.id == "beach" || e.target.id == "lake" || e.target.id == "mountains" || e.target.id == "desert") {
        $('body').animate({
            scrollTop: 1580
        }, 1000)
    } else if (e.target.id == "music" || e.target.id == "restaurants" || e.target.id == "museums" || e.target.id == "historicalsites") {
        $('body').animate({
            scrollTop: 1580
        }, 1000)
    } else if (e.target.id == "low-cost" || e.target.id == "medium-cost" || e.target.id == "high-cost") {
        $('body').animate({
            scrollTop: 2253
        }, 1000)
    } else if (e.target.id == "active" || e.target.id == "leisure") {
        $('body').animate({
            scrollTop: 2740
        }, 1000)
    } else if (e.target.id == "foodie" || e.target.id == "beer" || e.target.id == "wine") {
        $('body').animate({
            scrollTop: 3384
        }, 1000)
    } else if (e.target.id == "culture" || e.target.id == "nature") {
        $('body').animate({
            scrollTop: 3883
        }, 1000)
    } else if (e.target.id == "hot" || e.target.id == "cold" || e.target.id == "mild") {
        $('body').animate({
            scrollTop: 4594
        }, 1000)
    } else if (e.target.id == "pair" || e.target.id == "group" || e.target.id == "solo") {
        $('body').animate({
            scrollTop: 5300
        }, 1000)
    } else if (e.target.id == "camping" || e.target.id == "hostel" || e.target.id == "hotel" || e.target.id == "rental") {
        $('body').animate({
            scrollTop: 5404
        }, 1000)
    }

});
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

// testing //

var trips = [{
    name: "New York City",
    distance: "domestic",
    remoteness: "urban",
    landscape: "",
    price: "medium-cost",
    rigor: "leisure",
    tastes: "foodie",
    interests: "museums",
    climate: "cold",
    companions: "pair",
    lodging: "hotel",
}, {
    name: "Zion",
    distance: "domestic",
    remoteness: "urban",
    landscape: "desert",
    price: "medium-cost",
    rigor: "active",
    tastes: "foodie",
    interests: "nature",
    climate: "hot",
    companions: "pair",
    lodging: "camping",
}, ];

newobj = {};

var selections = function() {
    
    document.addEventListener("click", function(e) {
        if (e.target.id == "domestic" || e.target.id == "international") {
            newobj.distance = e.target.id

        } else if (e.target.id == "urban" || e.target.id == "rural") {
            newobj.remoteness = e.target.id
        }
        else if (e.target.id == "desert" || e.target.id == "beach" || e.target.id == "mountains" || e.target.id == "lake") {
            newobj.landscape = e.target.id
        }
        else if (e.target.id == "low-cost" || e.target.id == "medium-cost" || e.target.id == "high-cost") {
            newobj.price = e.target.id
        }
        else if (e.target.id == "active" || e.target.id == "leisure") {
            newobj.rigor = e.target.id
        }
        else if (e.target.id == "foodie" || e.target.id == "beer" || e.target.id == 
        	"wine") {
            newobj.tastes = e.target.id
        }
        else if (e.target.id == "culture" || e.target.id == "nature") {
            newobj.interests = e.target.id
        }
        else if (e.target.id == "hot" || e.target.id == "cold" || e.target.id == "mild") {
            newobj.climate = e.target.id
        }
        else if (e.target.id == "group" || e.target.id == "pair" || e.target.id == "solo") {
            newobj.companions = e.target.id
        }
        else if (e.target.id == "camping" || e.target.id == "hostel" || e.target.id == "rental" || e.target.id == "hotel") {
            newobj.lodging = e.target.id
        }
    });


}
selections();

// Submission

var submission = function() {
    
    document.addEventListener("click", function(e) {
        if(e.target.id === "submitted"){
        alert('here');
        console.log(newobj);


        // for (i = 0; i < trips.length; i++) {
        //     if (trips[i].distance !== newobj.distance) {
        //         continue;
        //     } else if (trips[i].remoteness !== newobj.remoteness) {
        //         continue;
        //     } else if (trips[i].landscape !== newobj.landscape) {
        //         continue;
        //     } else if (trips[i].price !== newobj.price) {
        //         continue;
        //     } else if (trips[i].rigor !== newobj.rigor) {
        //         continue;
        //     } else if (trips[i].tastes !== newobj.tastes) {
        //         continue;
        //     } else if (trips[i].interests !== newobj.interests) {
        //         continue;
        //     } else if (trips[i].climate !== newobj.climate) {
        //         continue;
        //     } else if (trips[i].companions !== newobj.companions) {
        //         continue;
        //     } else {
        //         console.log(trips[i].name);
        //     }
        // };

    });
    }
}

submission();


















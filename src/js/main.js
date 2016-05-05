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
        lodging: "hotel"
    },
    {
        name: "Zion",
        distance: "domestic",
        remoteness: "rural",
        landscape: "desert",
        price: "medium-cost",
        rigor: "active",
        tastes: "foodie",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "camping"
    }, {
        name: "Costa Rica - beach",
        distance: "international",
        remoteness: "rural",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "foodie",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "rental"
    }, {
        name: "Costa Rica - rainforest",
        distance: "international",
        remoteness: "rural",
        landscape: "mountains",
        price: "medium-cost",
        rigor: "active",
        tastes: "foodie",
        interests: "nature",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    }, {
        name: "San Francisco - medium cost",
        distance: "domestic",
        remoteness: "urban",
        landscape: "",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "wine",
        interests: "culture",
        climate: "mild",
        companions: "group",
        lodging: "hotel"
    }, {
        name: "San Francisco - high cost",
        distance: "domestic",
        remoteness: "urban",
        landscape: "",
        price: "high-cost",
        rigor: "leisure",
        tastes: "wine",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    }, {
        name: "San Francisco - beer",
        distance: "domestic",
        remoteness: "urban",
        landscape: "",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    }, {
        name: "West Coast",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "medium-cost",
        rigor: "active",
        tastes: "foodie",
        interests: "nature",
        climate: "mild",
        companions: "group",
        lodging: "hotel"
    }, {
        name: "Panama",
        distance: "international",
        remoteness: "rural",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "nature",
        climate: "hot",
        companions: "solo",
        lodging: "hostel"
    }, {
        name: "Panama",
        distance: "international",
        remoteness: "rural",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "hotel"
    }, {
        name: "Panama",
        distance: "international",
        remoteness: "rural",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "culture",
        climate: "mild",
        companions: "group",
        lodging: "hotel"
    }, {
        name: "Yosemite",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "low-cost",
        rigor: "active",
        tastes: "beer",
        interests: "nature",
        climate: "mild",
        companions: "pair",
        lodging: "camping"
    }, {
        name: "Yosemite",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "low-cost",
        rigor: "active",
        tastes: "foodie",
        interests: "nature",
        climate: "mild",
        companions: "pair",
        lodging: "camping"
    }, {
        name: "Yosemite",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "low-cost",
        rigor: "active",
        tastes: "beer",
        interests: "nature",
        climate: "mild",
        companions: "solo",
        lodging: "camping"
    }, {
        name: "Yosemite",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "low-cost",
        rigor: "active",
        tastes: "beer",
        interests: "nature",
        climate: "mild",
        companions: "group",
        lodging: "camping"
    }, {
        name: "Las Vegas",
        distance: "domestic",
        remoteness: "urban",
        landscape: "desert",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "foodie",
        interests: "museums",
        climate: "hot",
        companions: "group",
        lodging: "hotel"
    }, {
        name: "Orlando",
        distance: "domestic",
        remoteness: "urban",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "foodie",
        interests: "nature",
        climate: "hot",
        companions: "group",
        lodging: "hotel"
    }, {
        name: "Washington, DC",
        distance: "domestic",
        remoteness: "urban",
        landscape: "",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "wine",
        interests: "museums",
        climate: "warm",
        companions: "group",
        lodging: "rental"
    }, {
        name: "Sedona",
        distance: "domestic",
        remoteness: "rural",
        landscape: "desert",
        price: "medium-cost",
        rigor: "active",
        tastes: "beer",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "camping"
    }, {
        name: "Myrtle Beach",
        distance: "domestic",
        remoteness: "rural",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "nature",
        climate: "warm",
        companions: "group",
        lodging: "rental"
    },
    {
   name: "Bora Bora",
   distance: "international",
   remoteness: "rural",
   landscape: "beach",
   price: "high-cost",
   rigor: "leisure",
   tastes: "beer",
   interests: "nature",
   climate: "hot",
   companions: "pair",
   lodging: "hotel"
},

{
   name: "Rio de Janeiro",
   distance: "international",
   remoteness: "urban",
   landscape: "beach",
   price: "high-cost",
   rigor: "active",
   tastes: "wine",
   interests: "culture",
   climate: "hot",
   companions: "group",
   lodging: "hostel"
},

{
   name: "Yellowstone",
   distance: "domestic",
   remoteness: "rural",
   landscape: "mountains",
   price: "low-cost",
   rigor: "active",
   tastes: "beer",
   interests: "nature",
   climate: "warm",
   companions: "group",
   lodging: "camping"
}




];



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



var selections = function() {
    newobj = {};
    document.addEventListener("click", function(e) {
        if (e.target.id == "domestic" || e.target.id == "international") {
            newobj.distance = e.target.id

        } else if (e.target.id == "urban" || e.target.id == "rural") {
            newobj.remoteness = e.target.id
        } else if (e.target.id == "desert" || e.target.id == "beach" || e.target.id == "mountains" || e.target.id == "lake") {
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

var dim = function(){
	var y = $('body').scrollTop();
	if(y < 100){
		$('#question1').addClass('open');
	}
};

dim();


















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
        price: "medium",
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
        price: "medium",
        rigor: "active",
        tastes: "foodie",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "camping",
    },
];

var selections = function(){
	console.log("hello");
	newobj = {};
	document.addEventListener("click", function(e){
		newobj.distance = e.target.id
		console.log(newobj);
	});
    

}

selections();



console.log("hi");












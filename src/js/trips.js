var trips = [{
        number: 1,
        name: "New York City",
        distance: "domestic",
        remoteness: "urban",
        landscape: "restaurants",
        rigor: "leisure",
        tastes: "foodie",
        companions: "pair",
        lodging: "hotel"
    }, {
        number: 2,
        name: "Zion",
        distance: "domestic",
        remoteness: "rural",
        landscape: "desert",
        rigor: "active",
        tastes: "foodie",
        companions: "pair",
        lodging: "camping"
    },{
        number: 3,
        name: "Zion - mountains",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        rigor: "active",
        tastes: "foodie",
        companions: "pair",
        lodging: "camping"
    }, {
        number: 4,
        name: "Costa Rica - beach",
        distance: "international",
        remoteness: "rural",
        landscape: "beach",
        rigor: "leisure",
        tastes: "foodie",
        companions: "pair",
        lodging: "rental"
    }, 
    {
        number: 5,
        name: "Costa Rica - rainforest",
        distance: "international",
        remoteness: "rural",
        landscape: "mountains",
        rigor: "active",
        tastes: "foodie",
        companions: "pair",
        lodging: "hotel"
    }, {
        number: 6,
        name: "San Francisco - group",
        distance: "domestic",
        remoteness: "urban",
        landscape: "restaurants",
        rigor: "leisure",
        tastes: "foodie",
        companions: "group",
        lodging: "hotel"
    }, {
        name: "San Francisco - high cost",
        distance: "domestic",
        remoteness: "urban",
        landscape: "historicalsites",
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
        landscape: "music",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    }, {
        name: "San Francisco - wine",
        distance: "domestic",
        remoteness: "urban",
        landscape: "music",
        price: "high-cost",
        rigor: "leisure",
        tastes: "wine",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    }, {
        name: "Napa",
        distance: "domestic",
        remoteness: "urban",
        landscape: "restaurants",
        price: "high-cost",
        rigor: "leisure",
        tastes: "wine",
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
        landscape: "music",
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
        landscape: "restaurants",
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
        landscape: "historicalsites",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "wine",
        interests: "culture",
        climate: "mild",
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
        climate: "mild",
        companions: "group",
        lodging: "rental"
    }, {
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
        landscape: "music",
        price: "high-cost",
        rigor: "active",
        tastes: "wine",
        interests: "culture",
        climate: "hot",
        companions: "group",
        lodging: "hostel"
    }, {
        name: "Yellowstone",
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
    },
    {
        name: "Hawaii - beer",
        distance: "domestic",
        remoteness: "rural",
        landscape: "beach",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "hotel"
    },
    {
        name: "Hawaii - high food",
        distance: "domestic",
        remoteness: "rural",
        landscape: "beach",
        price: "high-cost",
        rigor: "leisure",
        tastes: "foodie",
        interests: "nature",
        climate: "hot",
        companions: "pair",
        lodging: "hotel"
    },
    {
        name: "Hawaii - high beer",
        distance: "domestic",
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
        name: "Chicago - restaurants",
        distance: "domestic",
        remoteness: "urban",
        landscape: "restaurants",
        price: "medium-cost",
        rigor: "active",
        tastes: "foodie",
        interests: "culture",
        climate: "mild",
        companions: "group",
        lodging: "hotel"
    },
    {
        name: "Chicago - museums",
        distance: "domestic",
        remoteness: "urban",
        landscape: "museums",
        price: "medium-cost",
        rigor: "active",
        tastes: "beer",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    },
    {
        name: "Nashville",
        distance: "domestic",
        remoteness: "urban",
        landscape: "music",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    },
    {
        name: "Nashville - food",
        distance: "domestic",
        remoteness: "urban",
        landscape: "music",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "foodie",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    },
    {
        name: "Nashville - group",
        distance: "domestic",
        remoteness: "urban",
        landscape: "music",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "beer",
        interests: "culture",
        climate: "mild",
        companions: "group",
        lodging: "hotel"
    },
    {
        name: "Jackson Hole - camping",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "medium-cost",
        rigor: "active",
        tastes: "beer",
        interests: "nature",
        climate: "mild",
        companions: "group",
        lodging: "camping"
    },
    {
        name: "Jackson Hole - high cost",
        distance: "domestic",
        remoteness: "rural",
        landscape: "mountains",
        price: "high-cost",
        rigor: "active",
        tastes: "foodie",
        interests: "nature",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    },
    {
        name: "Seattle",
        distance: "domestic",
        remoteness: "urban",
        landscape: "restaurants",
        price: "medium-cost",
        rigor: "leisure",
        tastes: "foodie",
        interests: "culture",
        climate: "mild",
        companions: "pair",
        lodging: "hotel"
    }




];
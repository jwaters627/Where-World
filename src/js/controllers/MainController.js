app.controller('MainController', ['$scope', function($scope) {

  $scope.trips =[ 
  	{
      number: 0,
      name: 'New York City',
      description: 'New York City has everything you could possibly want and if you have never been you should take in all that you can.  Go to Times Square, see the statue of liberty, go to the empire state building.  Check out the West Village to find the restaurants you crave.    ',
      duration:  'You could spend an endless amount of time exploring all the New York City has to offer, but you should plan to spend three nights to get a feel for what the city has to offer ',
      image: 'dist/img/nyc.jpg'
    },
    {
      number: 1,
    	name: 'Zion',
    	description: 'Zion is a nature lovers paradise.  It has an endless number of hikes and the views are breath taking.  The two hikes to not miss are Angels Landing and the narrows.  Angels Landing as a moderately strenuous hike and you should plan to do it in the morning before it gets too hot and then use the afternoon to take in the less strenuous hikes like the walk to emerald pools.  The narrows is a unique walk and you can go as far as you like.',
    	duration: 'You could spend as much time as you want in Zion, but you should plan to spend at least 3 days to take in the main sites and hikes. ',
      image: 'dist/img/narrows.jpg'
    },
    {
      number: 2,
      name: 'Zion',
      description: 'Zion is a nature lovers paradise.  It has an endless number of hikes and the views are breath taking.  The two hikes to not miss are Angels Landing and the narrows.  Angels Landing as a moderately strenuous hike and you should plan to do it in the morning before it gets too hot and then use the afternoon to take in the less strenuous hikes like the walk to emerald pools.  The narrows is a unique walk and you can go as far as you like.',
      duration: 'You could spend as much time as you want in Zion, but you should plan to spend at least 3 days to take in the main sites and hikes. ',
      image: 'dist/img/zion.jpg'
    },
     {
      number: 3,
      name: 'Costa Rica',
      description: 'Costa Rica has a variety of different climates and landscapes, but its beaches are absolutely breath taking.  The country is small enough to travel to many beaches, but the ones to hit are the beach in Puerto Viejo and the beach in Manuel Antonio national park.  Take a surf lesson or just relax in the sun and enjoy the chicken and rice with a blended fruit water.',
      duration: 'You should give yourself at least a week in Costa Rica to see the different sites and beaches.',
      image: 'dist/img/manuelAntonio.jpg'
    },
     {
      number: 4,
      name: 'Costa Rica',
      description: 'Costa Rica has a variety of different climates and landscapes, but the rainforests are spectacular.  The ride up to Monteverde is quite windy as there is no main road, but once you arrive it is well worth it.  Bring your rain coat as you are in a rain forest, but the sweeping views that allow you to see all the way to water on a clear day are breath taking and you will almost certainly see amazing rainbows.  Get into the rain forest and enjoy a canopy tour by zipline as you zip from tree to tree and across a massive gorge.  Next travel to Arenal and relax in the thermal baths as you stay at the foot of an active volcano.  If you are lucky you will see an eruption!',
      duration: 'You should give yourself at least a week in Costa Rica to enjoy the rain forest and get to Arenal.',
      image: 'dist/img/monteverde.jpg'
    },
     {
      number: 5,
      name: 'San Francisco',
      description: 'San Francisco has many different restaurants and sites that vary greatly depending on the neighborhood you are in.  Make sure to get some mexican food in the mission, explore haight ashbury and get some ice cream at ben and jerrys, have a stein and great german food at Leopolds on Polk St., sample food down by the water at the ferry building.  It is definitely worth renting some bikes to cross the golden gate and get the view from the marin headlands',
      duration: 'You should give yourself at least 3 days to take in San Francisco.',
      image: 'dist/img/sf.jpg'
    },
    {
      number: 6,
      name: 'San Francisco',
      description: 'San Francisco has an unlimited number of things to do and see, but make sure to rent a car and drive over the Golden Gate Bridge and stop at the Marin headlands to take in the view of the bridge and the city.  Continue on to Napa and Sonoma to go wine tasting in beautiful wine country.  The difference in landscape between the city and coast and wine country is so drastic you will think you are in a different state.',
      duration: 'You should give yourself at least 3 days to take in San Francisco and wine country.',
      image: 'dist/img/sf.jpg'
    },
    {
      number: 7,
      name: 'San Francisco',
      description: 'San Francisco has an unlimited number of things to do and see, but make sure to rent a car and drive over the Golden Gate Bridge and stop at the Marin headlands to take in the view of the bridge and the city.  A quick 45 minute drive will have you in Petaluma where Lagunitas is located. Spend the afternoon sitting in the sun and enjoying great beer and music.  Back in San Francisco make sure to take a tour of Anchor Steam and a hidden gem is Woods Station on Polk St. that has a variety of unique beers from a small brewery in the mission.',
      duration: 'You should give yourself at least 3 days to take in San Francisco.',
      image: 'dist/img/sf.jpg'
    },
    {
      number: 8,
      name: 'San Francisco',
      description: 'San Francisco has an unlimited number of things to do and see, but make sure to rent a car and drive over the Golden Gate Bridge and stop at the Marin headlands to take in the view of the bridge and the city.  Continue on to Napa and Sonoma to go wine tasting in beautiful wine country.  The difference in landscape between the city and coast and wine country is so drastic you will think you are in a different state.',
      duration: 'You should give yourself at least 3 days to take in San Francisco and wine country.',
      image: 'dist/img/sf.jpg'
    },
    {
      number: 9,
      name: 'Napa/Sonoma',
      description: 'One of the worlds best wine regions sits in northern California.  Fly into San Francisco and rent a car to head up over the Golden Gate Bridge and into wine country.  There are too many amazing vineyards to visit all of them, so pick out a few and ask your hotel concierge for tips and visit as many as you can.',
      duration: 'You should give yourself at least 3 days to take in Napa and Sonoma. There are many boutique hotels to stay in and visit out from there.',
      image: 'dist/img/napa.jpg'
    },
    {
      number: 10,
      name: 'Big Sur',
      description: 'Big Sur has some of the most amazing coast lines in the world.  Drive down route one and explore pebble beach and seventeen mile drive.  Carmel is a cute town to spend some time and grab a meal on your way to your camp site.  Mcway falls is a breath taking site that should not be missed.  Find your way to a camp ground and set up to make a fire and take in the sunset.',
      duration: 'Spend 4 or 5 days camping out in Big Sur and exploring the California Coast.',
      image: 'dist/img/bigsur.jpg'
    },
    {
      number: 11,
      name: 'Big Sur',
      description: 'Big Sur has some of the most amazing coast lines in the world.  Drive down route one and explore pebble beach and seventeen mile drive.  Carmel is a cute town to spend some time and grab a meal on your way to your camp site.  Mcway falls is a breath taking site that should not be missed.  Find your way to a camp ground and set up to make a fire and take in the sunset.',
      duration: 'Spend 4 or 5 days camping out in Big Sur and exploring the California Coast.',
      image: 'dist/img/bigsur.jpg'
    },
    {
      number: 12,
      name: 'Big Sur',
      description: 'Big Sur has some of the most amazing coast lines in the world.  Drive down route one and explore pebble beach and seventeen mile drive.  Carmel is a cute town to spend some time and grab a meal on your way to your camp site.  Mcway falls is a breath taking site that should not be missed.  Find your way to a camp ground and set up to make a fire and take in the sunset.',
      duration: 'Spend 4 or 5 days camping out in Big Sur and exploring the California Coast.',
      image: 'dist/img/bigsur.jpg'
    },
    {
      number: 13,
      name: 'Panama',
      description: 'Fly into Panama city and see what the city is all about.  Before you go to the canal take some time to explore the old city and you can see a line a ships waiting to go through the canal.  Next make your way to the canal before catching a quick flight to Bocas del Toro.  Once in Bocas Del Toro you will have access to a number of islands with amazing beaches that are just a short boat ride away.',
      duration: 'Give yourself at least 5 days to see the canal and relax on the beaches in Bocas del Toro.',
      image: 'dist/img/panama.jpg'
    },
    {
      number: 14,
      name: 'Panama',
      description: 'Fly into Panama city and see what the city is all about.  Before you go to the canal take some time to explore the old city and you can see a line a ships waiting to go through the canal.  Next make your way to the canal before catching a quick flight to Bocas del Toro.  Once in Bocas Del Toro you will have access to a number of islands with amazing beaches that are just a short boat ride away.',
      duration: 'Give yourself at least 5 days to see the canal and relax on the beaches in Bocas del Toro.',
      image: 'dist/img/panama.jpg'
    },
    {
      number: 15,
      name: 'Panama',
      description: 'Fly into Panama city and see what the city is all about.  Before you go to the canal take some time to explore the old city and you can see a line a ships waiting to go through the canal.  Next make your way to the canal before catching a quick flight to Bocas del Toro.  Once in Bocas Del Toro you will have access to a number of islands with amazing beaches that are just a short boat ride away.',
      duration: 'Give yourself at least 5 days to see the canal and relax on the beaches in Bocas del Toro.',
      image: 'dist/img/panama.jpg'
    },
    {
      number: 16,
      name: 'Yosemite',
      description: 'Yosemite has some of the best hiking, camping and rock climbing in the US. Drive into the park and make your way to the village deep within the park to get yourself settled and your tent set for the night. You can get all the information you need to plan out each hike you plan to do.  Take in the sweeping views and breath taking waterfalls as the winter snow melts. Make sure to get yourself to a vista to view El Capitan before you end your visit.',
      duration: 'The park has more land to explore than you will have time for, but you should spend a minimum of 3 nights in the park to explore enough to get a feel for the area',
      image: 'dist/img/yosemite.jpg'
    },
    {
      number: 17,
      name: 'Yosemite',
      description: 'Yosemite has some of the best hiking, camping and rock climbing in the US. Drive into the park and make your way to the village deep within the park to get yourself settled and your tent set for the night. You can get all the information you need to plan out each hike you plan to do.  Take in the sweeping views and breath taking waterfalls as the winter snow melts. Make sure to get yourself to a vista to view El Capitan before you end your visit.',
      duration: 'The park has more land to explore than you will have time for, but you should spend a minimum of 3 nights in the park to explore enough to get a feel for the area',
      image: 'dist/img/yosemite.jpg'
    },
    {
      number: 18,
      name: 'Yosemite',
      description: 'Yosemite has some of the best hiking, camping and rock climbing in the US. Drive into the park and make your way to the village deep within the park to get yourself settled and your tent set for the night. You can get all the information you need to plan out each hike you plan to do.  Take in the sweeping views and breath taking waterfalls as the winter snow melts. Make sure to get yourself to a vista to view El Capitan before you end your visit.',
      duration: 'The park has more land to explore than you will have time for, but you should spend a minimum of 3 nights in the park to explore enough to get a feel for the area',
      image: 'dist/img/yosemite.jpg'
    },
    {
      number: 19,
      name: 'Yosemite',
      description: 'Yosemite has some of the best hiking, camping and rock climbing in the US. Drive into the park and make your way to the village deep within the park to get yourself settled and your tent set for the night. You can get all the information you need to plan out each hike you plan to do.  Take in the sweeping views and breath taking waterfalls as the winter snow melts. Make sure to get yourself to a vista to view El Capitan before you end your visit.',
      duration: 'The park has more land to explore than you will have time for, but you should spend a minimum of 3 nights in the park to explore enough to get a feel for the area',
      image: 'dist/img/yosemite.jpg'
    },
    {
      number: 20,
      name: 'Las Vegas',
      description: 'What needs to be said about Las Vegas?  Get checked into your hotel and be ready for the whirl wind that will ensue.  Make your way to the casinos to try your hand at your game of choice before heading back to your room to get ready for whatever musical act is playing and to be out until the early morning hours.',
      duration: 'Two nights in Las Vegas should be more than enough to get the experience and get out alive.',
      image: 'dist/img/vegas.jpg'
    },
     {
      number: 21,
      name: 'Las Vegas',
      description: 'What needs to be said about Las Vegas?  Get checked into your hotel and be ready for the whirl wind that will ensue.  Make your way to the casinos to try your hand at your game of choice before heading back to your room to get ready for whatever musical act is playing and to be out until the early morning hours.',
      duration: 'Two nights in Las Vegas should be more than enough to get the experience and get out alive.',
      image: 'dist/img/vegas.jpg'
    },
     {
      number: 22,
      name: 'Las Vegas',
      description: 'What needs to be said about Las Vegas?  Get checked into your hotel and be ready for the whirl wind that will ensue.  Make your way to the casinos to try your hand at your game of choice before heading back to your room to get ready for whatever musical act is playing and to be out until the early morning hours.',
      duration: 'Two nights in Las Vegas should be more than enough to get the experience and get out alive.',
      image: 'dist/img/vegas.jpg'
    },
     {
      number: 23,
      name: 'Orlando',
      description: 'Orlando has stuff',
      duration: 'Spend at least 2 nights in Orlando.',
      image: 'dist/img/vegas.jpg'
    },
     {
      number: 24,
      name: 'Washington DC',
      description: 'Visit Washington DC for its history. You will want to spend your days exploring the museums and monuments. No trip to DC would be complete without going to the White House, Lincoln Memorial, Capital Building, and Washington Monument.  You will not want to miss out on the opportunities to explore the museums around the area either.',
      duration: 'There is a lot to take in, but it is all located nearby, so you could see most of what you want in just two days, but plan on spending more to get a more complete experience.',
      image: 'dist/img/dc.jpg'
    },
    {
      number: 25,
      name: 'Washington DC',
      description: 'Visit Washington DC for its history. You will want to spend your days exploring the museums and monuments. No trip to DC would be complete without going to the White House, Lincoln Memorial, Capital Building, and Washington Monument.  You will not want to miss out on the opportunities to explore the museums around the area either.',
      duration: 'There is a lot to take in, but it is all located nearby, so you could see most of what you want in just two days, but plan on spending more to get a more complete experience.',
      image: 'dist/img/dc.jpg'
    },
    {
      number: 26,
      name: 'Washington DC',
      description: 'Visit Washington DC for its history. You will want to spend your days exploring the museums and monuments. No trip to DC would be complete without going to the White House, Lincoln Memorial, Capital Building, and Washington Monument.  You will not want to miss out on the opportunities to explore the museums around the area either.',
      duration: 'There is a lot to take in, but it is all located nearby, so you could see most of what you want in just two days, but plan on spending more to get a more complete experience.',
      image: 'dist/img/dc.jpg'
    },
    {
      number: 27,
      name: 'Sedona',
      description: 'Sedona is an amazing little town with some of the most amazing landscapes surrounding it. Get yourself checked in and get out to explore the surrounding area. The weather is hot, but not overwhelming, so you should plan to do hikes and explore all the red rocks.  After a long day of exploring get back to your hotel for a dip and then eat at one of the great restaurants in town.',
      duration: 'You should plan at least 3 days in Sedona',
      image: 'dist/img/sedona.jpg'
    },
    {
      number: 28,
      name: 'Sedona',
      description: 'Sedona is an amazing little town with some of the most amazing landscapes surrounding it. Get yourself checked in and get out to explore the surrounding area. The weather is hot, but not overwhelming, so you should plan to do hikes and explore all the red rocks.  After a long day of exploring get back to your hotel for a dip and then eat at one of the great restaurants in town.',
      duration: 'You should plan at least 3 days in Sedona',
      image: 'dist/img/sedona.jpg'
    },
    {
      number: 29,
      name: 'Sedona',
      description: 'Sedona is an amazing little town with some of the most amazing landscapes surrounding it. Get yourself checked in and get out to explore the surrounding area. The weather is hot, but not overwhelming, so you should plan to do hikes and explore all the red rocks.  After a long day of exploring get back to your hotel for a dip and then eat at one of the great restaurants in town.',
      duration: 'You should plan at least 3 days in Sedona',
      image: 'dist/img/sedona.jpg'
    },
    {
      number: 30,
      name: 'South Africa - Safari',
      description: 'South Africa has many amazing sites, but seeing that African wildlife is at the top of the list.  Kruger National Park is an expansive area that is worth the long journey to see.  Get yourself settled and then get out to see the wildlife.  Hiring a guide is worth the cost as they have a pulse on where the animals are and it gives you the best chance to see the big five.  You can drive the park on your own and hope to encounter all the animals you want to see.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/safari.jpg'
    },
    {
      number: 31,
      name: 'South Africa - Safari',
      description: 'South Africa has many amazing sites, but seeing that African wildlife is at the top of the list.  Kruger National Park is an expansive area that is worth the long journey to see.  Get yourself settled and then get out to see the wildlife.  Hiring a guide is worth the cost as they have a pulse on where the animals are and it gives you the best chance to see the big five.  You can drive the park on your own and hope to encounter all the animals you want to see.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/safari.jpg'
    },
    {
      number: 32,
      name: 'South Africa - Safari',
      description: 'South Africa has many amazing sites, but seeing that African wildlife is at the top of the list.  Kruger National Park is an expansive area that is worth the long journey to see.  Get yourself settled and then get out to see the wildlife.  Hiring a guide is worth the cost as they have a pulse on where the animals are and it gives you the best chance to see the big five.  You can drive the park on your own and hope to encounter all the animals you want to see.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/safari.jpg'
    },
    {
      number: 33,
      name: 'South Africa - Cape Town',
      description: 'Cape Town has many unique sites and places to see, so get settled into your hotel and set out to explore.  Sites that should not be missed are Robben Island, Table Mountain, the penguins, and the beaches.  If you have more time then it is worth renting a car and driving out to Stellenbosch to try some South African wine.  Feeling even more adventurous?  Drive to Gansbai and go cage diving with great white sharks.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/capetown.jpg'
    },
    {
      number: 34,
      name: 'South Africa - Cape Town',
      description: 'Cape Town has many unique sites and places to see, so get settled into your hotel and set out to explore.  Sites that should not be missed are Robben Island, Table Mountain, the penguins, and the beaches.  If you have more time then it is worth renting a car and driving out to Stellenbosch to try some South African wine.  Feeling even more adventurous?  Drive to Gansbai and go cage diving with great white sharks.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/capetown.jpg'
    },
    {
      number: 35,
      name: 'South Africa - Cape Town',
      description: 'Cape Town has many unique sites and places to see, so get settled into your hotel and set out to explore.  Sites that should not be missed are Robben Island, Table Mountain, the penguins, and the beaches.  If you have more time then it is worth renting a car and driving out to Stellenbosch to try some South African wine.  Feeling even more adventurous?  Drive to Gansbai and go cage diving with great white sharks.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/capetown.jpg'
    },
    {
      number: 36,
      name: 'South Africa - Cape Town',
      description: 'Cape Town has many unique sites and places to see, so get settled into your hotel and set out to explore.  Sites that should not be missed are Robben Island, Table Mountain, the penguins, and the beaches.  If you have more time then it is worth renting a car and driving out to Stellenbosch to try some South African wine.  Feeling even more adventurous?  Drive to Gansbai and go cage diving with great white sharks.',
      duration: 'You should plan at least a week long trip to make the journey worth it.',
      image: 'dist/img/capetown.jpg'
    },
    {
      number: 37,
      name: 'Barcelona',
      description: 'Get settled in and then get ready to head out and take in all that Barcelona has to offer.  Walk to las Ramblas and see the hustle and bustle of this amazing spanish city.  See all of Gaudis work as you walk through parque Guell, see Casa Batllo, and of course the Sagrada Familia, which towers above everything in the middle of the city.  Make sure to have some tapas and wine before eating a late dinner and hitting the town.  If you have time it is worth renting a car and making the drive up the Costa Brava to see the amazing coast line and unique towns.' ,
      duration: 'Barcelona has many smaller towns nearby, so you could spend a lot of time exploring, but make sure to have a minimum of three days to take in the main site within the city',
      image: 'dist/img/barcelona.jpg'
    },
    {
      number: 38,
      name: 'Barcelona',
      description: 'Get settled in and then get ready to head out and take in all that Barcelona has to offer.  Walk to las Ramblas and see the hustle and bustle of this amazing spanish city.  See all of Gaudis work as you walk through parque Guell, see Casa Batllo, and of course the Sagrada Familia, which towers above everything in the middle of the city.  Make sure to have some tapas and wine before eating a late dinner and hitting the town.  If you have time it is worth renting a car and making the drive up the Costa Brava to see the amazing coast line and unique towns.' ,
      duration: 'Barcelona has many smaller towns nearby, so you could spend a lot of time exploring, but make sure to have a minimum of three days to take in the main site within the city',
      image: 'dist/img/barcelona.jpg'
    },
    {
      number: 39,
      name: 'Barcelona',
      description: 'Get settled in and then get ready to head out and take in all that Barcelona has to offer.  Walk to las Ramblas and see the hustle and bustle of this amazing spanish city.  See all of Gaudis work as you walk through parque Guell, see Casa Batllo, and of course the Sagrada Familia, which towers above everything in the middle of the city.  Make sure to have some tapas and wine before eating a late dinner and hitting the town.  If you have time it is worth renting a car and making the drive up the Costa Brava to see the amazing coast line and unique towns.' ,
      duration: 'Barcelona has many smaller towns nearby, so you could spend a lot of time exploring, but make sure to have a minimum of three days to take in the main site within the city',
      image: 'dist/img/barcelona.jpg'
    },
    {
      number: 40,
      name: 'Barcelona',
      description: 'Get settled in and then get ready to head out and take in all that Barcelona has to offer.  Walk to las Ramblas and see the hustle and bustle of this amazing spanish city.  See all of Gaudis work as you walk through parque Guell, see Casa Batllo, and of course the Sagrada Familia, which towers above everything in the middle of the city.  Make sure to have some tapas and wine before eating a late dinner and hitting the town.  If you have time it is worth renting a car and making the drive up the Costa Brava to see the amazing coast line and unique towns.' ,
      duration: 'Barcelona has many smaller towns nearby, so you could spend a lot of time exploring, but make sure to have a minimum of three days to take in the main site within the city',
      image: 'dist/img/barcelona.jpg'
    },
    {
      number: 41,
      name: 'Barcelona',
      description: 'Get settled in and then get ready to head out and take in all that Barcelona has to offer.  Walk to las Ramblas and see the hustle and bustle of this amazing spanish city.  See all of Gaudis work as you walk through parque Guell, see Casa Batllo, and of course the Sagrada Familia, which towers above everything in the middle of the city.  Make sure to have some tapas and wine before eating a late dinner and hitting the town.  If you have time it is worth renting a car and making the drive up the Costa Brava to see the amazing coast line and unique towns.' ,
      duration: 'Barcelona has many smaller towns nearby, so you could spend a lot of time exploring, but make sure to have a minimum of three days to take in the main site within the city',
      image: 'dist/img/barcelona.jpg'
    },
    {
      number: 42,
      name: 'Barcelona',
      description: 'Get settled in and then get ready to head out and take in all that Barcelona has to offer.  Walk to las Ramblas and see the hustle and bustle of this amazing spanish city.  See all of Gaudis work as you walk through parque Guell, see Casa Batllo, and of course the Sagrada Familia, which towers above everything in the middle of the city.  Make sure to have some tapas and wine before eating a late dinner and hitting the town.  If you have time it is worth renting a car and making the drive up the Costa Brava to see the amazing coast line and unique towns.' ,
      duration: 'Barcelona has many smaller towns nearby, so you could spend a lot of time exploring, but make sure to have a minimum of three days to take in the main site within the city',
      image: 'dist/img/barcelona.jpg'
    },
]

used = localStorage.userinfo.split(',').map(Number);

	$scope.shown = [];

for(i=0; i < used.length; i++){
	$scope.shown.push($scope.trips[used[i]]);

};
	




  }]);


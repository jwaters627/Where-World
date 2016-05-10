app.controller('MainController', ['$scope', function($scope) {

  $scope.trips =[ 
  	{
      number: 1,
      name: 'New York City',
      description: 'New York City has everything you could possibly want and if you have never been you should take in all that you can.  Go to Times Square, see the statue of liberty, go to the empire state building.  Check out the West Village to find the restaurants you crave.    ',
      duration:  'You could spend an endless amount of time exploring all the New York City has to offer, but you should plan to spend three nights to get a feel for what the city has to offer ',
      image: 'dist/img/nyc.jpg'
    },
    {
      number: 2,
    	name: 'Zion',
    	description: 'Zion is a nature lovers paradise.  It has an endless number of hikes and the views are breath taking.  The two hikes to not miss are Angels Landing and the narrows.  Angels Landing as a moderately strenuous hike and you should plan to do it in the morning before it gets too hot and then use the afternoon to take in the less strenuous hikes like the walk to emerald pools.  The narrows is a unique walk and you can go as far as you like.',
    	duration: 'You could spend as much time as you want in Zion, but you should plan to spend at least 3 days to take in the main sites and hikes. ',
      image: 'dist/img/narrows.jpg'
    },
    {
      number: 3,
      name: 'Zion',
      description: 'Zion is a nature lovers paradise.  It has an endless number of hikes and the views are breath taking.  The two hikes to not miss are Angels Landing and the narrows.  Angels Landing as a moderately strenuous hike and you should plan to do it in the morning before it gets too hot and then use the afternoon to take in the less strenuous hikes like the walk to emerald pools.  The narrows is a unique walk and you can go as far as you like.',
      duration: 'You could spend as much time as you want in Zion, but you should plan to spend at least 3 days to take in the main sites and hikes. ',
      image: 'dist/img/zion.jpg'
    },
     {
      number: 4,
      name: 'Costa Rica',
      description: 'Costa Rica has a variety of different climates and landscapes, but its beaches are absolutely breath taking.  The country is small enough to travel to many beaches, but the ones to hit are the beach in Puerto Viejo and the beach in Manuel Antonio national park.  Take a surf lesson or just relax in the sun and enjoy the chicken and rice with a blended fruit water.',
      duration: 'You should give yourself at least a week in Costa Rica to see the different sites and beaches.',
      image: 'dist/img/manuelAntonio.jpg'
    },
     {
      number: 5,
      name: 'Costa Rica',
      description: 'Costa Rica has a variety of different climates and landscapes, but the rainforests are spectacular.  The ride up to Monteverde is quite windy as there is no main road, but once you arrive it is well worth it.  Bring your rain coat as you are in a rain forest, but the sweeping views that allow you to see all the way to water on a clear day are breath taking and you will almost certainly see amazing rainbows.  Get into the rain forest and enjoy a canopy tour by zipline as you zip from tree to tree and across a massive gorge.  Next travel to Arenal and relax in the thermal baths as you stay at the foot of an active volcano.  If you are lucky you will see an eruption!',
      duration: 'You should give yourself at least a week in Costa Rica to enjoy the rain forest and get to Arenal.',
      image: 'dist/img/monteverde.jpg'
    },
     
]

used = localStorage.userinfo;

	$scope.shown = [];

for(i=0; i < used.length; i++){
	$scope.shown.push($scope.trips[used[i]]);

};
	




  }]);


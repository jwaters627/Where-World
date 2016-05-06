app.controller('MainController', ['$scope', function($scope) {

  $scope.trips =[ 
  	{
      name: 'Yosemite',
      description: 'Grab your tent and hiking boots and spend a few days hiking in Yosemite.  Take in the breath taking views of the waterfalls from the melting snow fall and the grand image of El Capitan in the background.',
      duration:  'You should plan to spend four nights in the park exploring the different trails and hikes that yosemite has to offer.  There are many different camping sites, but we recommend that you stay down in the village and venture off on day trips.'
    },
    {
    	name: 'San Francisco',
    	description: 'Check out the Golden Gate Bridge, Alcatraz, etc',
    	duration: 'You could spend as much time as you want in SF, but you should plan to spend at least 3 days to take in the main attractions.'
    }
]
  
  }]);
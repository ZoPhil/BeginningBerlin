mapboxgl.accessToken = 'pk.eyJ1Ijoiam1lemF2aW4iLCJhIjoiY2s0MDFlcnBzMGExMDNvcXVkOXFrbjMxeCJ9.KX-GKsIddBcB_2Kf4KxeiA';
var map = new mapboxgl.Map({
	container: 'map',
	zoom: 3,
	style: 'mapbox://styles/jmezavin/ck4063g7e121s1cprqardiu2j'
	});

var marker = new mapboxgl.Marker();
marker.setLngLat([12.07, 52.72]);
marker.addTo(map);

map.on('click',function(e){
	console.log("the longitude of where the user's clicking is at " + e.lngLat.lng);
	console.log("the latitude of where the user's clicking is at " + e.lngLat.lat);
	console.log(e);
});
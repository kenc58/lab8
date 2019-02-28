function initMap() {
	// add your code here

	L.mapquest.key = elqQOcyk7ldp8xvMCdxklyWmC8vEXtY3;

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.titleLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}
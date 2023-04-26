"use strict";

// de leaflet library is reeds geimporteerd, en beschikbaar als "L"
// dit via de script en css tag in de index.html, en de "map" div die werd toegevoegd.

const app = {
	map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
	init() {
		var map = L.map("map").setView([50.8453167, 4.357572], 10);
		// initialise de kaart
		// voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
		// vergeet openstreetmap attributie niet
		// gebruik de functie "loadMarkers" om de markers toe te voegen
		var marker = L.marker([50.8422095, 4.3228863]).addTo(map);
		marker.bindPopup("<b>Erasmushogeschool campus Kaai</b><br>Study options: MCT, IT, musical").openPopup();
	},
	loadMarkers() {
		// fetch de data van opendata.brussels.be
		// als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
	},
	addMarker(lat, lon) {
		// voeg een marker toe op lat, lon
		var marker = L.marker([lat, lon]).addTo(map);
	},
};

app.init();

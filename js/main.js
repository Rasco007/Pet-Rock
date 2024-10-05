// position we will use later
var lat = -41.14073876778738;
var lon = -71.29670260748775;
// initialize map
map = L.map('map').setView([lat, lon], 13);
// set map tiles source
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);
// add marker to the map
marker = L.marker([lat, lon]).addTo(map);
// add popup to the marker
marker.bindPopup("<b>Pet Rock</b><br />Av. Elordi 773<br />Bariloche").openPopup();

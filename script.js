let map =L.map('map').setView([-1.2802, 36.8346],10); // to innitialize the map on our page

//add a tile laye openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
    ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom:18
}).addTo(map)

//create a marker on Nairobi
let marker= L.marker([-1.2802, 36.8346]).addTo(map);

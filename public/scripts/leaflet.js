// const {Destination} = require("../../models")
let mymap = L.map('mapid').setView([-5.5617312,115.0894244,6.5], 4);

// let dests = []
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoidnlvbml6ciIsImEiOiJjanRwbTlhczkwNjVoM3lvM2Y3cDRwMWtxIn0.Hdtt_1JugiGBsGDbx7nOLA'
}).addTo(mymap);
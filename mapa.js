// Beograd: 44.787197, 20.457273
// Srbija: 44.2108, 20.9224
const coords = {
    lat: 44.2108,
    lon: 20.9224
}

const zoom = 7;
const mymap = L.map('SrbijaMapa').setView([coords.lat, coords.lon], zoom);

const attribution =
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

const marker = L.marker([coords.lat, coords.lon]).addTo(mymap);
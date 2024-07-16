// Initialize the map and set its view
const map = L.map('map').setView([37.7749, -122.4194], 5);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// URL to fetch earthquake data from USGS
const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Fetch the earthquake data using D3
d3.json(earthquakeUrl).then(data => {
    console.log('Fetched earthquake data:', data);
    const earthquakes = data.features;
  
    earthquakes.forEach(earthquake => {
      const magnitude = earthquake.properties.mag;
      const depth = earthquake.geometry.coordinates[2];
      const [lng, lat] = earthquake.geometry.coordinates;

    // Determine color based on depth using named colors
    const color = depth > 90 ? 'red' :
                  depth > 70 ? 'orangered' :
                  depth > 50 ? 'orange' :
                  depth > 30 ? 'yellow' :
                  depth > 10 ? 'greenyellow' :
                               'green';

    // Determine size based on magnitude
    const radius = magnitude * 3;

    // Create a circle marker
    const marker = L.circleMarker([lat, lng], {
        color: '#000',
        weight: 1,
        fillColor: color,
        fillOpacity: 0.7,
        radius: radius
        }).addTo(map);

      // Add a popup with additional information
      marker.bindPopup(`
        <h3>${earthquake.properties.place}</h3>
        <p>Magnitude: ${magnitude}</p>
        <p>Depth: ${depth} km</p>
        <p>Time: ${new Date(earthquake.properties.time).toLocaleString()}</p>
      `);
  
    }); 

  }); 

  // Add a legend to the map
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  const depths = [-10, 10, 30, 50, 70, 90];
  const colors = [
    'green',
    'greenyellow',
    'yellow',
    'orange',
    'orangered',
    'red'
  ];

  div.innerHTML += '<strong>Depth (km)</strong><br>';
  for (let i = 0; i < depths.length; i++) {
    div.innerHTML +=
      '<i style="background:' + colors[i] + '"></i> ' +
      depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(map);
# Earthquake Data Visualization

## Overview
This project visualizes earthquake data using the Leaflet.js library. The visualization includes markers that reflect the magnitude and depth of earthquakes, popups with additional information, and a legend to provide context for the depth colors.

## Files
- [index.html](.Leaflet-Part-1/index.html): The main HTML file that sets up the webpage and includes references to necessary CSS and JavaScript files.
- [style.css](.Leaflet-Part-1/static/css/style.css): The CSS file that contains styling for the map and legend.
- [logic.js](.Leaflet-Part-1/static/js/logic.js): The JavaScript file that fetches earthquake data, processes it, and creates the map visualization.

## Features
- **Map Initialization**: Initializes a Leaflet map centered on San Francisco, CA.
- **Tile Layer**: Adds a tile layer from OpenStreetMap.
- **Data Fetching**: Uses D3 to fetch earthquake data from the USGS GeoJSON feed.
- **Markers**: Creates markers for each earthquake, sized by magnitude and colored by depth.
- **Popups**: Each marker includes a popup with information about the earthquake's location, magnitude, depth, and time.
- **Legend**: Adds a legend to the map to explain the color coding for depth.

## Usage
1. Clone the repository or download the files.
2. Ensure you have an internet connection to load external libraries.
3. Open `index.html` in a web browser to view the visualization.

## Resources
- [Leaflet.js Documentation](https://leafletjs.com/reference-1.7.1.html): Official documentation for Leaflet.js.
- [D3.js Documentation](https://d3js.org/): Official documentation for D3.js.
- [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/): Source of the earthquake data.
- [OpenStreetMap](https://www.openstreetmap.org/): Source of the map tiles.
- [Help from ChatGPT by OpenAI](https://www.openai.com/chatgpt): Assistance and code suggestions provided by ChatGPT.

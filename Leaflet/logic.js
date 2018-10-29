

var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
}),
greyscale = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}),
outdoors = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors",
  accessToken: API_KEY
});


// Color hex values
var fZeroColor  = "#B7F34D";
var fOneColor   = "#E1F34C";
var fTwoColor   = "#F3DB4E";
var fThreeColor = "#F3BA4E";
var fFourColor  = "#F0A66B";
var fFiveColor  = "#EF6B6B";

// Get the colors for the legend
function getColor(level) {

  var color;

  if (level == 5) {
    color = fFiveColor;
  } else if (level == 4) {
    color = fFourColor;
  } else if (level == 3) {
    color = fThreeColor;
  } else if (level == 2) {
    color = fTwoColor;
  } else if (level == 1) {
    color = fOneColor;
  } else if (level == 0) {
    color = fZeroColor;
  }

  return color;
}

// Define a markerSize function
function circleSize(scale) {
  if (scale == 0 ) {
    scale = 10000;
  } else {
    scale = scale * 20000;
  }
  return scale;
}


// Create the tornado circle layers
var oneCircle;
var fiftyLayer   = L.layerGroup();
var sixtyLayer   = L.layerGroup();
var seventyLayer = L.layerGroup();
var eightyLayer  = L.layerGroup();
var ninetyLayer  = L.layerGroup();
var aughtsLayer  = L.layerGroup();
var teensLayer   = L.layerGroup();

var decadeLayers    = [fiftyLayer, sixtyLayer, seventyLayer, eightyLayer, ninetyLayer, aughtsLayer, teensLayer];
var decadeDataFiles = ["tornado-data-decades-csv/decade_50.csv",
                      "tornado-data-decades-csv/decade_60.csv",
                      "tornado-data-decades-csv/decade_70.csv",
                      "tornado-data-decades-csv/decade_80.csv",
                      "tornado-data-decades-csv/decade_90.csv",
                      "tornado-data-decades-csv/decade_00.csv",
                      "tornado-data-decades-csv/decade_10.csv"];

// Get the data 50s
d3.csv("tornado-data-decades-csv/decade_50.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(fiftyLayer);
    }
});

// Get the data 60s
d3.csv("tornado-data-decades-csv/decade_60.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(sixtyLayer);
    }
});

// Get the data 70s
d3.csv("tornado-data-decades-csv/decade_70.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(seventyLayer);
    }
});

// Get the data 80s
d3.csv("tornado-data-decades-csv/decade_80.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(eightyLayer);
    }
});

// Get the data 80s
d3.csv("tornado-data-decades-csv/decade_90.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(ninetyLayer);
    }
});


// Get the data 80s
d3.csv("tornado-data-decades-csv/decade_00.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(aughtsLayer);
    }
});

// Get the data 80s
d3.csv("tornado-data-decades-csv/decade_10.csv", function(decadeData) {

  var decadeData;

  // Make the circles
  for (var j = 0; j < decadeData.length; j++) {
    var lat = decadeData[j]["BEGIN_LAT"];
    var lon = decadeData[j]["BEGIN_LON"];
    var scale = decadeData[j]['TOR_F_SCALE'].substr(-1)


    oneCircle = L.circle([lat, lon], {
        color: 'grey',
        fillColor: getColor(scale),
        fillOpacity: 0.95,
        weight: 1,
        radius: circleSize(scale)
      });
  //    }).bindPopup("<h1>Earthquake</h1> <hr> <h3>Magnitude: " + magnitude[i] +  "</h3><h3>Where: " + place[i] + "</h3><h3>When: " + convertTimestamp(dateTime[i]) + "</h3>").addTo(myMap);
      oneCircle.addTo(teensLayer);
    }
});

// Create the map object
var myMap = L.map('map', {
      center: [39.8283, -98.5795],
      zoom: 5,
      layers: [satellite, fiftyLayer]  // Only list one, the rest are an option to turn on
});

var baseMaps = {
    "Satellite": satellite,
    "Greyscale": greyscale,
    "Outdoors": outdoors
};

var overlayMaps = {
    "1950s": fiftyLayer,
    "1960s": sixtyLayer,
    "1970s": seventyLayer,
    "1980s": eightyLayer,
    "1990s": ninetyLayer,
    "2000s": aughtsLayer,
    "2010s": teensLayer    
};

L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// Create legend control
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      scales = [0, 1, 2, 3, 4, 5];

  // loop through our F/EF scales and generate a label with a colored square for each scale
  for (var i = 0; i < scales.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(scales[i]) + '"></i> ' +
          scales[i] + '<br>';
  }

  return div;
}

// Add legend conntrol
legend.addTo(myMap);






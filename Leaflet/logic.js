

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
var fiftyLayer012   = L.layerGroup();
var sixtyLayer012   = L.layerGroup();
var seventyLayer012 = L.layerGroup();
var eightyLayer012  = L.layerGroup();
var ninetyLayer012  = L.layerGroup();
var aughtsLayer012  = L.layerGroup();
var teensLayer012   = L.layerGroup();
var fiftyLayer345   = L.layerGroup();
var sixtyLayer345   = L.layerGroup();
var seventyLayer345 = L.layerGroup();
var eightyLayer345  = L.layerGroup();
var ninetyLayer345  = L.layerGroup();
var aughtsLayer345  = L.layerGroup();
var teensLayer345   = L.layerGroup();

// var decadeDataFiles = ["tornado-data-decades-csv/decade_50.csv",
//                       "tornado-data-decades-csv/decade_60.csv",
//                       "tornado-data-decades-csv/decade_70.csv",
//                       "tornado-data-decades-csv/decade_80.csv",
//                       "tornado-data-decades-csv/decade_90.csv",
//                       "tornado-data-decades-csv/decade_00.csv",
//                       "tornado-data-decades-csv/decade_10.csv"];

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
    // Determine which layer (based on scale)
    if (scale <= 2) {
      oneCircle.addTo(fiftyLayer012);
    } else {
      oneCircle.addTo(fiftyLayer345);    
    }
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
    // Determine which layer (based on scale)
    if (scale <= 2) {
      oneCircle.addTo(sixtyLayer012);
    } else {
      oneCircle.addTo(sixtyLayer345);    
    }
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
    // Determine which layer (based on scale)
    if (scale <= 2) {
      oneCircle.addTo(seventyLayer012);
    } else {
      oneCircle.addTo(seventyLayer345);    
    }
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
    if (scale <= 2) {
      oneCircle.addTo(eightyLayer012);
    } else {
      oneCircle.addTo(eightyLayer345);    
    }
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
    if (scale <= 2) {
      oneCircle.addTo(ninetyLayer012);
    } else {
      oneCircle.addTo(ninetyLayer345);    
    }
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
    if (scale <= 2) {
      oneCircle.addTo(aughtsLayer012);
    } else {
      oneCircle.addTo(aughtsLayer345);    
    }
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
    if (scale <= 2) {
      oneCircle.addTo(teensLayer012);
    } else {
      oneCircle.addTo(teensLayer345);    
    }
  }
});

// Create the map object
var myMap = L.map('map', {
      center: [39.8283, -98.5795],
      zoom: 5,
      layers: [satellite, fiftyLayer012]  // Only list one, the rest are an option to turn on.
});

var baseMaps = {
    "Satellite": satellite,
    "Greyscale": greyscale,
    "Outdoors": outdoors
};

var overlayMaps = {
    "1950s (0-2)": fiftyLayer012,
    "1950s (3-5)": fiftyLayer345,
    "1960s (0-2)": sixtyLayer012,
    "1960s (3-5)": sixtyLayer345,
    "1970s (0-2)": seventyLayer012,
    "1970s (3-5)": seventyLayer345,
    "1980s (0-2)": eightyLayer012,
    "1980s (3-5)": eightyLayer345,
    "1990s (0-2)": ninetyLayer012,
    "1990s (3-5)": ninetyLayer345,
    "2000s (0-2)": aughtsLayer012,
    "2000s (3-5)": aughtsLayer345,
    "2010s (0-2)": teensLayer012,
    "2010s (3-5)": teensLayer345    
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






function initMap() {

// Specify features and elements to define styles.
var styleArray = [
  {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#424242"
            }
        ]
    }
];

// Create a map object and specify the DOM element for display.
// The latitude and longitude to center the map (always required)
var latlng = new google.maps.LatLng(40.7143528, -74.0059731);
var map = new google.maps.Map(document.getElementById("map"), {
  center: latlng, 
  scrollwheel: false,
// Apply the map style array to the map.
// How zoomed in you want the map to start at (always required)
styles: styleArray,
zoom: 10
});
var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: 'John Willims.'
});

}
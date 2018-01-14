export default function initMap() {
  
  window.initMap = function() {
  var novosib = { lat: 55.0415000, lng: 82.9346000 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: novosib,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "all",
        elementType: "geomerty.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            gamma: 0.01
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: -31
          },
          {
            lightness: -33
          },
          {
            weight: 2
          },
          {
            gamma: 0.8
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            saturation: -100
          },
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            lightness: 30
          },
          {
            saturation: 30
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.sroke",
        stylers: [
          {
            hue: "#ff0000"
          }
        ]
      },
      {
        featureType: "landscape.natural.terrain",
        elementType: "geometry",
        stylers: [
          {
            color: "#61dac9"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            saturation: 20
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            lightness: 20
          },
          {
            saturation: -20
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            color: "#f1f1f1"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            lightness: 10
          },
          {
            saturation: -30
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            saturation: 25
          },
          {
            lightness: 25
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            color: "#f1f1f1"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "all",
        stylers: [
          {
            color: "#f1f1f1"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            lightness: -20
          },
          {
            color: "#61dac9"
          }
        ]
      }
    ]
  });
};
}
export default function initMap() {
  
  var novosib = { lat: 55.0415000, lng: 82.9346000 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: novosib,
    mapTypeControl: false,
    disableDefaultUI: true,
    /*styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: "-100"
          },
          {
            lightness: "1"
          },
          {
            gamma: "1.44"
          },
          {
            weight: "2.70"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#86a77a"
          },
          {
            visibility: "on"
          }
        ]
      }
    ]*/
  });
  /*var marker = new google.maps.Marker({
    position: novosib,
    map: map
  });*/

}
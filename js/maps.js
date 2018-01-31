function initMap() {
  // Map options
  var options = {
    zoom:11,
    center:{lat:42.9849, lng:-81.2453}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Add marker
  addMarker({lat:42.9849, lng:-81.2453});

  function addMarker(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map:map
    });
  }
}

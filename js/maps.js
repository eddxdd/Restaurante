function initMap() {
  var options = {
    zoom:11,
    center:{lat:42.9849, lng:-81.2453}
  }

  var map = new google.maps.Map(document.getElementById('map'), options);
}

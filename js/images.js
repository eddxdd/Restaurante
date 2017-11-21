
// attach event handlers with jquery
$(document).ready(function () {
  $("#next").on("click", function (e) {
      next();
  });

  $("#prev").on("click", function (e) {
      prev();
  });

  var images = new Array(
      "../img/display/1.jpg",
      "../img/display/2.jpg",
      "../img/display/3.jpg");

  function getCurrentImageIndex() {
      return images.indexOf(document.getElementById("image").src);
  }

  function next() {
      nextImage = (getCurrentImageIndex() + 1) % images.length;
      document.getElementById("image").src = images[nextImage];
  }

  function prev() {
      nextImage = (getCurrentImageIndex() - 1 + images.length) % images.length;
      document.getElementById("image").src = images[nextImage];
  }
});

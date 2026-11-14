$("#cloud1").toggleClass("hidden");
$("#cloud2").toggleClass("hidden");
let cloudsVisible = false;
$("#CloudButton").click(function() {
if (cloudsVisible === false) {
  $("#cloud1").toggleClass("hidden");
  $("#cloud2").toggleClass("hidden");
  $("#CloudButton").toggleClass("active");
cloudsVisible = true;
} else  {
  $("#cloud1").toggleClass("hidden");
  $("#cloud2").toggleClass("hidden");
  $("#CloudButton").toggleClass("active");
cloudsVisible = false;
}
});
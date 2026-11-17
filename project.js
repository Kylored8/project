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


const tempSlider = document.getElementById("tempSlider");
const mercury = document.getElementById("mercury");
const tempValue = document.getElementById("tempValue");

function updateThermometer() {
  const min = Number(tempSlider.min);
  const max = Number(tempSlider.max);
  const value = Number(tempSlider.value);
  const fillPercent = max > min ? ((value - min) / (max - min)) * 100 : 0;

  mercury.style.width = `${fillPercent}%`;
  tempValue.textContent = value;
  console.log(value)
  if (value < 30) {
$(".ground").addClass("cold");
}
else {$(".ground").removeClass("cold");
}
}

tempSlider.addEventListener("input", updateThermometer);
updateThermometer();
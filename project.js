$("#cloud1").toggleClass("hidden");
$("#cloud2").toggleClass("hidden");
let cloudsVisible = false;
$("#CloudButton").click(function () {
  if (cloudsVisible === false) {
    $("#cloud1").toggleClass("hidden");
    $("#cloud2").toggleClass("hidden");
    $("#CloudButton").toggleClass("active");
    cloudsVisible = true;
  } else {
    $("#cloud1").toggleClass("hidden");
    $("#cloud2").toggleClass("hidden");
    $("#CloudButton").toggleClass("active");
    cloudsVisible = false;
  }
});

$("#rain").toggleClass("hidden");
let rainVisible = false;
$("#HeavyRainButton").click(function () {
  if (rainVisible === false) {
    $("#rain").toggleClass("hidden");
    $("#HeavyRainButton").toggleClass("active");
    rainVisible = true;
  } else {
    $("#rain").toggleClass("hidden");
    $("#HeavyRainButton").toggleClass("active");
    rainVisible = false;
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
  if (80 > value > 30) {
    $(".ground").removeClass("cold");
    $(".ground").removeClass("dried");
  }
  if (80 < value) {
    $(".ground").addClass("dried");
  }
$(".ground").addClass("cold");

}
  if (value > 30) {$(".ground").addClass("temperate");
    $(".ground").removeClass("cold");
}
}

tempSlider.addEventListener("input", updateThermometer);
updateThermometer();
$(document).ready(function(){
  var userLat = 'lat=';
  var userLon = 'lon=';
  var currentTempInCelius = 0;
  var tempUnit = 'C';

  //$('#body').css('background-image', 'url(img/sunny.jpg)');

  // seting latitude and longitude to current position
 if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(function(position){
    userLat += position.coords.latitude;
    userLon += position.coords.longitude;
  
  var api = 'https://fcc-weather-api.glitch.me/api/current?' + userLat + '&' + userLon;
  
  $.getJSON(api, function(json){
    console.log(json);
    currentTempInCelius = json.main.temp;
    $('#temp').text(currentTempInCelius + " " + String.fromCharCode(176));
    $('#tempunit').text(tempUnit);
    $('#city').text(json.name + ",");
    $('#country').text(json.sys.country);

    $('#weather').text(json.weather[0].main);
    var desc = $("#weather").text();
    genIcon(desc);
  });

   });
 }

 $('#tempunit').click(function(){
  var currentTempUnit = $('#tempunit').text();
  var newTempUnit = currentTempUnit == "C" ? "F" : "C";

  if(newTempUnit == 'F'){
    var farTemp = Math.round(parseInt($("#temp").text())* 9/5 + 32);

    $("#temp").text(farTemp + " " + String.fromCharCode(176));
    $("#tempunit").text(newTempUnit);
  } else{
    $("#temp").text(currentTempInCelius + " " + String.fromCharCode(176));
    $("#tempunit").text(newTempUnit);
  }
 });
  
 

 function genIcon(desc){
  var desc = desc.toLowerCase();
  switch (desc) {
    case 'drizzle':
      $('#body').css('background-image','url(img/drizzle.jpg)');
      break;
    case 'clouds':
      $('#body').css('background-image', 'url(img/clouds.jpg)');
      break;
    case 'rain':
      $('#body').css('background-image', 'url(img/rain.jpg)');
      break;
    case 'snow':
      $('#body').css('background-image', 'url(img/snow.jpg)');
      break;
    case 'clear':
      $('#body').css('background-image', 'url(img/clear.jpg)');
      break;
    case 'thunderstom':
      $('#body').css('background-image', 'url(img/thunderstom.jpg)');
      break;
    case 'haze':
      $('#body').css('background-image', 'url(img/hail.jpg)');
      break;
    default:
      $("#body").css('background', 'url(img/windy.jpg)');
  }
 }

 
});


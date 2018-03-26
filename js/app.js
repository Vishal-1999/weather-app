$(document).ready(function(){
  var userLat = 'lat=';
  var userLon = 'lon=';
  var currentTempInCelius = 0;
  var tempUnit = 'C';
  
  // seting latitude and longitude to current position
 if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(function(position){
    userLat += position.coords.latitude;
    userLon += position.coords.longitude;
  
  var api = 'https://fcc-weather-api.glitch.me/api/current?' + userLat + '&' + userLon;
  
  $.getJSON(api, function(json){
    console.log(json);
    currentTempInCelius = json.main.temp;
    $('#temp').text(currentTempInCelius + String.fromCharCode(176));
    $('#tempunit').text(tempUnit);
    $('#city').text(json.name);
    $('#country').text(json.sys.country);
    //$('#weather').html(json.weather[0].name);
    $('#weather').text(json.weather[0].description);
  });
   });
 }
  
});


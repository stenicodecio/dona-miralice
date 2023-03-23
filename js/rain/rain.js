var makeItRain = function() {
  $('.rain').empty();

  var increment = 0;
  var drops = "";

  while (increment < 100) {
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    increment += randoFiver;
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 14 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.9' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.9' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.9' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
}
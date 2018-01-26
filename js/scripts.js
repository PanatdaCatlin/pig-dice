// var Math;





var randomNumber = function() {
  var diceResult = Math.floor(Math.random() * (7-1)+1);
  console.log(diceResult);
  return diceResult;

}

$(document).ready(function() {
  $("#rollButton").click(function(event) {
    event.preventDefault();
    var rand = randomNumber();

    $("#diceResults").append(rand);
    alert(typeof(rand));
  });

  });

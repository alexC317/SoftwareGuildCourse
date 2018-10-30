function rollDice(userInput)
{
  var validRoll = /\d{1,}[d]\d{1,}/.test(userInput);

  if(validRoll)
  {
    var numSides = userInput.match(/\d{1,}$/);
    var numDice = userInput.match(/^\d{1,}/);
    var diceRolls = [];
    var currentRoll ;
    for(var i = 0; i < numDice; i++)
    {
      currentRoll = Math.floor(Math.random()*numSides)+1;
      if(numSides == 20)
      {
        if(currentRoll == 20)
        {alert("Critical roll!");}
        else if (currentRoll == 1)
        {alert("Critical fail!")}
      }
      diceRolls.push(currentRoll);
    }
    return diceRolls;
  }
  else
  {
    alert("Invalid roll.");
    return false;
  }
}

var userInput = prompt("Enter dice roll: (format should be XdY)");
console.log(rollDice(userInput));

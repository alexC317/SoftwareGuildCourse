function playgame()
{
  var startBet = parseInt(document.forms["luckySevens"]["startBet"].value); //Sets the value of startBet to be whatever the user entered

  //Evaluates if startBet is a valid entry
  if (startBet=="" ||isNaN(startBet)||startBet<=0)
  {
    //If it's not, it alerts the user
    alert("This bet is invalid, please input a number greater than 0.");
    return false;
  }

  //Creates 2 randomly generated dice rolls
  var roll1 = rollDice();
  var roll2 = rollDice();
  var rollSum = roll1 + roll2; //Will calculate the sum of the dice rolls

  //Sets the variables that will track parts of the games
  var totalRolls = 0; //Total amount of rolls
  var currentMoney = startBet; //How much is in the game at the moment
  var maxMoney = startBet; //Maximum amount of money the player had
  var maxMoneyRollCount = totalRolls; //What the roll count was when the player had the most money


  //Loops while we still have money
  while(currentMoney>0)
  {
    //Checks if our dice sum is equal to 7, and then makes a decision
    if(rollSum == 7)
    {currentMoney+=4;} //Rewards $4 if it's a 7
    else
    {currentMoney-=1;} //Takes away $1 if it's not

    roll1 = rollDice(); //Rolls the dice again
    roll2 = rollDice(); //Rolls the dice again
    rollSum = roll1 + roll2; //Adds the dice rolls

    totalRolls += 1; //Adds 1 more roll to our loopCounter

    //Checks if the amount of money that we have now is more than our maximum
    if(currentMoney > maxMoney)
    {
      maxMoney = currentMoney; //Updates maxMoney to whatever we have now
      maxMoneyRollCount = totalRolls; //Updates the roll count to whatever it is now
    }
  }

  //Displays the table with the results
  document.getElementById("results").style.display = "block";
  document.getElementById("tStartBet").innerText="$"+startBet+".00";
  document.getElementById("totalRolls").innerText=totalRolls;
  document.getElementById("maxMoney").innerText="$"+maxMoney+".00";
  document.getElementById("maxMoneyRollCount").innerText=maxMoneyRollCount;

  return false;
}

//Generates a random dice roll
function rollDice()
{return Math.floor(Math.random()*6)+1;}

function clearErrors()
{
  for(var loopCounter = 0; loopCounter < document.forms["displayEvens"].elements.length; loopCounter++)
  {
    if(document.forms["displayEvens"].elements[loopCounter].parentElement.className.indexOf("has-")!= -1)
    {document.forms["displayEvens"].elements[loopCounter].parentElement.className = "form-group;"}
  }
}

function validateItems()
{
  clearErrors();
  var startNum = parseInt(document.forms["displayEvens"]["startNumber"].value);
  var endNum = parseInt(document.forms["displayEvens"]["endNumber"].value);
  var stepNum = parseInt(document.forms["displayEvens"]["stepNumber"].value);

  if(startNum == ""||isNaN(startNum))
  {
    alert("The starting number is invalid; it must be a number.");
    document.forms["displayEvens"]["startNumber"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["startNumber"].focus();
    reset();
    return false;
  }

  if(endNum<=startNum||endNum == ""||isNaN(endNum))
  {
    alert("The ending number is invalid; it must be filled in with a number, and it should be greater than the starting number.")
    document.forms["displayEvens"]["endNumber"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["endNumber"].focus();
    reset();
    return false;
  }
  if(stepNum <= 0)
  {
    alert("The step number is invalid; it must be filled in with a number, and it should be greater than zero.")
    document.forms["displayEvens"]["stepNumber"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["stepNumber"].focus();
    reset()
    return false;
  }

  var displayAnswers = getEvens(startNum, endNum, stepNum);
  document.getElementById("results").style.display = "block"
  document.getElementById("results").innerText =
  "Here are the even numbers between " + startNum + " and " + endNum + " by " + stepNum + "s." + "\n";

  for(var i = 0; i<displayAnswers.length; i++)
  {document.getElementById("results").innerText += displayAnswers[i] + "\n";}
  return false;
}

function getEvens(startNum, endNum, stepNum)
{
  var answer = [];
  for(var i=startNum;i<endNum;i+=stepNum)
  {
    if(i%2==0)
    {answer.push(i);}
  }
  return answer;
}

function reset()
{
  document.getElementById["displayEvens"]["startNum"].value="";
  document.getElementById["displayEvens"]["endNum"].value="";
  document.getElementById["displayEvens"]["stepNum"].value="";

  document.getElementById["results"].style.display="none";
}

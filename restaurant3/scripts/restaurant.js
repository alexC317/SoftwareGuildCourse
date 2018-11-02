/*
  Name: Alex Cepeda
  Date Created: 11/2/2018
  Latest Revision:

*/

/* Pulls all the input from the user and stores them in variables */
function validateInput()
{
  var name = document.forms["contactFields"]["name"].value;
  var email = document.forms["contactFields"]["email"].value;
  var phone = document.forms["contactFields"]["phone"].value;
  var reason = document.forms["contactFields"]["inquiry"].value;
  var additional = document.forms["contactFields"]["information"].value;
  var publicity = document.forms["contactFields"]["choice"].value;
  var days = [];

  // Goes through all of the checkboxes for contact days
  // If they were checked, push their value onto the days array

  for(var i = 0; i < document.forms["contactFields"]["days"].elements.length; i++)
  {
    if(document.forms["contactFields"]["days"].elements[i].checked == true)
    {days.push(document.forms["contactFields"]["days"].elements[i].value);}
  }

  // Checks if the number entered is 10 digits long
  // If it isn't, send an alert to the user
  if(phone == "" || isNaN(phone) || phone.length!=10)
  {
    alert("Please input a valid phone number, do not use spaces or dashes.");
    document.forms["contactFields"]["phone"].focus();
    return false;
  }

  // If no days were checked off, send an alert to the user letting them know to pick a day
  if(days.length <= 0)
  {
    alert("Please select at least one day we can reach out to you.");
    document.forms["contactFields"]["days"].focus();
    return false;
  }
  console.log(name, email, phone, reason, additional, publicity, days);

  // Send an alert to the user that the data was valid
  alert("All entered data is valid!")
  return false;
}

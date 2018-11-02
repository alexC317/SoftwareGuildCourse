function validateInput()
{
  var name = document.forms["contactFields"]["name"].value;
  var email = document.forms["contactFields"]["email"].value;
  var phone = document.forms["contactFields"]["phone"].value;
  var reason = document.forms["contactFields"]["inquiry"].value;
  var additional = document.forms["contactFields"]["information"].value;
  var publicity = document.forms["contactFields"]["choice"].value;
  var days = [];

  for(var i = 0; i < document.forms["contactFields"]["days"].elements.length; i++)
  {
    if(document.forms["contactFields"]["days"].elements[i].checked == true)
    {days.push(document.forms["contactFields"]["days"].elements[i].value);}
  }

  if(phone == "" || isNaN(phone) || phone.length!=10)
  {
    alert("Please input a valid phone number, do not use spaces or dashes.");
    document.forms["contactFields"]["phone"].focus();
    return false;
  }

  if(days.length <= 0)
  {
    alert("Please select at least one day we can reach out to you.");
    document.forms["contactFields"]["days"].focus();
    return false;
  }
  console.log(name, email, phone, reason, additional, publicity, days);
  alert("All entered data is valid!")
  return false;
}

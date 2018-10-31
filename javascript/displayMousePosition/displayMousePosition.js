var isMouseTracking = false;

//We need a function to update the Position
//On our front end, we have 2 labels -
//one for X, one for Y

function updateMousePosition()
{
  //if tracking is enabled, upadate the labels
  if(isMouseTracking)
  {
    //We can get the mouse positions with
    //event.clientX and event.clientY
    //We can update the text of an HTML element with the
    //innerText property.

    var positionX = document.getElementById("mousePositionX");
    positionX.innerText = event.clientX;
    var positionY = document.getElementById("mousePositionY");
    positionY.innerText = event.clientY;
  }
}

//We need a function to toggle whether or not tracking is enabled
function toggleTracking()
{
  //If isMouseTracking is true, set it to false;
  //Otherwise it is false, and needs to be set to true
  isMouseTracking = !isMouseTracking;
  //Update the tracking status to show whether it is enabled
  if(isMouseTracking)
  {document.getElementById("trackingStatus").innerText = "TRACKING";}
  else
  {document.getElementById("trackingStatus").innerText ="NOT TRACKING";}
}

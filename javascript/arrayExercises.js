function findMaxArray(arr)
{
  var max = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i]>max)
    {max = arr[i];}
  }

  return max;
}

function findArraySum(arr)
{
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }

  return sum;
}

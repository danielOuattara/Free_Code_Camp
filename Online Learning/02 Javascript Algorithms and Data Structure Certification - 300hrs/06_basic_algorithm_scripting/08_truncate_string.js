function truncateString(str, num) {
  let len = Number.isInteger(num) ? num : num.length 
  if(str.length > len) {
    return str.substr(0, len)+ "...";
  } else {
    return str.substr(0, len);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//-----------------------------------------------------------------------
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}


//-----------------------------------------------------------------------
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}


//-----------------------------------------------------------------------
function truncateString(str, num) {
  return str.length > num ? str.substring(0, num)+ "..." : str;
}

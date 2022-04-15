// Use export to Share a Code Block

export const add = (x, y) => {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
}

export { add2 };


//----------------------------------------------

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString }
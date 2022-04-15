function mutation(arr) {

  let array0 = arr[0].toLowerCase().split('');
  let array1 = arr[1].toLowerCase().split('');
  let compteur = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array0.includes(array1[i])) {
      compteur++;
    }
  }
  return array1.length === compteur;
}

mutation(["hello", "hey"]);
mutation(["Alien", "line"])
mutation(["hello", "Hello"])


//----------------------------------------------------------------------


function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}


//----------------------------------------------------------------------


function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}


//-------------------------------------------------------------------------

function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length ?
    true :
    !target.includes(test[i]) ?
    false :
    mutation([target, test], i + 1);
}
function titleCase(str) {
  let result = [];
  str.split(" ").forEach(item => {
     item = item[0].toUpperCase() + item.slice(1, item.length).toLowerCase();
     result.push(item);    
  })
  return result.join(" ");
}

titleCase("I'm a little tea pot");


//------------------------------------------------------------------------------

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
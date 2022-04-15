// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  if (prop === "tracks" && records[id][prop] === undefined) {
    records[id][prop] = [value];
  }
  if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  if (value === "") {
    delete records[id][prop];
  }
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//console.table(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

//console.table(updateRecords(recordCollection, 5439, "artist", "ABBA"));

console.table(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

console.table(updateRecords(recordCollection, 2548, "artist", ""));

console.table(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));

 console.table(updateRecords(recordCollection, 2468, "tracks", "Free"));

 console.table(updateRecords(recordCollection, 2548, "tracks", ""));

 console.table(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));






 //-----------------------------------------------------------------------------------

 // Solution

 // Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


// Only change code below this line
function updateRecords(records, id, prop, value) {


  if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  }

  else if( prop === "tracks" && records[id].hasOwnProperty("tracks")=== false) {
    records[id][prop]= [value]
  }

  else if( prop === "tracks" && value !== "") {
    records[id].tracks.push(value);
  }

  else if(value === ""){
    delete records[id][prop];
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


//--------------------------------------- OK AGAIN

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  }

  if( prop === "tracks" && records[id].tracks === undefined) {
    records[id][prop]= [value]
  }

  if( prop === "tracks" && value !== "") {
    records[id].tracks.push(value);
  }

  if(value === ""){
    delete records[id][prop];
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
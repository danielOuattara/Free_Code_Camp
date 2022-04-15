// XMLHttpRequest()  basic way !

// # 1
//----

/* You want your code to execute only once your page has finished loading. 
   For that purpose, you can attach a JavaScript event to the document called DOMContentLoaded.*/
   
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("getMessage").onclick = function() {};

  });


// # 2 :
// ----

document.addEventListener('DOMContentLoaded', () => {
  document.getElementsByClassName("message")[0].textContent = "Here is the message";
});


// # 3 :
// -----

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    // Add your code below this line
    req = new XMLHttpRequest();
    req.open("GET","/json/cats.json", true);
    req.send();
    req.onload = () => {
      const json = JSON.parse(hxr.responseText);
      document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(json);
    };
  };
});


// fecth API 

// # 4 :
// -----

document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('getMessage').onclick= () => {

    fetch('/json/cats.json')
      .then (response => response.json())
      .then(data => {
        
          document.getElementById('message').innerHTML = JSON.stringify(data);
        })

  };
});

/*
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
      .then (function (response) {
        return response.json();
      })
      .then(function(data) {
        document.getElementById('message').innerHTML = JSON.stringify(data);
      })

    };
  });

*/
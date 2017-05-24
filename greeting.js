//Target id,class or tags name from html file to be used in JSfile.
var nameEntered = document.querySelector('#takename');
var langBtnChoice = document.getElementsByName('language');
var greetmeButton = document.querySelector('#greetButton');
var displayText = document.querySelector('#greetname');
var countNameGreeted = document.querySelector('#countertext');
var resetButton = document.querySelector('#rButton');

var count = 0;
var nameGreeted = {};

//Localstorage to allow names greeted stays in the browser memory.
countNameGreeted.innerHTML = count;
var storeCountValue = localStorage.getItem("countNameGreeted");

if(storeCountValue) {                  
   count = Number(storeCountValue);
   countNameGreeted.innerHTML = count;
  } 

  if (localStorage.getItem('nameGreeted') === null){ 
      localStorage.setItem('nameGreeted', JSON.stringify(nameGreeted));
    }

//Bellow, are the functions that allow the person to be greeted,
//Using their language of choice.
function greet(){
  for(i = 0; i < langBtnChoice.length; i++){ 
   
    if (langBtnChoice[i].checked){ 
    
      switch (i){ 
        case 0 : displayText.innerHTML = "Salut, " + nameEntered.value + ' !';
        break;
        case 1 : displayText.innerHTML = "Hello, " + nameEntered.value + ' !';
        break;
        case 2 : displayText.innerHTML = "Molo, " + nameEntered.value + ' !';
      }

      nameGreeted = JSON.parse(localStorage.getItem('nameGreeted'));

      if (nameGreeted[nameEntered.value] === undefined){ 
          
          nameGreeted[nameEntered.value] = true;
          localStorage.setItem('nameGreeted', JSON.stringify(nameGreeted));
          count++;
          localStorage.setItem("countNameGreeted", count);
          countNameGreeted.innerHTML = count;

          console.log(count);
      }

    }
  }

  nameEntered.value = '';
  return nameEntered.value;
};

var reset = function()
{
  localStorage.clear();
  count = 0
  countNameGreeted.innerHTML = count;
};

//call the fuctions when the click event has happened
greetmeButton.addEventListener('click', greet);
resetButton.addEventListener('click', reset);

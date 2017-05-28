function greets(name, language) {
  if (language === 'english') {
    return " Hello " + name;
  }
  if (language === 'french') {
    return " Bonjour " + name
  }

  if (language === 'xhosa') {
    return " Molo " + name
  }
}

function getNameFunc(name) {
  return 'Hello, ' + name;
}
getNameFunc('Joe Dow');

var count = 0;

function checkIfNameExist(map, key) {

  if (!map.hasOwnProperty(key)) {
    map[key] = 1;
  } else {
    map[key] = map[key] + 1;
  }
  return map[key];
}

person = {
  name: ""
}





// var languages = ' Hello, Salut, Molo';
// var splitedLang = languages.split(',')
// var storedLang = [];

// function greets(name, language){

//     for(var x = 0 ; x < splitedLang.length; x++){
//         storedLang.push(splitedLang[x]);
//
//         if(storedLang[x].includes('H')){
//            return(storedLang[x] + ' ' + name);
//         };
//
//         if(storedLang[x].includes('S')){
//             return(storedLang[x] + ' ' + name)
//         };
//
//         if(storedLang[x].includes('M')){
//             return(storedLang[x] + ' ' + name)
//         };
//     }
// };

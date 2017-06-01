function greets(name, language) {
  if (language === 'english') {
    return " Hello " + name;
  }
  if (language === 'french') {
    return " Salut " + name
  }

  if (language === 'xhosa') {
    return " Molo " + name
  }
}

function getNameFunc(name) {
  return 'Hi, ' + name;
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
checkIfNameExist(person, 'oyama');

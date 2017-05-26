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

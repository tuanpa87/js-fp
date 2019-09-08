
users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 }
];

//modify data
var storeUser  = function (arr, user) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
      arr[i] = user;
      break;
    }
  }
}

//pure
var getUser = function(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === name.toLowerCase()) {
      return arr[i];
    }
  }

  return null;
};

var updateScore = function(user, newAmt) {
  if (user) {
    users.score += newAmt;
    return user;
  }
};

var updateTries = function(user) {
  if (user) {
    users.tries++;
    return user;
  }
};


//side effect
let cnt = 0;
let SfIncrement = () => {
  cnt++;
  return cnt;
};

//dont have side effect:

//pure function: 
//not defent on external data, 
//not cause change beyord its scope  
//return same output 
let increment = num => {
  return num + 1;
};

let average = scores => {
  var total;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
};


//side effect
// var currentUser = 0,
//     users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

// var updateScore = function(newAmt) {
//     users[currentUser].score += newAmt;
// };

// var returnUsers = function() {
//     return users;
// };

// var updateTries = function() {
//     users[currentUser].tries++;
// };

// var updateUser = function(newUser) {
//     currentUser = newUser;
// };

//not side effect
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

let usr = getUser(users, "Henry");
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
//storeUser(usr2);

const curryGreeting = function(greeting) {
  return function(name) {
    console.log(greeting + " " + name);
  };
};

const welcomeGreet = curryGreeting("Welcome");

//welcomeGreet("Steve");
//welcomeGreet("Mary");

///////////////////////////////////////

const ffun = function(a, b, c) {
  return a + b + c;
};

const gfun = function(d, e) {
  return d + e;
};

const hfun = function(f, g, h) {
  return f + g + h;
};

/*const curriedF = curry(ffun);
const curriedG = curry(gfun);
const curriedH = curry(hfun);

const newFun = pipe (
    curriedF(1)(2),
    curriedG(4),
    curriedH(5)(6));*/

const newFun = pipe(
  curry(ffun)(1)(2),
  curry(gfun)(4),
  curry(hfun)(5)(6)
);

const doubleNum = function(num) {
  return num + num;
};

const totalIt = function(n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4;
};

const doArray = function(num1, num2) {
  return [num1, num2];
};

const newFunction = pipe(
  doubleNum,
  curry(totalIt)(3)(2)(1),
  curry(doArray)(50)
);

//////////////////////////////////

const curriedTotalIt = curry(totalIt);
const curriedDoArray = curry(doArray);

/*const newFunction = pipe(
    doubleNum,
    curriedTotalIt(3)(2)(1),
    curriedDoArray(50));*/

    let fn1 = curriedTotalIt(5);
    console.log(fn1);
    let fn2 = fn1(6);
    console.log(fn2);
    let fn3 = fn2(7);
    console.log(fn3);
    let fn4 = fn3(8);
    console.log(fn4);
// const pipe = function(...fns) {
//   return function(x) {
//     return fns.reduce(function(v, f) {
//       return f(v);
//     }, x);
//   };
// };

// const compose = function(...fns) {
//   return function(x) {
//     return fns.reduceRight(function(v, f) {
//       return f(v);
//     }, x);
//   };
// };

// function curry(fn, arity = fn.length) {
//   return (function nextCurried(prevArgs) {
//     return function curried(nextArg) {
//       console.log(prevArgs);
//       console.log(nextArg);
//       var args = [...prevArgs, nextArg];
//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return nextCurried(args);
//       }
//     };
//   })([]);
// }

// function curry(fn, arity = fn.length) {
//   return (function nextCurried(prevArgs) {
//     return function curried(nextArg) {
//       var args = [...prevArgs, nextArg];
//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return nextCurried(args);
//       }
//     };
//   })([]);
// }

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const curry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = prevArgs => nextArg => {
    var args = [...prevArgs, nextArg];
    console.log(args);
    return args.length >= arity
      ? fn(args)
      : nextCurried(args);
  })([]);

// const curry = (fn, arity = fn.length, nextCurried) =>
//   (nextCurried = prevArgs => nextArg =>
//     [...prevArgs, nextArg].length >= arity
//       ? fn(...[...prevArgs, nextArg])
//       : nextCurried([...prevArgs, nextArg]))([]);

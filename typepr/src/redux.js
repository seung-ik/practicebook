"use strict";
exports.__esModule = true;
var createSelector = require("reselect").createSelector;
var state = {
    a: {
        first: 5
    },
    b: 10
};
// const selectA = (state) => state.a;
// const selectB = (state) => state.b;
// const selectA1 = createSelector([selectA], (a) => a.first);
// const selectResult = createSelector([selectA1, selectB], (a1, b) => {
//   console.log('Output selector running');
//   return a1 + b;
// });
// const result = selectResult(state);
// console.log(result);
// state = {
//   a: { first: 100 },
//   b: 10,
// };
// state.a.first = null;
// state.b = 99;
// console.log(state);
// const secondResult = selectResult(state);
// console.log(secondResult);
var selectC = function (state, param) { return state.a.first + param; };
var selectD = function (state, param) { return state.b + param; };
var selectResultTwo = createSelector([selectC, selectD], function (c, d) {
    console.log("Output selector running");
    return c + d;
});
var result = selectResultTwo(state, "wow");
console.log(result);
var result2 = selectResultTwo(state, 1);
console.log(result2);

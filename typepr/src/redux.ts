const { createSelector } = require("reselect");

const state = {
  a: {
    first: 5,
  },
  b: 10,
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

const selectC: any = (state: any, param: string) => state.a.first + param;
const selectD: any = (state: any, param: number) => state.b + param;

const selectResultTwo = createSelector([selectC, selectD], (c: any, d: any) => {
  console.log("Output selector running");
  return c + d;
});

const result = selectResultTwo(state, "wow");
console.log(result);

const result2 = selectResultTwo(state, 1);
console.log(result2);

export {};

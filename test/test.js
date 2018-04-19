import test from "ava";

const deUpdate = require("../index");

const prev = [
  {
    _id: 1,
    name: "Michael",
    tag: "old"
  },
  {
    _id: 2,
    name: "Sherry",
    tag: "old"
  },
  {
    _id: "5ad0db6de9fb1d59a0be4df7",
    name: "Lee",
    tag: "old"
  }
];

const current = [
  {
    _id: 1,
    name: "Michael",
    tag: "old"
  },
];

// result = deUpdate(prev, current);
// console.log("result: \n".blue, result);

test("Should update result", t => {
  t.deepEqual(deUpdate(prev, current).update, [{
    _id: 1,
    name: "Michael",
    tag: "old"
  },
  ]);
});

test("Should create result", t => {
  t.deepEqual(deUpdate(prev, current).new, [
  ]);
});

test("Should delete result", t => {
  t.deepEqual(deUpdate(prev, current).deleted, [
    {
      _id: 2,
      name: "Sherry",
      tag: "old"
    },
    {
      _id: "5ad0db6de9fb1d59a0be4df7",
      name: "Lee",
      tag: "old"
    }
  ]);
});

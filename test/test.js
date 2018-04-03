import test from "ava";

const deUpdate = require("../index");

const prev = [
  {
    id: 1,
    name: "Michael",
    tag: "old"
  },
  {
    id: 2,
    name: "Sherry",
    tag: "old"
  },
  {
    id: 3,
    name: "Lee",
    tag: "old"
  }
];

const current = [
  {
    id: 1,
    name: "Michael",
    tag: "old"
  },
  {
    id: 2,
    name: "Sherry",
    tag: "old"
  },
  {
    name: "Jason",
    tag: "old"
  },
  {
    name: "Molly",
    tag: "new"
  },
  {
    name: "Daniel",
    tag: "new"
  }
];

// result = deUpdate(prev, current);
// console.log("result: \n".blue, result);

test("Should update result", t => {
  t.deepEqual(deUpdate(prev, current).update, [{
    id: 1,
    name: "Michael",
    tag: "old"
  },
  {
    id: 2,
    name: "Sherry",
    tag: "old"
  },]);
});

test("Should create result", t => {
  t.deepEqual(deUpdate(prev, current).new, [{
      name: "Jason",
      tag: "old"
    },
    {
      name: "Molly",
      tag: "new"
    },
    {
      name: "Daniel",
      tag: "new"
    }
  ]);
});

test("Should delete result", t => {
  t.deepEqual(deUpdate(prev, current).deleted, [
    {
      id: 3,
      name: "Lee",
      tag: "old"
    }
  ]);
});

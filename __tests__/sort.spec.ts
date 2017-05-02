import sort from "../src/extra/sort";

it("sorts a collection based on an number property", () => {
  const collection = [
    {
      id: 3,
      label: "label 1"
    },
    {
      id: 2,
      label: "label 2"
    },
    {
      id: 1,
      label: "label 3"
    }
  ];
  expect(sort(collection, "id")).toEqual([
    {
      id: 1,
      label: "label 3"
    },
    {
      id: 2,
      label: "label 2"
    },
    {
      id: 3,
      label: "label 1"
    }
  ]);
});

import sort from "../src/extra/sort";

it("sorts a collection based on a string property", () => {
  const collection = [
    {
      id: 1,
      label: "abc"
    },
    {
      id: 2,
      label: "xyz"
    },
    {
      id: 3,
      label: "ghf"
    }
  ];
  expect(sort(collection, "label")).toEqual([
    {
      id: 1,
      label: "abc"
    },
    {
      id: 3,
      label: "ghf"
    },
    {
      id: 2,
      label: "xyz"
    }
  ]);
});

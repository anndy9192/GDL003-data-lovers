require('../src/data.js');
const lol = require('../src/data/lol/lol.json');

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');


  });
});
*/
describe("filterData", () => {
  it("is a function", () => {
    expect(typeof example.filterData).toBe("function");
  });
  it('returns `filterData`', () => {
    expect(example.filterData(lol.data.Ahri, 'Assassin')).toBe(lol.data.Ahri);
  console.log(lol);
  });

});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof example.sortData).toBe("function");
  });
  it('returns `sortData`', () => {
    expect(example.sortData()).toBe('sortData');
  });

});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof example.computeStats).toBe("function");
  });
  it('returns `computeStats`', () => {
    expect(example.computeStats()).toBe('computeStats');
  });

});
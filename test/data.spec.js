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
describe("filtrado", () => {
  it("is a function", () => {
    expect(typeof example.filtrado).toBe("function");
  });
  it('returns `filtrado`', () => {
    expect(example.filtrado(lol.data.Ahri, 'Assassin')).toBe(lol.data.Ahri);
  console.log(lol);
  });

});

describe("sorted", () => {
  it("is a function", () => {
    expect(typeof example.sorted).toBe("function");
  });
  it('returns `sorted`', () => {
    expect(example.sorted()).toBe('sorted');
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
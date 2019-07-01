require('../src/data.js');
require('../src/data/lol/lol.js');

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
    expect(example.filtrado()).toBe('false');
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

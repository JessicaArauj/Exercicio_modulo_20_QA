const { maxEMin } = require('./max_e_min');

describe('maxEMin', () => {
  test('retorna o máximo divisor comum entre dois números', () => {
    expect(maxEMin(5, 25)).toBe(5);
  });
});


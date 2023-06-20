const { multiples } = require('./listandonumeros');

describe('multiples', () => {
  test('soma dos múltiplos de 5 e 7 abaixo de 1000', () => {
    expect(multiples()).toBe(156361);
  });
});

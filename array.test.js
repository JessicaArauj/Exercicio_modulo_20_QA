const { indexMinMax } = require('./array');

describe('indexMinMax', () => {
  test('retorna os índices do menor e maior valor do array', () => {
    const arr = [10, 5, 2, 15, 7, 8];
    const [indexMin, indexMax] = indexMinMax(arr);

    expect(indexMin).toBe(2);
    expect(indexMax).toBe(3);
  });
});

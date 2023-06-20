function maxEMin(a, b) {
  if (b === 0) {
    return a;
  } else {
    return maxEMin(b, a % b);
  }
}

console.log(maxEMin(5, 25));

module.exports = { maxEMin };

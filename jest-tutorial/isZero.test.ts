import { isZero } from './isZero';

test('0を渡したらtrueになること.', () => {
  const result = isZero(0);
  expect(result).toBe(true); // result === trueを評価している.
});

test('1を渡したらfalseになること.', () => {
  const result = isZero(1);
  expect(result).toBe(false); // result === falseを評価している.
});

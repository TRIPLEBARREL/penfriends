import { expect, test } from '@jest/globals';
import { sum } from './sum';

test('sum', () => {
  expect(sum(1, 2)).toBe(3);
});
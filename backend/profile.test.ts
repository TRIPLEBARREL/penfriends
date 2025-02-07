import { expect, test } from '@jest/globals';
import { showProfile } from './profile';
describe('profile', () => {
  test('profile get info', () => {
    expect(showProfile("john.doe@gmail.com")).toStrictEqual({
      email: "john.doe@gmail.com",
      password: "123456",
      name: "John Doe"
    });
  });
});
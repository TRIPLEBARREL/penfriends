import { describe, test, expect } from '@jest/globals';
import { getPurchasedBackgrounds, getPurchasedStickers, getPurchasedBadges, showInventory } from './inventory';

describe('receiving user info', () => {
  test('get user backgrounds', () => {
    expect(getPurchasedBackgrounds("john.doe@gmail.com")).toStrictEqual([{"id":"bg-1","name":"Background 1","price":100},{"id":"bg-2","name":"Background 2","price":200}]);
  });

  test('get user stickers', () => {
    expect(getPurchasedStickers("john.doe@gmail.com")).toStrictEqual([{"id":"s-1","name":"Sticker 1","price":50},{"id":"s-2","name":"Sticker 2","price":75}]);
  });

  test('get user badges', () => {
    expect(getPurchasedBadges("john.doe@gmail.com")).toStrictEqual([{"id":"bd-1","name":"Badge 1","price":150},{"id":"bd-2","name":"Badge 2","price":250}]);
  });

  test('profile get info', () => {
    expect(showInventory("john.doe@gmail.com")).toStrictEqual({
      backgrounds: [{"id":"bg-1","name":"Background 1","price":100},{"id":"bg-2","name":"Background 2","price":200}],
      stickers: [{"id":"s-1","name":"Sticker 1","price":50},{"id":"s-2","name":"Sticker 2","price":75}],
      badges: [{"id":"bd-1","name":"Badge 1","price":150},{"id":"bd-2","name":"Badge 2","price":250}]
    })
  });
});
import { describe, test, expect, afterEach } from '@jest/globals';
import { purchaseItem, showShopItems, addShopItem } from './shop';
import { showInventory, removeInventoryItem } from './inventory';
import { InventoryItem } from './types';

describe('buying from shop', () => {
  test('get shop stock, fully stocked, then remove item from user', () => {
    const itemId: string = "bg-" + crypto.randomUUID()
    const item: InventoryItem = {
      "id": itemId,
      "name": "Gold Background",
      "price": 999
    }
    addShopItem("john.doe@gmail.com", "backgrounds", item)
    purchaseItem("john.doe@gmail.com", itemId, 'backgrounds')
    expect(showInventory("john.doe@gmail.com")).toStrictEqual({
      backgrounds: [{"id":"bg-1","name":"Background 1","price":100},{"id":"bg-2","name":"Background 2","price":200},{"id":itemId,"name":"Gold Background","price":999}],
      stickers: [{"id":"s-1","name":"Sticker 1","price":50},{"id":"s-2","name":"Sticker 2","price":75}],
      badges: [{"id":"bd-1","name":"Badge 1","price":150},{"id":"bd-2","name":"Badge 2","price":250}]
    });
    removeInventoryItem("john.doe@gmail.com", 'backgrounds', itemId)
    expect(showInventory("john.doe@gmail.com")).toStrictEqual({
      backgrounds: [{"id":"bg-1","name":"Background 1","price":100},{"id":"bg-2","name":"Background 2","price":200}],
      stickers: [{"id":"s-1","name":"Sticker 1","price":50},{"id":"s-2","name":"Sticker 2","price":75}],
      badges: [{"id":"bd-1","name":"Badge 1","price":150},{"id":"bd-2","name":"Badge 2","price":250}]
    });
  });
});
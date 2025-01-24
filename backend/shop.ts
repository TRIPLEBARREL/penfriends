import fs from 'fs';
import { InventoryItem, Inventory } from './types';

function showShopItems() {
  return JSON.parse(fs.readFileSync('./shop.json', {encoding: 'utf8'}));
}

function purchaseItem(targetEmail: string, itemId: string, type: keyof Inventory): Error | void {
  const userDatabaseObj = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const userTargetObj = userDatabaseObj[targetEmail];
  const shopObj = JSON.parse(fs.readFileSync('./shop.json', {encoding: 'utf8'}));

  const targetItem: InventoryItem = shopObj[type].find((item: InventoryItem) => item.id === itemId);
  if (!targetItem) {
    throw new Error("Item not found!");
  }
  if (userTargetObj.coins < targetItem.price) {
    throw new Error("Insufficient funds!");
  } else {
    shopObj[type] = shopObj[type].filter((item: InventoryItem) => item.id !== itemId);
    userTargetObj.inventory[type].push(targetItem);
    userDatabaseObj[targetEmail] = userTargetObj; 
    fs.writeFileSync('./shop.json', JSON.stringify(shopObj), {encoding: 'utf8'});
    fs.writeFileSync('./users.json', JSON.stringify(userDatabaseObj), {encoding: 'utf8'});
  }
  return;
}

/**
 * Stub function for admin authorization
 * @param email 
 * @returns boolean
 */
function isAdmin(email: string): boolean {
  return true;
}

function addShopItem(email: string, type: keyof Inventory, item: InventoryItem): Error | void {
  if (!isAdmin(email)) {
    throw new Error("Unauthorized access!");
  }
  const shopDatabaseObj = JSON.parse(fs.readFileSync('./shop.json', {encoding: 'utf8'}));
  shopDatabaseObj[type].push(item);
  fs.writeFileSync('./shop.json', JSON.stringify(shopDatabaseObj), {encoding: 'utf8'});
  return;
}

export { showShopItems, purchaseItem, addShopItem };
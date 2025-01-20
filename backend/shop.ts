import fs from 'fs';
import { InventoryItem } from './types';

function showShopItems() {
  return JSON.parse(fs.readFileSync('./shop.json', {encoding: 'utf8'}));
}

function purchaseItem(targetEmail: string, itemId: string, type: string, cost: number) {
  const userDatabaseObj = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const userTargetObj = userDatabaseObj.keys().filter((user: string) => user === targetEmail);
  const shopObj = JSON.parse(fs.readFileSync('./shop.json', {encoding: 'utf8'}));

  const targetItem = shopObj[type].find((item: InventoryItem) => item.id === itemId);
  if (userTargetObj.coins < targetItem.cost) {
    throw new Error("Insufficient funds!");
  } else {
    const remainingShop = shopObj[type].filter((item: InventoryItem) => item.id !== itemId);
    userTargetObj.inventory[type].push(targetItem);
    userDatabaseObj.map((scannedEmail: string) => scannedEmail === targetEmail ? userTargetObj : scannedEmail); 
  }
  return;
}

export { showShopItems, purchaseItem };
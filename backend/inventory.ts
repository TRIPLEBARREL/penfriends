import fs from 'fs';
import { getUser } from './helper';
import { Inventory, InventoryItem, User, UsersDB } from './types';

function getPurchasedBackgrounds(email: string): InventoryItem[] {
  const user: User = getUser(email);
  return user.inventory.backgrounds;
}

function getPurchasedStickers(email: string): InventoryItem[] {
  const user: User = getUser(email);
  return user.inventory.stickers;
}

function getPurchasedBadges(email: string): InventoryItem[] {
  const user: User = getUser(email);
  return user.inventory.badges;
}

function showInventory(email: string): Inventory {
  const user: User = getUser(email);
  return user.inventory;
}

function removeInventoryItem(email: string, type: keyof Inventory, itemId: string): void {
  const userDatabaseObj: UsersDB = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const user: User = userDatabaseObj[email];
  const uInventory: Inventory = user.inventory;
  uInventory[type] = uInventory[type].filter((item: InventoryItem) => item.id !== itemId);
  user.inventory = uInventory;
  userDatabaseObj[email] = user;
  fs.writeFileSync('./users.json', JSON.stringify(userDatabaseObj), {encoding: 'utf8'});
}

export { getPurchasedBackgrounds, getPurchasedStickers, getPurchasedBadges, showInventory, removeInventoryItem };
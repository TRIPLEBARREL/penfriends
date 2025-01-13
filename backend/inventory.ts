import data from './database.json' with { type: "json" };
import fs from 'fs';

function getPurchasedBackgrounds(email: string): string[] {
  const dataObj = JSON.parse(fs.readFileSync('./database.json', {encoding: 'utf8'}));
  const user = dataObj.filter((user) => user.email === email);
  return user.inventory.backgrounds;
}

function getPurchasedStickers(email: string): string[] {
  const dataObj = JSON.parse(fs.readFileSync('./database.json', {encoding: 'utf8'}));
  const user = dataObj.filter((user) => user.email === email);
  return user.inventory.stickers;
}

function showInventory(email: string): string[] {
  const dataObj = JSON.parse(fs.readFileSync('./database.json', {encoding: 'utf8'}));
  const user = dataObj.filter((user) => user.email === email);
  return user.inventory;
}

export { getPurchasedBackgrounds, getPurchasedStickers, showInventory };
// Interface for users
export interface User {
  id: string;
  password?: string;
  name: string;
  coins: number;
  letters: LetterType;
  inventory: Inventory;
}

export interface IdObject {
  id: string;
}

export interface Code {
  code: number;
  message?: string;
}

export interface UsersDB {
    [key: string]: User;
}

export interface Letter {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  "replied-id": string | null;
}

/* export interface DraftLetter {
  id: string;
  title: string;
  content: string;
} */

export interface Inventory {
  backgrounds: InventoryItem[];
  stickers: InventoryItem[];
  badges: InventoryItem[];
}

export interface LetterType {
  new: Letter[];
  opened: Letter[];
  draft: Letter[];
  sent: Letter[];
}

export interface InventoryItem {
  id: string;
  name: string;
  price: number;
}

export interface Sticker {
  id: string;
  name: string;
  price: number;
}

export interface Database {
  [email: string]: User;
}
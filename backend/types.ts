// Interface for users
export interface User {
    id: string;
    password: string;
    name: string;
    letters: {
        new: Letter[];
        opened: Letter[];
        sent: Letter[];
    };
    inventory: Inventory;
}

export interface Letter {
    id: string;
    title: string;
    content: string;
    date: string;
    author: string;
    "replied-id": string | null;
}

export interface Inventory {
    backgrounds: InventoryItem[];
    stickers: InventoryItem[];
    badges: InventoryItem[];
}

export interface InventoryItem {
    id: string,
    name: string,
    price: number
}

export interface Database {
    [email: string]: User;
}
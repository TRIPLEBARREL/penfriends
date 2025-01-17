type Letter = {
  id: string;
  title: string;
  content: string;
  date: Date;
  author: string;
  repliedId?: string;
};

type User = {
  email: string;
  password: string;
  name: string;
  letters: {
    new: Letter[];
    old: Letter[];
    sent: Letter[];
  };
  inventory: {
    backgrounds: string[];
    stickers: string[];
    badges: string[];
  };
}

type Item = {
  id: string;
  name: string;
  cost: number;
}
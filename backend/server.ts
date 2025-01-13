const express = require('express');
import { Request, Response } from 'express';
const cors = require('cors');
const morgan = require('morgan');
import {
  getLetterDetails,
  createLetter,
  replyToLetter,
  addSticker,
  addDetails,
  sendLetter,
  deleteLetter
} from './letter';
import {
  getNewLetters,
  getOldLetters,
  getSentLetters
} from './list';
import {
  getPurchasedBackgrounds,
  getPurchasedStickers,
  showInventory,
} from './inventory';
import {
  showProfile
} from './profile';
import {
  showShopItems,
  purchaseItem
} from './shop';
import {
  authLogin,
  authRegister,
  authResetPassword
} from './auth';

// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(express.json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal, NOT compulsory to add in)
app.use(morgan('dev'));

const PORT: number = parseInt(process.env.PORT || "3000");
const HOST: string = process.env.IP || 'localhost';

app.get('/letter/open', (req: Request, res: Response) => {
  // clear any existing letter, return letter for display and move letter to opened list
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  const letterId = req.query.letterId as string;
  res.send(JSON.stringify(getLetterDetails(email as string, letterId)));
  return;
});

app.post('/letter/create', (req: Request, res: Response) => {
  // creates empty letter
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const { email } = req.body;
  res.json(createLetter(email as string));
  return;
});

app.post('/letter/reply', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  const { letterId, email } = req.body;
  res.json(replyToLetter(email as string, letterId as string));
  return;
});

app.post('/letter/add/sticker', (req: Request, res: Response) => {
  // sticker limit of 3
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  const { letterId, stickerId, email } = req.body;
  return res.json(addSticker(email as string, letterId as string, stickerId as string));
});

// ----------------------------
app.post('/letter/add/details', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  const { letterId, title, content, email } = req.body;
  return res.json(addDetails(email as string, letterId as string, title as string, content as string));
});

app.post('/letter/send', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  const { letterId, email } = req.body;
  return res.json(sendLetter(email as string, letterId));
});

app.delete('/letter/delete', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  const letterId = req.query.letterId as string;
  const email = req.query.email as string;
  return res.json(deleteLetter(email, letterId));
});

app.get('/letters/new', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(getNewLetters(email));
});

app.get('/letters/opened', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(getOldLetters(email));
});

app.get('/letters/sent', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(getSentLetters(email));
});

app.get('/shop/show', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  return res.json(showShopItems());
});

app.post('/shop/purchase', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }

  const { itemId, cost, email } = req.body;
  return res.json(purchaseItem(email as string, itemId as string, parseInt(cost)));
});

app.get('/inventory/backgrounds', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(getPurchasedBackgrounds(email));
});

app.get('/inventory/stickers', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(getPurchasedStickers(email));
});

app.get('/inventory/all', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(showInventory(email));
});

app.get('/profile', (req: Request, res: Response) => {
  const token = req.headers['token'] as string;
  if (!token) {
    res.status(404).json({ error: "User not found!" });
  }
  const email = req.query.email as string;
  return res.json(showProfile(email));
});

app.post('/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  return res.json(authLogin(email as string, password as string));
});

app.post('/auth/register', (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  return res.json(authRegister(email as string, password as string, name as string));
});

app.post('/auth/resetpassword', (req: Request, res: Response) => {
  const { email, newPassword } = req.body;
  return res.json(authResetPassword(email as string, newPassword as string));
});

app.listen(PORT, function (err: Error) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
}); 

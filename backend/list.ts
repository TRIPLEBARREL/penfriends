import fs from 'fs';
import { Database, Letter } from './types';

const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;

function getNewLetters(email: string): Letter[] {
    if (!(email in users)) {
        throw new Error("User not found!");
    }

    const newLetters: Letter[] = users[email].letters.new;
    return newLetters;
}

function getOldLetters(email: string): Letter[] {
    if (!(email in users)) {
        throw new Error("User not found!");
    } 

    const oldLetters = users[email].letters.opened;
    return oldLetters;
}

function getSentLetters(email: string): Letter[] {
    if (!(email in users)) {
        throw new Error("User not found!");
    } 

    const sentLetters = users[email].letters.sent;
    return sentLetters;
}

function getDraftLetters(email: string): Letter[] {
  if (!(email in users)) {
      throw new Error("User not found!");
  } 

  const draftLetters = users[email].letters.draft;
  return draftLetters;
}

export { getNewLetters, getOldLetters, getSentLetters, getDraftLetters };
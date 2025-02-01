import fs from 'fs';
import { uuid } from 'uuidv4';
import { Database, Letter, DraftLetter } from './types';
import { removeLetter } from './removeletter';

const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
console.log(users)

function getLetterById(email: string, letterId: string): Letter | undefined {
    const allLetters = [...users[email].letters.new, ...users[email].letters.opened, ...users[email].letters.draft, ...users[email].letters.sent];
    const letter = allLetters.find((letter) => letter.id === letterId);
    if (!letter) {
        throw new Error("Letter not found!");
    }

    return letter;
}

function getLetterDetails(email: string, letterId: string): Letter | undefined {
    if (!(email in users)) {
        throw new Error("User not found!");
    }
    return getLetterById(email, letterId)
}

function createLetter(email: string): string {
    if (!(email in users)) {
        throw new Error("User not found!");
    }
    const user = users[email];
    const letterId = uuid();
    const draftLetter: Letter = {
        id: letterId,
        title: "Letter 7",
        content: "Content 7",
        date: "2025-01-20",
        author: "user-7",
        "replied-id": null 
    }
    user.letters.draft.push(draftLetter);
    return letterId;
}

function replyToLetter(replyEmail: string, sentEmail: string, letterId: string): string {
    console.log(users);
    if (!(replyEmail in users)) {
        console.log(users);
        throw new Error("User not found!");
    }
    const user = users[replyEmail];
    const letter = user.letters.opened.find(letter => letter.id === letterId);
    if (!letter) {
        throw new Error("Letter not found!");
    }
    const replyId = createLetter(sentEmail);
    const replyLetter: Letter = {
        id: replyId,
        title: "Letter 8",
        content: "Content 8",
        date: "2025-01-21",
        author: "user-8",
        "replied-id": letterId
    }
    user.letters.draft.push(replyLetter);
    return replyId;
}

function sendLetter(email: string, letterId: string): Letter [] {
    const user = users[email];
    if (!user) {
        throw new Error("User not found!");
    }
    const letterToSendIndex = user.letters.draft.findIndex((draft: DraftLetter) => draft.id === letterId);
    if (letterToSendIndex === -1) {
        throw new Error("Draft letter not found!");
    }
    const draftLetter: DraftLetter = user.letters.draft[letterToSendIndex];
    const letterToSend: Letter = {
        ...draftLetter,
        date: "2025-01-19",
        author: "user-1",
        "replied-id": null
    }
    user.letters.draft.splice(letterToSendIndex, 1);
    user.letters.sent.push(letterToSend);
    return user.letters.sent;
}

function deleteLetter(email: string, letterId: string): Letter[] {
    const user = users[email];
    if (!user) {
        throw new Error("User not found!");
    }
    removeLetter(user, letterId);   
    return [...user.letters.new, ...user.letters.opened, ...user.letters.draft, ...user.letters.sent]
}

export { getLetterDetails, createLetter, replyToLetter, sendLetter, deleteLetter };
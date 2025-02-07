import fs from 'fs';
import { uuid } from 'uuidv4';
import { Database, Letter, User, LetterType } from './types';

function getLetterById(email: string, letterId: string): Letter | undefined {
    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
    const allLetters = [...users[email].letters.new, ...users[email].letters.opened, ...users[email].letters.draft, ...users[email].letters.sent];
    const letter = allLetters.find((letter) => letter.id === letterId);
    if (!letter) {
        throw new Error("Letter not found!");
    }

    return letter;
}

function getLetterDetails(email: string, letterId: string): Letter | undefined {
    // console.log(letterId);
    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
    // console.log(users);
    if (!(email in users)) {
        throw new Error("User not found!");
    }
    return getLetterById(email, letterId)
}

function createLetter(email: string): string {
    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
    // console.log(users);
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

    users[email] = user;
    fs.writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
    // console.log(user.letters.draft);
    
    return letterId;
}

function replyToLetter(replyEmail: string, sentEmail: string, letterId: string): string {
    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
    // console.log(users);
    if (!(replyEmail in users)) {
        throw new Error("Replier not found!");
    } else if (!(sentEmail in users)) {
        throw new Error("Sender not found!");
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
    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
    const user = users[email];
    if (!user) {
        throw new Error("User not found!");
    }
    const letterToSendIndex = user.letters.draft.findIndex((draft: Letter) => draft.id === letterId);
    if (letterToSendIndex === -1) {
        throw new Error("Draft letter not found!");
    }
    const draftLetter: Letter = user.letters.draft[letterToSendIndex];
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
    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'})) as Database;
    const user: User = users[email];
    if (!user) {
        throw new Error("User not found!");
    }

    let found = false;

    // delete from the database copy and check if the letter was found
    for (const [key, letterSelection] of Object.entries(user.letters)) {
        const keyType: keyof LetterType = key as keyof LetterType;
        
        //console.log(user.letters[keyType])
        if (user.letters[keyType].find((letter: Letter) => letter.id === letterId)) {
            //console.log("Found is true!")
            found = true;
            user.letters[keyType] = (letterSelection as Letter[]).filter(letter => letter.id !== letterId);
            break;
        }
    }
    if (!found) { 
        //console.log("Found is false!")
        throw new Error("Letter not found!");
    }

    users[email] = user;
    fs.writeFileSync('./users.json', JSON.stringify(users, null, '\t'));

    return [...user.letters.new, ...user.letters.opened, ...user.letters.draft, ...user.letters.sent]
}

export { getLetterDetails, createLetter, replyToLetter, sendLetter, deleteLetter };
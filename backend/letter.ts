import usersJSON from './users.json';
import { uuid } from 'uuidv4';
import { Database, User, Letter, DraftLetter } from './types';
import { fileReading } from './filereading';

const users = usersJSON as Database;

function getLetterById(email: string, letterId: string): Letter | undefined {
    const allLetters = [...users[email].letters.new, ...users[email].letters.opened, ...users[email].letters.sent];
    const letter = allLetters.find((letter) => letter.id === letterId);
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
    const letterId = uuid();
    return letterId;
}

function replyToLetter(replyEmail: string, sentEmail: string, letterId: string,): string {
    if (!(replyEmail in users)) {
        throw new Error("User not found!");
    }
    const letter = users[replyEmail].letters.opened.find(letter => letter.id === letterId);
    if (!letter) {
        throw new Error("Letter not found!");
    }
    const replyId = createLetter(sentEmail);
    return replyId;
}

function sendLetter(email: string, letterId: string) {
    const jsonData = fileReading('users.json');
    const user = jsonData[email];
    if (!user) {
        throw new Error("User not found!");
    }
    const letterToSendIndex = user.draftLetters.findIndex((draft: DraftLetter) => draft.id === letterId);
    if (letterToSendIndex === -1) {
        throw new Error("Draft letter not found!");
    }
    const draftLetter: DraftLetter = user.draftLetters[letterToSendIndex];
    const letterToSend: Letter = {
        ...draftLetter,
        date: "2025-01-19",
        author: "user-1",
        "replied-id": null
    }
    user.draftLetters.splice(letterToSendIndex, 1);
    user.letters.sent.push(letterToSend);
}

function deleteLetter(email: String, letterId: String) {

}

export { getLetterDetails, createLetter, replyToLetter, sendLetter, deleteLetter };
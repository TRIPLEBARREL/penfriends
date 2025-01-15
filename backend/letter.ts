import usersJSON from './users.json';
import { uuid } from 'uuidv4';
import { Database, User, Letter } from './types';

const users = usersJSON as Database;

function getLetterById(email: string, letterId: string): Letter | undefinded {
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

function addSticker(email: String, letterId: String, stickerId: string) {

}

function addDetails(email: String, letterId: String, title: String, content: String) {

}

function sendLetter(email: String, letterId: String) {

}

function deleteLetter(email: String, letterId: String) {

}

export { getLetterDetails, createLetter, replyToLetter, addSticker, addDetails, sendLetter, deleteLetter };
import data from './database.json';
import { uuid } from 'uuidv4';

export interface Letter {
    title: string;
    date: string;
    body: string;
    stickers: string[];
}

function getLetterDetails(email: String, letterId: String): Letter {
    if (!(email in data)) {
        throw new Error("User not found!");
    }
    if (!(letterId in data)) {
        throw new Error("Letter not found!");
    }
    return { title: "lalala", date: "lalalal", body: "alalallala", stickers: ["star", "heart"] };

}

function createLetter(email: String): String {
    if (!(email in data)) {
        throw new Error("User not found!");
    }
    const letterId = uuid();
    data[email].push({ id: letterId, content: "" });
    return letterId;
}

function replyToLetter(email: String, letterId: String) {
    if (!(email in data)) {
        throw new Error("User not found!");
    }
    if (!(letterId in data)) {
        throw new Error("Letter not found!");
    }
    const replyId = uuid();
    data[email][letterId].push(replyId);
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

import data from './database.json';
import { uuid } from 'uuidv4';

function getLetterDetails(email: String, letterId: String) {

}

function createLetter(email: String) {
    if (!(email in data)) {
        throw new Error("User not found!");
    }
    const letterId = uuid();
    return letterId;
}

function replyToLetter(email: String, letterId: String) {

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
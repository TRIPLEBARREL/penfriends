import { User } from './types';


export function removeLetter(user: User, letterId: string) {
    const draftLetterIndex = user.draftLetters.findIndex(letter => letter.id === letterId);
    if (draftLetterIndex !== -1) {
        user.draftLetters.splice(draftLetterIndex, 1);
        console.log(`Letter with ID ${letterId} removed.`);
        return;
    }
    
    for (let status of ['new', 'opened', 'sent'] as const) {
        const letterIndex = user.letters[status].findIndex(letter => letter.id === letterId);
        if (letterIndex !== -1) {
            user.letters[status].splice(letterIndex, 1);
            console.log(`Letter with ID ${letterId} removed.`);
            return;
        }
    }

    throw new Error(`Letter with ID ${letterId} not found!`);
}

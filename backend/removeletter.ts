import { Letter } from './types';

export function removeLetter(user: any, letterId: string) {
    const categories = ['new', 'opened', 'draft', 'sent'];
    for (const category of categories) {
        user.letters[category] = user.letters[category].filter((letter: Letter) => letter.id !== letterId);
    }
}
import { describe, test, expect, afterEach, beforeEach } from '@jest/globals';
import { createLetter, replyToLetter, sendLetter, deleteLetter, getLetterDetails } from './letter';
import { authLogin, authRegister } from './auth';
import { resetDatabase } from './helper';

const LOGINEMAIL = 'john.doe@gmail.com';
const LOGINPASSWORD = '123456';

describe('Letter feature no error', () => {
    let letterId: string;
    beforeAll(() => {
        resetDatabase();
        const resultLogin = authLogin(LOGINEMAIL, LOGINPASSWORD);
        if (resultLogin instanceof Error) {
            throw resultLogin;
        }
        letterId = createLetter(LOGINEMAIL);
    });

    test('1. getLetterById passed - Getting details of "letterId"', () => {
        expect(getLetterDetails(LOGINEMAIL, letterId)).toStrictEqual({ 
            id: letterId,
            title: "Letter 7",
            content: "Content 7",
            date: "2025-01-20",
            author: "user-7",
            "replied-id": null 
        });
        deleteLetter(LOGINEMAIL, letterId);
        expect(() => { getLetterDetails(LOGINEMAIL, letterId) }).toThrow("Letter not found!");
    });

    test('2. getLetterById passed - Getting details of "l-4"', () => {
        expect(getLetterDetails(LOGINEMAIL, 'l-4')).toStrictEqual({
            id: "l-4",
            title: "Letter 4",
            content: "Content 4",
            date: "2021-01-04",
            author: "user-1",
            "replied-id": null
        });
    });

    test('3. sendLetter passed', () => {
        const letterId = createLetter(LOGINEMAIL);
        const sentLetters = [
            {
                id: "l-4",
                title: "Letter 4",
                content: "Content 4",
                date: "2021-01-04",
                author: "user-1",
                "replied-id": null
            },
            {
                id: "l-5",
                title: "Letter 5",
                content: "Content 5",
                date: "2021-01-04",
                author: "user-3",
                "replied-id": "l-2"
            },
            {
                id: letterId,
                title: "Letter 7",
                content: "Content 7",
                date: "2025-01-19",
                author: "user-1",
                "replied-id": null 
            }
        ];
        expect(sendLetter(LOGINEMAIL, letterId)).toStrictEqual(sentLetters);
    });

    test('4. deleteLetter passed - Delete letter "l-3"', () => {
        deleteLetter(LOGINEMAIL, "l-3");
        expect(() => { getLetterDetails(LOGINEMAIL, "l-3") }).toThrow("Letter not found!");
    });
    
    test('5. deleteLetter passed - Delete letter "l-6"', () => {
        deleteLetter(LOGINEMAIL, "l-6");
        expect(() => { getLetterDetails(LOGINEMAIL, "l-6") }).toThrow("Letter not found!");
    });

    test('6. deleteLetter passed - Delete letter "l-2"', () => {
        deleteLetter(LOGINEMAIL, "l-2");
        expect(() => { getLetterDetails(LOGINEMAIL, "l-2") }).toThrow("Letter not found!");
    }); 

    afterEach(() => {
        resetDatabase();
    })
});

 describe('Letter feature error', () => {
    beforeEach(() => {
        const resultAuth = authRegister('tavish.f.degroot@gmail.com', 'Aar432!nxaJdd', 'Tavish')
            if (resultAuth instanceof Error) {
            throw resultAuth;
        }

        const resultLogin = authLogin(LOGINEMAIL, LOGINPASSWORD);
        if (resultLogin instanceof Error) {
            throw resultLogin;
        }
    });

    test('1. Create letter error', () => {
        expect(() => { createLetter('lalalala@gmail.com') }).toThrow("User not found!")
    }) 

    test('2. replyToLetter - replyEmail not found', () => {
        expect(() => { replyToLetter('lalalala@gmail.com', LOGINEMAIL, "l-2") }).toThrow("Replier not found!")
    })

    test('3. replyToLetter - sentEmail not found', () => {
        expect(() => { replyToLetter('tavish.f.degroot@gmail.com', "demon.k.cowley@gmail.com", "l-2") }).toThrow("Sender not found!")
    })

    test('4. replyToLetter - letter not found', () => {
        expect(() => { replyToLetter('tavish.f.degroot@gmail.com', LOGINEMAIL, "l-9") }).toThrow("Letter not found!")
    }) 

    test('5. getLetterDetails - user not found', () => {
        expect(() => { getLetterDetails('lalalala@gmail.com', "l-6") }).toThrow("User not found!")
    });

    test('6. getLetterDetails - user found, letter not found', () => {
        expect(() => { getLetterDetails(LOGINEMAIL, "l-9") }).toThrow("Letter not found!")
    });

    test('7. getLetterDetails - user found, letter not found', () => {
        expect(() => { getLetterDetails('tavish.f.degroot@gmail.com', "l-1") }).toThrow("Letter not found!")
    }); 

    test('8. sendLetter - User not found', () => {
        expect(() => { sendLetter('lalalala@gmail.com', "l-6") }).toThrow("User not found!")
    });

    test('9. sendLetter - User found, draft letter not found "l-9"', () => {
        expect(() => { sendLetter(LOGINEMAIL, "l-9") }).toThrow("Draft letter not found!")
    });

    test('10. sendLetter - User found, draft letter not found "l-1"', () => {
        expect(() => { sendLetter(LOGINEMAIL, "l-1") }).toThrow("Draft letter not found!")
    });

    test('11. sendLetter - User found, draft letter not found "l-2"', () => {
        expect(() => { sendLetter(LOGINEMAIL, "l-2") }).toThrow("Draft letter not found!")
    });

    test('12. sendLetter - User found, draft letter not found "l-3"', () => {
        expect(() => { sendLetter(LOGINEMAIL, "l-3") }).toThrow("Draft letter not found!")
    });

    test('13. sendLetter - User found, draft letter not found "l-4"', () => {
        expect(() => { sendLetter(LOGINEMAIL, "l-4") }).toThrow("Draft letter not found!")
    });

    test('14. sendLetter - User found, draft letter not found "l-5"', () => {
        expect(() => { sendLetter(LOGINEMAIL, "l-5") }).toThrow("Draft letter not found!")
    });

    test('15. deleteLetter - User or Letter not found', () => {
        expect(() => { deleteLetter('lalalala@gmail.com', "l-6") }).toThrow("User not found!")
    })

    test('16. deleteLetter - Letter not found, usaer exists', () => {
        expect(() => { deleteLetter(LOGINEMAIL, "RANDOM_ID_NOT_IN_DATABASE")}).toThrow("Letter not found!")
    })

    afterEach(() => {
        resetDatabase();
    });
});
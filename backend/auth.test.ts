// const { describe, afterEach } = require("node:test")
import { describe, test, expect, afterEach } from '@jest/globals';
import { authLogin, authRegister, authResetPassword, removeUser } from "./auth"
import { User } from './types'
import { resetDatabase } from './helper';

// test('npm syntax test', () => {
//   expect(1).toBe(1)
// })

describe('unit auth no error', () => {
  test('register', () => {
    const result = authRegister('tavish.f.degroot@gmail.com', 'Aar432!nxaJdd', 'Tavish')
    if (result instanceof Error) {
      throw result;
    }
    expect(result).toStrictEqual({
      id: result.id,
      name: 'Tavish',
      coins: 0,
      letters: {
        new: [],
        draft: [],
        opened: [],
        sent: []
      },
      inventory: {
        backgrounds: [],
        stickers: [],
        badges: []
      }
    })
  })

  test('login', () => {
    expect(authLogin('john.doe@gmail.com', '123456')).toStrictEqual({
      "id":"user-1",
      "name":"John Doe",
      "coins":1000,
      "letters":{
        "draft":[
          {
            "author": "user-1",
            "date": "2021-02-03",
            "id":"l-6",
            "title":"Letter 6",
            "replied-id": null,
            "content":"Content 6"
          }
        ],
        "new":[
          {
            "id":"l-1",
            "title":"Letter 1",
            "content":"Content 1",
            "date":"2021-01-01",
            "author":"user-2",
            "replied-id":null
          },
          {
            "id":"l-2",
            "title":"Letter 2",
            "content":"Content 2",
            "date":"2021-01-02",
            "author":"user-3",
            "replied-id":null
          }
        ],
        "opened":[
          {
            "id":"l-3",
            "title":"Letter 3",
            "content":"Content 3",
            "date":"2021-01-03",
            "author":"user-4",
            "replied-id":null
          }
        ],
        "sent":[
          {
            "id":"l-4",
            "title":"Letter 4",
            "content":"Content 4",
            "date":"2021-01-04",
            "author":"user-1",
            "replied-id":null
          },
          {
            "id":"l-5",
            "title":"Letter 5",
            "content":"Content 5",
            "date":"2021-01-04",
            "author":"user-3",
            "replied-id":"l-2"
          }
        ]
      },
      "inventory":{
        "backgrounds":[
          {
            "id":"bg-1",
            "name":"Background 1",
            "price":100
          },
          {
            "id":"bg-2",
            "name":"Background 2",
            "price":200
          }
        ],
        "stickers":[
          {
            "id":"s-1",
            "name":"Sticker 1",
            "price":50
          },
          {
            "id":"s-2",
            "name":"Sticker 2",
            "price":75
          }
        ],
        "badges":[
          {
            "id":"bd-1",
            "name":"Badge 1",
            "price":150
          },
          {
            "id":"bd-2",
            "name":"Badge 2",
            "price":250
          }
        ]
      }
    })
  })

  test('reset password', () => {
    const result = authRegister('tavish.f.degroot@gmail.com', 'Aar432!nxaJdd', 'Tavish')
    authResetPassword('tavish.f.degroot@gmail.com', 'NewAar432!nxaJdd')
    expect(authLogin('tavish.f.degroot@gmail.com', 'NewAar432!nxaJdd')).toStrictEqual({
      id: expect.any(String),
      name: 'Tavish',
      coins: 0,
      letters: {
        new: [],
        draft: [],
        opened: [],
        sent: []
      },
      inventory: {
        backgrounds: [],
        stickers: [],
        badges: []
      }
    })
  })

  test('remove user removes user', () => {
    const result = authRegister('tavish.f.degroot@gmail.com', 'Aar432!nxaJdd', 'Tavish')
    if (result instanceof Error) {
      throw result;
    }
    expect(removeUser('tavish.f.degroot@gmail.com')).toStrictEqual({ id: result.id })
    expect(() => { authLogin('tavish.f.degroot@gmail.com', 'Aar432!nxaJdd') }).toThrow('User not found!');
  })

  test('remove user removes no one', () => {
    expect(() => { authLogin('tavish.f.degroot@gmail.com', 'Aar432!nxaJdd') }).toThrow('User not found!');
    expect(removeUser('tavish.f.degroot@gmail.com')).toStrictEqual(null)
  })

  afterEach(() => {
    // clear database
    resetDatabase();
  })
})

describe('unit auth error checking', () => {
  describe('register errors', () => {
    test('invalid email regex', () => {
      expect(() => { authRegister('tavish.f.degrootgmail.com', 'Aar432!nxaJdd', 'Tavish') }).toThrow('Invalid email!');
    })

    test('invalid input', () => {
      expect(() => { authRegister('tavish.f.degroot@gmail.com', '', 'Tavish') }).toThrow('Invalid input!');
    })

    test('weak password', () => {
      expect(() => { authRegister('tavish.f.degroot@gmail.com', 'password', 'Tavish') }).toThrow('Password must be at least 12 characters long!');
    })

    test('used email', () => {
      expect(() => { authRegister('john.doe@gmail.com', 'Aar432!nxaJdd', 'Tavish') }).toThrow('User already exists!');
    })
  }),
  describe('login errors', () => {
    test('invalid input', () => {
      expect(() => { authLogin('john.doe@gmail.com', '') }).toThrow('Invalid input!');
    })

    test('user not found', () => {
      expect(() => { authLogin('jeremy.da.scout@gmail.com', 'suckMYB0nkHEAVY') }).toThrow('User not found!');
    })
    
    test('incorrect password', () => {
      expect(() => { authLogin('john.doe@gmail.com', 'incorrectPassword') }).toThrow('Incorrect password!');
    })
  })
  describe('reset password errors', () => {
    test('invalid input', () => {
      expect(() => { authResetPassword('john.doe@gmail.com', '') }).toThrow('Invalid input!');
    })

    test('user not found', () => {
      expect(() => { authResetPassword('jeremy.da.scout@gmail.com', 'suckMYB0nkHEAVY') }).toThrow('User not found!');
    })
    
    test('weak password', () => {
      expect(() => { authResetPassword('john.doe@gmail.com', '7') }).toThrow('Password must be at least 12 characters long!');
    })
  })
  afterEach(() => {
    resetDatabase();
  })
})

describe('unit auth password strength', () => {
  test('lack of characters', () => {
    expect(() => { authRegister('tavish.f.degroot@gmail.com', 'Aa1', 'Tavish') }).toThrow('Password must be at least 12 characters long!');
  })

  test('no uppercase', () => {
    expect(() => { authRegister('tavish.f.degroot@gmail.com', 'yippekeyaykayoooo1', 'Tavish') }).toThrow('Password must contain at least one uppercase letter!');
  })

  test('no lowercase', () => {
    expect(() => { authRegister('tavish.f.degroot@gmail.com', 'LOUDNOISESAAAAAAAA!!!1!!', 'Tavish') }).toThrow('Password must contain at least one lowercase letter!');
  })

  test('no numbers', () => {
    expect(() => { authRegister('tavish.f.degroot@gmail.com', 'Nonumbersoverhere', 'Tavish') }).toThrow('Password must contain at least one number!');
  })
  
  afterEach(() => {
    resetDatabase();
  })
})
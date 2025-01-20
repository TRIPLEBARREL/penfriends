// const { describe, afterEach } = require("node:test")
import { authLogin, authRegister, authResetPassword, removeUser } from "./auth"

test('npm syntax test', () => {
  expect(1).toBe(1)
})

describe('unit login and register', () => {
  test('register', () => {
    const result = authRegister('tavish.f.degroot@gmail.com', 'password', 'Tavish')
    expect(authRegister('tavish.f.degroot@gmail.com', 'password', 'Tavish')).toBe({
      id: result.id,
      password: 'password', 
      name: 'Tavish',
      letters: {
        new: [],
        old: [],
        sent: []
      },
      inventory: {
        backgrounds: [],
        stickers: [],
        badges: []
      }
    })
  })

  afterEach(() => {
    // clear database
    removeUser('tavish.f.degroot@gmail.com')
  })
})
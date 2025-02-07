import { describe, test, expect, afterEach } from '@jest/globals';
import { Letter } from './types';
import { getNewLetters, getOldLetters, getSentLetters, getDraftLetters } from './list';

describe('Get letters no errors', () => {

  test('Get new letters', () => {
    const result: Letter[] = [
      {
          id: "l-1",
          title: "Letter 1",
          content: "Content 1",
          date: "2021-01-01",
          author: "user-2",
          "replied-id": null
      },
      {
          id: "l-2",
          title: "Letter 2",
          content: "Content 2",
          date: "2021-01-02",
          author: "user-3",
          "replied-id": null
      }
    ]

    expect(getNewLetters("john.doe@gmail.com")).toStrictEqual(result)
  })

  test('Get old letters', () => {
    const result: Letter[] = [
      {
        id: "l-3",
        title: "Letter 3",
        content: "Content 3",
        date: "2021-01-03",
        author: "user-4",
        "replied-id": null
      }
    ]

    expect(getOldLetters("john.doe@gmail.com")).toStrictEqual(result)
  })

  test('Get sent letters', () => {
    const result: Letter[] = [
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
      }
    ]

    expect(getSentLetters("john.doe@gmail.com")).toStrictEqual(result)
  })
  
  test('Get draft letters', () => {
    const result: Letter[] = [
      {
        "id": "l-6",
        "title": "Letter 6",
        "content": "Content 6",
        "date": "2021-02-03",
        "author": "user-1",
        "replied-id": null
      }
    ]

    expect(getDraftLetters("john.doe@gmail.com")).toStrictEqual(result)
  })

})

describe('Error testing', () => {
  test('Invalid/nonexistent email get new letters', () => {
    expect(() => { getNewLetters("notavalidemail") }).toThrow("User not found!")
  })

  test('Invalid/nonexistent email get old letters', () => {
    expect(() => { getOldLetters("stillotavalidemail") }).toThrow("User not found!")
  })

  test('Invalid/nonexistent email get sent letters', () => {
    expect(() => { getSentLetters("idontexistinthedatabase@hotmail.com") }).toThrow("User not found!")
  })

  test('Invalid/nonexistent email get draft letters', () => {
    expect(() => { getDraftLetters("idontexistinthedatabase@hotmail.com") }).toThrow("User not found!")
  })
})

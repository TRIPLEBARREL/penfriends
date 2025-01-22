const fs = require('fs');
import { User, Code } from './types';
const jwt = require('jsonwebtoken');

// ONLY use for GET requests
/**
 * getUser: Fetches user info given a specific email
 * @param email 
 * @returns user info associated with given email
 */
export function getUser(email: string): User {
  const data = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  return data[email];
}

export function verifyToken(token: string): Code {
  if (!token) {
    return { code: 401, message: "Unauthorised access" }
  }
  try {
    jwt.verify(token, process.env.PRIVATEKEY);
  } catch (error) {
    return { code: 403, message: "Forbidden access" }
  }
  return { code: 200, message: "Success" }
}
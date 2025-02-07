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

export function resetDatabase(): void {
  const data = JSON.stringify({"john.doe@gmail.com":{"id":"user-1","password":"123456","name":"John Doe","coins":1000,"letters":{"new":[{"id":"l-1","title":"Letter 1","content":"Content 1","date":"2021-01-01","author":"user-2","replied-id":null},{"id":"l-2","title":"Letter 2","content":"Content 2","date":"2021-01-02","author":"user-3","replied-id":null}],"opened":[{"id":"l-3","title":"Letter 3","content":"Content 3","date":"2021-01-03","author":"user-4","replied-id":null}],"draft":[{"id":"l-6","title":"Letter 6","content":"Content 6","date":"2021-02-03","author":"user-1","replied-id":null}],"sent":[{"id":"l-4","title":"Letter 4","content":"Content 4","date":"2021-01-04","author":"user-1","replied-id":null},{"id":"l-5","title":"Letter 5","content":"Content 5","date":"2021-01-04","author":"user-3","replied-id":"l-2"}]},"inventory":{"backgrounds":[{"id":"bg-1","name":"Background 1","price":100},{"id":"bg-2","name":"Background 2","price":200}],"stickers":[{"id":"s-1","name":"Sticker 1","price":50},{"id":"s-2","name":"Sticker 2","price":75}],"badges":[{"id":"bd-1","name":"Badge 1","price":150},{"id":"bd-2","name":"Badge 2","price":250}]}}});
  fs.writeFileSync('./users.json', data);
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
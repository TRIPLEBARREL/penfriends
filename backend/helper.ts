import fs from 'fs';

// ONLY use for GET requests
/**
 * getUser: Fetches user info given a specific email
 * @param email 
 * @returns user info associated with given email
 */
export function getUser(email: string): User {
  const data = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  return data.filter((user) => user.email === email);
}
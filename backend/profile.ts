
import fs from 'fs';
import { getUser } from './helper';
import { User } from './types';

/**
 * showProfile: returns user information
 * @param email 
 * @returns 
 */
function showProfile(email: string) {
  const user: User = getUser(email);
  if (!user) {
    throw new Error("User not found!");
  }
  const password: string = user.password;
  const name: string = user.name;
  return {
    email: email,
    password: password,
    name: name
  };
}

export { showProfile };
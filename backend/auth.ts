import fs from 'fs';
import { getUser } from './helper';
import { User, UsersDB, IdObject } from './types';
import validator from 'validator';

/**
 * authLogin: logs in the user and returns the token
 * @param email 
 * @param password 
 * @returns 
 */
function authLogin(email: string, password: string): Error | User {
  if (!email || !password) {
    throw new Error("Invalid input!");
  }
  const user = getUser(email);
  if (!user) {
    throw new Error("User not found!");
  } if (user.password !== password) {
    throw new Error("Incorrect password!");
  }
  delete user.password;
  return user;
}

function checkPasswordStrength(password: string): { value: string } {
  if (password.length < 12) {
    return { value: "Password must be at least 12 characters long!" };
  }
  if (!/[a-z]/.test(password)) {
    return { value: "Password must contain at least one lowercase letter!" };
  }
  if (!/[A-Z]/.test(password)) {
    return { value: "Password must contain at least one uppercase letter!" };
  }
  if (!/[0-9]/.test(password)) {
    return { value: "Password must contain at least one number!" };
  }
  return { value: "Strong" };
}

/**
 * authRegister: registers the user, saves the user to the database and returns the token
 * @param email
 * @param password 
 * @param name 
 * @returns 
 */
function authRegister(email: string, password: string, name: string = ''): Error | User {
  const dataObj: UsersDB = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const passwordStrengthMsg = checkPasswordStrength(password).value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!email || !password) {
    throw new Error("Invalid input!");
  } else if (!validator.isEmail(email)) {
    throw new Error("Invalid email!");
  } else if (dataObj[email]) {
    throw new Error("User already exists!");
  } else if (passwordStrengthMsg !== "Strong") {
    throw new Error(passwordStrengthMsg);
  }
  
  const id = crypto.randomUUID();
  dataObj[email] = {
    id: id,
    name: name,
    coins: 0,
    letters: {
      new: [],
      opened: [],
      draft: [],
      sent: [],
    },
    inventory: {
      backgrounds: [],
      stickers: [],
      badges: []
    }
  };
  fs.writeFileSync('./users.json', JSON.stringify(dataObj));

  return {
    id: id,
    name: name,
    coins: 0,
    letters: {
      new: [],
      opened: [],
      draft: [],
      sent: []
    },
    inventory: {
      backgrounds: [],
      stickers: [],
      badges: []
    }
  };
}

/**
 * authResetPassword: resets the password of the user but does not login the user
 * @param email
 * @param newPasword 
 * @returns 
 */
function authResetPassword(email: string, newPassword: string): Error | IdObject {
  let dataObj = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const passwordStrengthMsg = checkPasswordStrength(newPassword).value

  if (!email || !newPassword) {
    throw new Error("Invalid input!");
  }
  const targetUser = dataObj[email];
  if (!targetUser) {
    throw new Error("User not found!");
  } else if (passwordStrengthMsg !== "Strong") {
    throw new Error(passwordStrengthMsg);
  }
  targetUser.password = newPassword;

  // updating function
  dataObj[email] = targetUser;
  fs.writeFileSync('./users.json', JSON.stringify(dataObj));
  return { id: targetUser.id };
}

// dev function: not for use by users, YET
function removeUser(email: string): null | IdObject {
  let dataObj: UsersDB = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  if (dataObj[email] === undefined) {
    return null;
  }
  const targetUser: User = dataObj[email];
  delete dataObj[email];
  fs.writeFileSync('./users.json', JSON.stringify(dataObj));
  return { id: targetUser.id };
}

export { authLogin, authRegister, authResetPassword, removeUser };
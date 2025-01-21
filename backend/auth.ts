import fs from 'fs';
import { getUser } from './helper';
import { User } from './types';

// export const getEmailFromAuthorization = (authorization: any) => {
//   try {
    
//     const token = authorization.replace("Bearer ", "");
//     const { email } = jwt.verify(token, JWT_SECRET);
//     if (!(email in data)) {
//       throw new AccessError("Invalid Token");
//     }
//     return email;
//   } catch(error) {
//     throw new AccessError("Invalid token");
//   }
// };

/**
 * authLogin: logs in the user and returns the token
 * @param email 
 * @param password 
 * @returns 
 */
function authLogin(email: string, password: string): User {
  const user: User = getUser(email);
  if (!user) {
    throw new Error("User not found!");
  }
  if (user.password !== password) {
    throw new Error("Incorrect password!");
  }

  return user;
}

/**
 * authRegister: registers the user, saves the user to the database and returns the token
 * @param email
 * @param password 
 * @param name 
 * @returns 
 */
function authRegister(email: string, password: string, name: string) {
  const dataObj = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const id = crypto.randomUUID();
  dataObj.emails.push({
    id: id,
    password: password, 
    name: name,
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
  });
  fs.writeFileSync('./users.json', JSON.stringify(dataObj));

  return {
    id: id,
    password: password, 
    name: name,
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
  };
}

/**
 * authResetPassword: resets the password of the user but does not login the user
 * @param email
 * @param newPasword 
 * @returns 
 */
function authResetPassword(email: string, newPassword: string) {
  let dataObj = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const targetUser = dataObj.keys().filter((user: string) => user === email);
  if (!targetUser) {
    throw new Error("User not found!");
  }
  targetUser.password = newPassword;

  // updating function
  dataObj = dataObj.map((email: string) => targetUser === email ? targetUser : email); 
  return crypto.randomUUID();
}

function removeUser(email: string) {
  let dataObj = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf8'}));
  const targetUser: User = dataObj.filter((user: string) => user === email);
  dataObj = dataObj.filter((user: string) => user !== email);
  fs.writeFileSync('./users.json', JSON.stringify(dataObj));
  return { name: targetUser.name };
}

export { authLogin, authRegister, authResetPassword, removeUser };
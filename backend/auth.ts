// import { AccessError } from './error';
// import {jwt} from 'jsonwebtoken';

import data from './database.json';

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

function authLogin(email: string, password: string) {
  if (!(email in data)) {
    throw new Error("User not found!");
  }
  if (data[email].password !== password) {
    throw new Error("Incorrect password!");
  }
  return crypto.randomUUID();
}

function authRegister(email: string, password: string, name: string) {
  if (email in data) {
    throw new Error("User already exists!");
  }
  data[email] = { password, name };
  return crypto.randomUUID();
}

function authResetPassword(email: string, newPasword: string) {
  if (!(email in data)) {
    throw new Error("User not found!");
  }
  data[email].password = '';
  return crypto.randomUUID();
}

export { authLogin, authRegister, authResetPassword };
import data from './database.json';
import fs from 'fs';

function showProfile(email: string) {
  const dataObj = JSON.parse(fs.readFileSync('./database.json', {encoding: 'utf8'}));
  const user = dataObj.filter((user) => user.email === email);
  if (!user) {
    throw new Error("User not found!");
  }
  const { password, name } = data[email];
  return {
        email: email,
        password: password,
        name: name
  };
}

export { showProfile };
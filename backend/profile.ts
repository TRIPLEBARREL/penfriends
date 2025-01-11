import data from './database.json';

function showProfile(email: string) {
  if (!(email in data)) {
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
import bcrypt from 'bcrypt';

const SALT = 'FRISS';
const SALT_ROUNDS = 10;

const addSalt = (email, password) => `${SALT}:${email}:${password}`;

export const compareHash = (email, password, user) =>
  bcrypt.compareSync(addSalt(email, password), user.password);

export default (email, password) => bcrypt.hashSync(addSalt(email, password), SALT_ROUNDS);

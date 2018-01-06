import bcrypt from 'bcrypt';

const SALT = 'FRISS';
const SALT_ROUNDS = 10;

export default (email, password) => bcrypt.hashSync(`${SALT}:${email}:${password}`, SALT_ROUNDS);

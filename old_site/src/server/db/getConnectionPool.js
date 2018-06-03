import { Pool } from 'pg';

let pool;

export default () => {
  if (pool) return pool;

  if (process.env.NODE_ENV !== 'production') {
    pool = new Pool({
      database : 'friss',
      host     : 'localhost',
      password : '',
      port     : 5432,
      user     : 'bryan',
    });
  }

  if (process.env.NODE_ENV === 'production') {
    pool = new Pool({ connectionString : process.env.DATABASE_URL });
  }

  return pool;
};

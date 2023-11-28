import dotenv from 'dotenv';
import path from 'path';

// dotenv setup with process.cwd() :
dotenv.config({ path: path.join(process.cwd(), '.env') });
// console.log(process.cwd() + ".env");

export = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URI,
  bcrypt_solt_rounds: process.env.BCRYPT_SOLT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
};

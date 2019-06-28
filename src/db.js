import { Pool } from "pg";

/*
  Handles connecting to the database, accepts out options by default
*/
export const connect = async opts => {
  const pool = new Pool(opts);

  return await pool.connect();
};

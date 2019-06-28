import dotenv from 'dotenv'
import { connect } from './db'

dotenv.config()

export const start = async () => {
  const pool = await connect({
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    hostname: process.env.DB_HOSTNAME
  })
}

import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { dbConfig } from './config'
import * as schema from './schema'

const pool = mysql.createPool(dbConfig)

export const db = drizzle(pool, { schema, mode: 'default' })

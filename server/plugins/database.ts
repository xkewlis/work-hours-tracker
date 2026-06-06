import { sql } from 'drizzle-orm'
import { db } from '../infrastructure/database/drizzle'
import { CustomError } from '../shared/errors/custom.error'

export default defineNitroPlugin(async () => {
  try {
    await db.execute(sql`SELECT 1`)
    console.log('[DB] MySQL connection established')
  } catch (error) {
    console.error('[DB] Connection failed:', error)
    throw CustomError.internalServer('Database connection failed')
  }
})

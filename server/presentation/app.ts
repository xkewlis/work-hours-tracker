import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { v1Router } from './routes/v1/routes'

const app = new Hono().basePath('/api')

app.use('*', logger())
app.use('*', cors())
app.route('/v1', v1Router)

export { app as honoApp }

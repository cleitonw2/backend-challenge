import { MongoHelper } from '@/infra/repositories'
import express from 'express'
import { env } from './config/env'
import { routes } from './routes'

const app = express()
app.use(express.json())

MongoHelper.connect(env.mongoUrl).catch(console.error)

app.use(routes)

export { app }

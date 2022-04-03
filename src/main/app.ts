import { MongoHelper } from '@/infra/repositories'
import express from 'express'
import { env } from './config/env'

const app = express()
app.use(express.json())

MongoHelper.connect(env.mongoUrl).catch(console.error)

app.get('/', (req, res) => {
  return res.json('Back-end Challenge 2021 🏅 - Space Flight News')
})

export { app }

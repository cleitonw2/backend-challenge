import express from 'express'
import swaggerSetup from './config/swagger'
import { routes } from './routes'

const app = express()
app.use(express.json())

swaggerSetup(app)
app.use(routes)

export { app }

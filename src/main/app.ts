import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.json('Back-end Challenge 2021 🏅 - Space Flight News')
})

export { app }

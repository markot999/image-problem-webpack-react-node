import express from 'express'
import data from './data.js'

const app = express()
const port = process.env.PORT || 8000

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}}`)
})
